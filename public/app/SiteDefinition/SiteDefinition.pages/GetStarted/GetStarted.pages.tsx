import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';

export const GetStartedPages: INavPage = {
  title: 'Get started',
  url: '#/get-started',
  isUhfLink: true,
  hasPlatformPicker: true,
  component: () => <LoadingComponent title="Get started" />,
  getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
  platforms: {
    web: [
      {
        title: 'Get started',
        url: '#/get-started/web',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
      },
    ],
    ios: [
      {
        title: 'Get started',
        url: '#/get-started/ios',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
      },
    ],
    android: [
      {
        title: 'Get started',
        url: '#/get-started/android',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
      },
    ],
  },
};
