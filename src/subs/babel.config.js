module.exports = {
  ...require('@warungpintar/warpin-scripts/config/babel.config'),
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
