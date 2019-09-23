import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-complete',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [
        { src: 'demo' }
      ],
      serviceWorker: null // disable service workers
    }
  ]
};
