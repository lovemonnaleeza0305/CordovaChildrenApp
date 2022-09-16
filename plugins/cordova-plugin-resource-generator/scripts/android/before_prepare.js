const run = require('cordova-res');

console.log('Generating icons and splashscreens for Android');

var options = {
  platforms: {
    android: {
      icon: { sources: ['resources/icon.png'] },
      splash: { sources: ['resources/splash.png'] }
    }
  }
}

run(options);
