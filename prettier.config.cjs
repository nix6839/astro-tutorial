/** @satisfies {import('prettier').Config} */
const prettierConfig = {
  ...require('@nix6839/prettier-config'),

  overrides: [
    {
      files: '*.astro',
      options: {
        plugins: [require('prettier-plugin-astro')],
        parser: 'astro',
        astroAllowShorthand: true,
      },
    },
  ],
};

module.exports = prettierConfig;
