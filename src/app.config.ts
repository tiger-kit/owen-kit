import { navigateBack } from "@tarojs/taro";

export default defineAppConfig({
  pages: [
    'pages/action/action',
    'pages/trace/trace',
    'pages/memorandum/memorandum',
    'pages/self/self',
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#EFF8FB',
    navigationBarBackgroundColor: '#EFF8FB', // 导航顶部颜色
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    borderStyle: 'white',
    color: '#BDBDBD',
    backgroundColor: "",
    position: 'bottom',
    selectedColor: "#1296db",
    list:[
      {
        text : "行动",
        pagePath : "pages/action/action",
        iconPath : "./statics/icon/action_no_select.png",
        selectedIconPath : "./statics/icon/action_selected.png"
      },
      {
        text : "追踪",
        pagePath : "pages/trace/trace",
        iconPath : "./statics/icon/trace_no_select.png",
        selectedIconPath : "./statics/icon/trace_selected.png"
      },
      {
        text : "备忘",
        pagePath : "pages/memorandum/memorandum",
        iconPath : "./statics/icon/memorandum_no_select.png",
        selectedIconPath : "./statics/icon/memorandum_selected.png"
      },
      {
        text : "我的",
        pagePath : "pages/self/self",
        iconPath : "./statics/icon/self_no_select.png",
        selectedIconPath : "./statics/icon/self_selected.png"
      },
    ]
  },
})
