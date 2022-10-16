import {ImageSourcePropType} from 'react-native';

type Routes = Omit<MenuItem, 'icon' | 'component'>;

export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

export interface RoutesProps extends Routes {
  title?: string;
  id: string;
  component: () => JSX.Element;
}

export interface DataProps {
  title: string;
  data: Array<string>;
}

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
