const run = require('cordova-res');

console.log('Generating icons and splashscreens for iOS');

var options = {
  platforms: {
    ios: {
      icon: { sources: ['resources/icon.png'] },
      splash: { sources: ['resources/splash.png'] }
    }
  }
}
run(options);
