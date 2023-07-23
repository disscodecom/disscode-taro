import React, { Component } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
// import SplashScreen from 'react-native-splash-screen'

import { TopView } from 'cross-ui';
import './app.scss';
import { configure } from 'mobx';

/**
 * 将同步的文件信息通知cross-ui，请勿删除
 */
import { loadSyncMap } from "cross-ui/utils";
import syncMap from '@/pages/map.json';
loadSyncMap({
  baseUrl: '/pages',
  syncMap,
});

configure({ isolateGlobalState: true });

interface IProps {
  children: React.ReactNode;
}

/**
 * 请求权限
 */
const requestPermissions = (cb: () => void) => {
  try {
    if (Platform.OS === 'ios') {
      cb && cb();
    } else {
      PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.CAMERA]).then(
        (granted: any) => {
          console.log('[granted] ', granted);
          cb && cb();
        },
      );
    }
  } catch (err) {
    console.log('[requestPermissions error] ', err);
  }
};

class App extends Component<IProps> {
  componentDidMount() {
    // SplashScreen && SplashScreen.hide();
    requestPermissions(() => {
      console.log('权限已请求');
    });
  }

  componentWillUnmount(): void {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <React.Fragment>
        <TopView>{this.props.children}</TopView>
      </React.Fragment>
    );
  }
}
export default App;
