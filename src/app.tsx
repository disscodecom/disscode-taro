import React, { Component, PropsWithChildren } from "react";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import "./app.scss";

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

const store = {};

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
