import { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: 'com.kerzz.app',
//   appName: 'kerzz-demo',
//   webDir: 'www',
//   server: {
//     androidScheme: 'https'
//   }
// };

// export default config;

const config: CapacitorConfig = {
  appId: 'com.kerzz.app',
  appName: 'kerzz-demo',
  bundledWebRuntime: false,
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      showSpinner: true,
    },
    Geolocation: {
      forceCoordinate: true,
    },
  },
};

export default config;
