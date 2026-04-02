import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'gallery-project',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'docs',
      baseUrl: '/gallery-project/',
      serviceWorker: null, // disable service workers
    },
  ],
};
