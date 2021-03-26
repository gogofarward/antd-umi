import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": "dark",
  "primaryColor": "#722ED1",
  "layout": "side",
  "contentWidth": "Fluid",
  "fixedHeader": true,
  "fixSiderbar": true,
  "title": "",
  "pwa": false,
  "iconfontUrl": "",
  "menu": {
    "locale": true
  },
  "headerHeight": 48
};

export default Settings;
