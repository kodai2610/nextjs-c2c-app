import '../src/styles/globals.css'; //グローバルCSSの適用
import * as NextImage from 'next/image';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

//next/imageの差し替え
const OriginNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginNextImage {...props} unoptimized />,
});
