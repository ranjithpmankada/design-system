export { useCollator } from '@react-aria/i18n';

//Theme
export { default as NextUIProvider } from './theme/theme-provider';
export { changeTheme, getDocumentTheme, getTokenValue } from './theme/utils';
export type { VariantProps, CSS } from './theme/stitches.config';
export type {
  Theme,
  NextUITheme,
  ThemeType,
  CreateTheme,
  NextUIThemeContext
} from './theme/types';
export {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  config as stitchesConfig,
  theme as defaultTheme
} from './theme/stitches.config';
export * from './theme/shared-css';
export * from './theme/colors';

export { default as Button, type ButtonProps } from "./button";
