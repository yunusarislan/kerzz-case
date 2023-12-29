import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kerzz.app',
  appName: 'kerzz-demo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
