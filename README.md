# For Serve - Npm
npm install

# For Serve - Fcm
npm install @capacitor/android
npx cap sync

# For Serve -Geolocation
npm install @capacitor/geolocation 

# For Build - Steps
npm install
ionic build
ionic cap add android
ionic cap sync android
ionic cap build android

# For Build - android/app/src/AndroidManifest.xml
<application>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-feature android:name="android.hardware.location.gps" />
</application>



--deneme