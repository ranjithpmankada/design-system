import React from 'react';
import { styled } from '../theme/stitches.config';
import type { CSS } from '../theme/stitches.config';

interface ButtonIconProps {
  icon?: React.ReactNode;
  css?: CSS;
}

const StyledButtonIcon = styled('span', {
  dflex: 'center'
});

function ButtonIcon(props: ButtonIconProps) {
  const { icon: iconProp, css, ...rest } = props;

  if (!iconProp) return null;

  return (
    <StyledButtonIcon css={css} {...rest}>
      {iconProp}
    </StyledButtonIcon>
  );
}
export default ButtonIcon;
