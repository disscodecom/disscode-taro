import React, { Component } from 'react';
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

class App extends Component<IProps> {
  componentDidMount() {
    // SplashScreen && SplashScreen.hide();
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
