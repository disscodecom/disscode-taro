export default defineAppConfig({
  pages: ["pages/icon/index", "pages/calendar/index", "pages/dropDownSelection/index", "pages/formComponent/index", "pages/home/index", "pages/loginPage/index", "pages/pickerView/index", "pages/popover/index", "pages/registrationPage/index", "pages/swiperView/index", "pages/testPage/index"],
  // subpackages: [
  //   {
  //     name: 'sub',
  //     root: 'sub',
  //     pages: []
  //   }
  // ],
  window: {
    navigationBarTextStyle: "black"
  },
  networkTimeout: {
    request: 10000,
    connectSocket: 15000,
    uploadFile: 20000,
    downloadFile: 30000
  },
  resizable: true,
  requiredBackgroundModes: ['audio', 'location']
});