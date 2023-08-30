/// <reference types="nativewind/types" />

declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

// declare module "@env";
declare module "@env" {
  export const API_PATH: string;
}

declare module "*.png";

declare module "*.jpg"
declare module 'react-native-animated-input';

declare module 'lucide-react-native';

declare module 'expo-random';
