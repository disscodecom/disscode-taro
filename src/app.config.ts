export default defineAppConfig({
  pages: ["pages/lafTodo/index", "pages/homePage/index", "pages/translateGithub/index"],
  // subpackages: [
  //   {
  //     name: 'sub',
  //     root: 'sub',
  //     pages: []
  //   }
  // ],
  window: {
    navigationBarTextStyle: "white"
  },
  networkTimeout: {
    request: 8000,
    connectSocket: 10000,
    uploadFile: 20000,
    downloadFile: 30000
  },
  resizable: true,
  requiredBackgroundModes: ["audio", "location"]
});