import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';

export const controlsPagesIos: INavPage[] = [
  {
    title: 'Controls',
    url: '#/controls/ios',
    isHiddenFromMainNav: true,
    component: () => <LoadingComponent title="Controls" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
  },
];
