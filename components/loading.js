import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => (
  <ActivityIndicator style={{paddingTop:110}} size="large" animating={true} color={Colors.blueA200} />
);

export default Loading;