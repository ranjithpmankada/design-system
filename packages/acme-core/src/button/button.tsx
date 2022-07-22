import React from 'react';
import { FocusRingAria, useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useButton } from '@react-aria/button';
import { FocusableProps, PressEvents } from '@react-types/shared';
import {mergeProps}from '@react-aria/utils';
import ButtonIcon from './button-icon';
import StyledButton, { ButtonVariantsProps } from './button.styles';
import { config, CSS } from '../theme/stitches.config';
import { NormalColors } from '../utils/prop-types';
import { useDOMRef } from '../utils/dom';
import type { AriaButtonProps } from '@react-types/button';
import type * as Stitches from '@stitches/react';



export interface Props extends PressEvents, FocusableProps, AriaButtonProps {
  light?: boolean;
  color?: NormalColors;
  flat?: boolean;
  animated?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  bordered?: boolean;
  auto?: boolean;
  ripple?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  // @deprecated
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode | undefined;
  iconLeftCss?: CSS;
  iconRightCss?: CSS;
  id?: string;
  rounded?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  css?: Stitches.CSS<typeof config>;
}

const defaultProps = {
  auto: false,
  type: 'button'
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>;

interface IFocusRingAria extends FocusRingAria {
  focusProps: Omit<React.HTMLAttributes<HTMLElement>, keyof ButtonProps>;
}

export type ButtonProps = Props &
  NativeAttrs &
  Omit<ButtonVariantsProps, 'isPressed' | 'isHovered' | 'isChildLess'> & {
    css?: CSS;
  };

const BUTTON_NAME = 'Button';

const Button = React.forwardRef<HTMLButtonElement | null, ButtonProps>(
  (props, ref) => {
    const {
      as,
      auto = true,
      autoFocus,
      children,
      className,
      startIcon: startIconProp,
      endIcon: endIconProp,
      icon: iconProp,
      disabled,
      css,
      onClick,
      onPress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
      ...btnProps
    } = props;

    // const groupConfig = useButtonGroupContext();
    // const filteredProps = filterPropsWithGroup(btnProps, groupConfig);
    // const cssColors = getCssColors(filteredProps);

    // /* eslint-disable @typescript-eslint/no-unused-vars */
    // const {
    //   flat,
    //   children,
    //   disabled,
    //   animated,
    //   light,
    //   ripple,
    //   bordered,
    //   auto,
    //   borderWeight,
    //   icon,
    //   iconRight,
    //   ghost,
    //   autoFocus,
    //   className,
    //   ...props
    // } = filteredProps;

    // const handleDrip = (
    //   e: React.MouseEvent<HTMLButtonElement> | PressEvent
    // ) => {
    //   if (animated && ripple && buttonRef.current) {
    //     onDripClickHandler(e);
    //   }
    // };

    // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   handleDrip(e);
    //   onClick?.(e);
    // };

    // const handlePress = (e: PressEvent) => {
    //   if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
    //     handleDrip(e);
    //     // TODO: take this out and deprecate onClick function for next release (only use the @react-aria/button impl)
    //     onClick?.(e as any);
    //   }
    //   onPress

    const buttonRef = useDOMRef(ref);

    const { buttonProps, isPressed } = useButton(
      {
        ...btnProps,
        onClick,
        isDisabled: disabled,
        elementType: as,
        onPress,
        onPressStart,
        onPressEnd,
        onPressChange,
        onPressUp
      } as AriaButtonProps,
      buttonRef
    );

    const { hoverProps, isHovered } = useHover({ isDisabled: disabled, 
      onHoverStart: () => {}, onHoverEnd: () =>{}, onHoverChange: () => {} });

    const { isFocused, isFocusVisible, focusProps }: IFocusRingAria =
      useFocusRing({ autoFocus });

    // const { onClick: onDripClickHandler, ...dripBindings } = useDrip(
    //   false,
    //   buttonRef
    // );
    // /* eslint-enable @typescript-eslint/no-unused-vars */
    // if (__DEV__ && filteredProps.color === 'gradient' && (flat || light)) {
    //   useWarning(
    //     'Using the gradient color on flat and light buttons will have no effect.'
    //   );
    // }
    // const hasIcon = icon || iconRight;
    const isChildLess = React.Children.count(children) === 0;
    // const isRight = Boolean(iconRight);

    // const getState = useMemo(() => {
    //   if (isPressed) return 'pressed';
    //   if (isHovered) return 'hovered';
    //   return disabled ? 'disabled' : 'ready';
    // }, [disabled, isHovered, isPressed]);

    // const getIconCss = useMemo<any>(() => {
    //   if (isRight) return iconRightCss;
    //   return iconLeftCss;
    // }, [isRight, iconRightCss, iconLeftCss]);

    return (
      <StyledButton
        as={as}
        ref={ref}
        auto={auto}
        isChildLess={isChildLess}
        isHovered={isHovered}
        className={className}
        css={{ ...css }}
        {...mergeProps(buttonProps, focusProps, hoverProps, btnProps)}
      >
        {React.Children.count(children) === 0 ? (
          <ButtonIcon icon={iconProp} />
        ) : (
          <>
            <ButtonIcon
              icon={startIconProp}
              css={{ position: 'absolute', left: 0 }}
            />
            {children}
            <ButtonIcon
              icon={endIconProp}
              css={{ position: 'absolute', right: 0 }}
            />
          </>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = BUTTON_NAME;

Button.defaultProps = {
  disabled: false,
  bordered: false,
  rounded: false
};

export default Button;
