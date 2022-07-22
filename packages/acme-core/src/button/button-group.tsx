import ButtonGroupContext from './button-group.context';
import StyledGroupButton from './button-group.styles';
interface ButtonGroupProps {
  children?: React.ReactNode;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const { children } = props;
  return (
    <ButtonGroupContext.Provider value={{}}>
      <StyledGroupButton>{children}</StyledGroupButton>
    </ButtonGroupContext.Provider>
  );
};

export default ButtonGroup;
