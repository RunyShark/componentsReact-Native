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
  Slide,
} from '../index';

export const menuItemsTemplate: MenuItem[] = [
  {
    name: 'Animation',
    icon: 'cube-outline',
    component: 'Animation01Screen',
  },
  {
    name: 'Animation',
    icon: 'albums-outline',
    component: 'Animation02Screen',
  },
  {
    name: 'Switch',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'InputText',
    icon: 'alert-circle-outline',
    component: 'InputTextScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'ModalScreen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'ModalScreen',
    icon: 'download-outline',
    component: 'infiniteScrollScreen',
  },
  {
    name: 'Slice',
    icon: 'flower-outline',
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
    component: SliceScreen,
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

export const items: Slide[] = [
  {
    title: 'Title 1',
    desc:
      'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Title 2',
    desc:
      'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Title 3',
    desc:
      'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
