import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  CreatePost: undefined;
  CreateBlog: undefined;
  CreateProject: undefined;
};

export type CommonNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

export type CreatePostScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreatePost'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateBlog'
>;

