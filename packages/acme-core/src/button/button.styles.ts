import { styled, VariantProps } from '../theme/stitches.config';
import { cssFocusVisible, sharedDialogPopup } from '../theme/shared-css';

const StyledButton = styled('button', {
  $$buttonBorderRadius: '$radii$md',
  $$buttonPressedScale: 0.97,
  dflex: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  fontWeight: '$medium',
  us: 'none',
  lineHeight: '$sm',
  ta: 'center',
  whiteSpace: 'nowrap',
  transition: '$button',
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  cursor: 'pointer',
  pe: 'auto',
  // br: '$$buttonBorderRadius',
  p: 0,
  '&:disabled': {
    cursor: 'not-allowed'
  },
  variants: {
    bordered: {
      true: {
        bg: 'transparent',
        borderStyle: 'solid',
        color: '$text'
      }
    },
    size: {
      xs: {
        $$buttonPadding: '$space$3',
        $$buttonBorderRadius: '$radii$xs',
        $$buttonHeight: '$space$10',
        px: '$3',
        height: '$$buttonHeight',
        lh: '$space$10',
        width: 'auto',
        minWidth: '$20',
        fontSize: '$xs'
      },
      sm: {
        $$buttonPadding: '$space$5',
        $$buttonBorderRadius: '$radii$sm',
        $$buttonHeight: '$space$12',
        px: '$5',
        height: '$$buttonHeight',
        lh: '$space$14',
        width: 'auto',
        minWidth: '$36',
        fontSize: '$sm'
      },
      md: {
        $$buttonPadding: '$space$7',
        $$buttonBorderRadius: '$radii$md',
        $$buttonHeight: '$space$14',
        px: '$7',
        height: '$$buttonHeight',
        lh: '$space$14',
        width: 'auto',
        minWidth: '$48',
        fontSize: '$sm'
      },
      lg: {
        $$buttonPadding: '$space$9',
        $$buttonBorderRadius: '$radii$base',
        $$buttonHeight: '$space$16',
        px: '$9',
        height: '$$buttonHeight',
        lh: '$space$15',
        width: 'auto',
        minWidth: '$60',
        fontSize: '$md'
      },
      xl: {
        $$buttonPadding: '$space$10',
        $$buttonBorderRadius: '$radii$xl',
        $$buttonHeight: '$space$18',
        px: '$10',
        height: '$$buttonHeight',
        lh: '$space$17',
        width: 'auto',
        minWidth: '$72',
        fontSize: '$lg'
      }
    },
    color: {
      default: {
        bg: '$primary',
        color: '$primarySolidContrast'
      },
      primary: {
        bg: '$primary',
        color: '$primarySolidContrast',
      },
      secondary: {
        bg: '$secondary',
        color: '$secondarySolidContrast',
      },
      success: {
        bg: '$success',
        color: '$successSolidContrast',

      },
      error: {
        bg: '$error',
        color: '$errorSolidContrast',
        '&:disabled': {
          opacity: '0.5'
        }
      },
      warning: {
        bg: '$primary',
        color: '$primarySolidContrast',
      },
      gradient: {
        bg: '$primary',
        color: '$primarySolidContrast',
      },
    },
    auto: {
      true: {
        width: 'auto',
        minWidth: 'min-content'
      }
    },
    shape: {
      circle: {
        borderRadius: '50%'
      },
      default: {
        borderRadius: 'none'
      },
      rect: {
        borderRadius: 'unset'
      },
      round: {
        borderRadius: '20px'
      }
    },
    rounded: {
      true: {
        borderRadius: '50%'
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    isHovered: {
      true: {}
    },
    isChildLess: {
      true: {
        p: 0,
        width: '$$buttonHeight',
        height: '$$buttonHeight'
      }
    }
  },

  compoundVariants: [
    // size / auto / isChildLess
    {
      auto: true,
      isChildLess: false,
      size: 'xs',
      css: {
        px: '$5',
        minWidth: 'min-content'
      }
    },
    {
      auto: true,
      isChildLess: false,
      size: 'sm',
      css: {
        px: '$8',
        minWidth: 'min-content'
      }
    },
    {
      auto: true,
      isChildLess: false,
      size: 'md',
      css: {
        px: '$9',
        minWidth: 'min-content'
      }
    },
    {
      auto: true,
      isChildLess: false,
      size: 'lg',
      css: {
        px: '$10',
        minWidth: 'min-content'
      }
    },
    {
      auto: true,
      isChildLess: false,
      size: 'xl',
      css: {
        px: '$11',
        minWidth: 'min-content'
      }
    },
    {
      color: 'primary',
      isHovered: true,
      css: {
        borderColor: '$primaryHovered',
        backgroundBlendMode: '$primarySolidHover'
      }
    },
    {
      color: 'primary',
      bordered: true,
      css: {
        bg: '$primary'
      }
    },
    {
      color: 'secondary',
      isHovered: true,
      css: {
        bg: '$secondarySolidHover'
      }
    },
    {
      color: 'secondary',
      bordered: true,
      css: {
        borderColor: '$primary'
      }
    }
  ],
  defaultVariants: {
    size: 'md'
  },
  cssFocusVisible,
  sharedDialogPopup
});

export type ButtonVariantsProps = VariantProps<typeof StyledButton>;

export default StyledButton;
