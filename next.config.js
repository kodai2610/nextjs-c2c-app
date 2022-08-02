/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: () => {
    let compilerConfig = {};

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        //本番環境ではReactTestingLibraryで使用するdata-test-id属性を削除する
        reactRemovePropTypes: { properties: ['^data-test-id$'] },
      };
    }

    return compilerConfig;
  },
};

module.exports = nextConfig;
