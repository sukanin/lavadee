import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';

export const controlsPagesWeb: INavPage[] = [
  {
    title: 'Controls',
    url: '#/controls/web',
    isHiddenFromMainNav: true,
    component: () => <LoadingComponent title="Controls" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/HomePage/HomePage').HomePage)),
  },
];

// Old list
// const categories: { [name: string]: string[] } = {
//   'Basic Inputs': [
//     'Button',
//     'Checkbox',
//     'ChoiceGroup',
//     'ComboBox',
//     'ContextualMenu',
//     'Dropdown',
//     'Label',
//     'Link',
//     'Rating',
//     'Slider',
//     'SpinButton',
//     'TextField',
//     'Toggle'
//   ],
//   Navigation: [
//     'Breadcrumb',
//     'CommandBar',
//     'Nav',
//     'OverflowSet',
//     'Pivot',
//     'SearchBox'
//   ],
//   Layout: [
//     'Stack'
//   ],
//   Content: [
//     'ActivityItem',
//     'Calendar',
//     'DetailsList',
//     'Facepile',
//     'GroupedList',
//     'Icon',
//     'Image',
//     'List',
//     'Persona',
//     'Separator'
//   ],
//   Pickers: [
//     'Pickers',
//     'ColorPicker',
//     'DatePicker',
//     'PeoplePicker',
//     'SwatchColorPicker'
//   ],
//   'Progress & Validation': [
//     'MessageBar',
//     'ProgressIndicator',
//     'Shimmer',
//     'Spinner'
//   ],
//   Surfaces: [
//     'Callout',
//     'Dialog',
//     'DocumentCard',
//     'HoverCard',
//     'Layer',
//     'Modal',
//     'Overlay',
//     'Panel',
//     'ScrollablePane',
//     'TeachingBubble',
//     'Tooltip',
//     'Coachmark'
//   ],
//   Utilities: [
//     'FocusTrapZone',
//     'FocusZone',
//     'MarqueeSelection',
//     'ResizeGroup',
//     'Selection',
//     'Text',
//     'Themes'
//   ]
// };
