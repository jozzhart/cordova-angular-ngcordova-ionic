Cordova 4, Angular, Ionic & ngCordova
===================


Seed app for Cordova 4, Angular, Ionic and ngCordova

----------

Prerequisites
-----------------
- Git
- Bower
- NPM
- Latest Xcode

With the above prerequisites met, type the following
```
npm install cordova -g
npm install ionic -g
```

Install and run
-------------
```
mkdir myProject
cd myProject
git clone https://github.com/jozzhart/cordova-angular-ngcordova-ionic.git ./
npm install
cordova platform add browser
cordova platform add ios
gulp watch
```

Will launch both a browser and iOS emulator with live reloading


Install to android
-------------
Plug in your device and make sure developer mode is enabled
```
cordova platform add android
cordova run android
```

Test
-------------
```
npm run protractor
```