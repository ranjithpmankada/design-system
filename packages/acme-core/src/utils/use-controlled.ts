import React from 'react';

export interface useControlledProps<T> {
  controlled?: T;
  default?: T;
  name?: string;
  componentName?: string;
  state?: string;
  onChange?: (value?: T) => void;
}

export default function useControlled<T>({
  controlled: value,
  default: defaultValue,
  onChange
}: useControlledProps<T>): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
] {

  const [stateValue, setStateValue] = React.useState(value || defaultValue);

  const ref = React.useRef(value !== undefined);

  const wasControlled = ref.current;

  const isControlled = value !== undefined;

  // Internal state reference for useCallback
  const stateRef = React.useRef(stateValue);

  if (wasControlled !== isControlled) {
    console.warn(
      `WARN: A component changed from ${
        wasControlled ? 'controlled' : 'uncontrolled'
      } to ${isControlled ? 'controlled' : 'uncontrolled'}.`
    );
  }

  const setValue = React.useCallback(
    (value:any, ...args :any) => {
      const onChangeCaller = (value: T | undefined, ...onChangeArgs: any) => {
        if (onChange) {
          if (!Object.is(stateRef.current, value)) {
            // onChange(value, ...onChangeArgs);
            onChange(value);
          }
        }
        if (!isControlled) {
          stateRef.current = value;
        }
      };

      if (typeof value === 'function') {
        const updateFunction = (oldValue: any, ...functionArgs: any) => {
          const interceptedValue = value(
            isControlled ? stateRef.current : oldValue,
            ...functionArgs
          );
          onChangeCaller(interceptedValue, ...args);
          if (!isControlled) {
            return interceptedValue;
          }
          return oldValue;
        };
        setStateValue(updateFunction);
      } else {
        if (!isControlled) {
          setStateValue(value);
        }
        onChangeCaller(value, ...args);
      }
    },
    [isControlled, onChange]
  );

  // If a controlled component's value prop changes, we need to update stateRef
  if (isControlled) {
    stateRef.current = value;
  } else {
    value = stateValue;
  }

  return [value, setValue];
}
