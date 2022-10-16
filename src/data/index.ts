import {
  HomeScreen,
  Animation01Screen,
  Animation02Screen,
  SwitchScreen,
  MenuItem,
  RoutesProps,
  AlertScreen,
  InputTextScreen,
} from '../index';

export const menuItemsTemplate: MenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01Screen',
  },
  {
    name: 'Animation 02',
    icon: 'albums-outline',
    component: 'Animation02Screen',
  },
  {
    name: 'Switch 03',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert 04',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'InputText 04',
    icon: 'alert-circle-outline',
    component: 'InputTextScreen',
  },
];

export const routesStack: RoutesProps[] = [
  {
    id: '1',
    name: 'HomeScreen',
    title: 'HomeScreen',
    component: HomeScreen,
  },
  {
    id: '2',
    name: 'Animation01Screen',
    title: 'Animation01Screen',
    component: Animation01Screen,
  },
  {
    id: '3',
    name: 'Animation02Screen',
    title: 'Animation02Screen',
    component: Animation02Screen,
  },
  {
    id: '4',
    name: 'SwitchScreen',
    title: 'SwitchScreen',
    component: SwitchScreen,
  },
  {
    id: '5',
    name: 'AlertScreen',
    title: 'AlertScreen',
    component: AlertScreen,
  },
  {
    id: '6',
    name: 'InputTextScreen',
    title: 'InputTextScreen',
    component: InputTextScreen,
  },
];
