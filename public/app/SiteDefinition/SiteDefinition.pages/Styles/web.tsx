import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';

export const stylesPagesWeb: INavPage[] = [
  {
    title: 'Styles',
    url: '#/styles/web',
    isHiddenFromMainNav: true,
    component: () => <LoadingComponent title="Styles" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
  },
  {
    title: 'Theme Designer',
    url: 'https://aka.ms/themedesigner',
    isExternal: true,
  },
];
