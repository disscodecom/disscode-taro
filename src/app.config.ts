import syncMap from './pages/map.json'
const pages: string[] = syncMap.pages.map(
  fileName => `pages/${fileName}/index`
)
export default defineAppConfig({
  pages,
  // subpackages: [
  //   {
  //     name: 'sub',
  //     root: 'sub',
  //     pages: []
  //   }
  // ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Disscode',
    navigationBarTextStyle: 'black'
  }
})
