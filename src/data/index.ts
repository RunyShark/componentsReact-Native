import {
  HomeScreen,
  Animation01Screen,
  Animation02Screen,
  SwitchScreen,
  MenuItem,
  RoutesProps,
  AlertScreen,
  InputTextScreen,
  PullToRefreshScreen,
  SectionListScreen,
  DataProps,
  ModalScreen,
  infiniteScrollScreen,
  SliceScreen,
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
  {
    name: 'Pull to Refresh 05',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List 06',
    icon: 'refresh-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'ModalScreen 07',
    icon: 'refresh-outline',
    component: 'ModalScreen',
  },
  {
    name: 'ModalScreen 08',
    icon: 'refresh-outline',
    component: 'infiniteScrollScreen',
  },
  {
    name: 'Temp 09',
    icon: 'refresh-outline',
    component: 'SliceScreen',
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
  {
    id: '7',
    name: 'PullToRefreshScreen',
    title: 'PullToRefreshScreen',
    component: PullToRefreshScreen,
  },
  {
    id: '8',
    name: 'SectionListScreen',
    title: 'SectionListScreen',
    component: SectionListScreen,
  },
  {
    id: '9',
    name: 'ModalScreen',
    title: 'ModalScreen',
    component: ModalScreen,
  },
  {
    id: '10',
    name: 'infiniteScrollScreen',
    title: 'infiniteScrollScreen',
    component: infiniteScrollScreen,
  },
  {
    id: '11',
    name: 'SliceScreen',
    title: 'SliceScreen',
    component: infiniteScrollScreen,
  },
];

export const DATA: DataProps[] = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
