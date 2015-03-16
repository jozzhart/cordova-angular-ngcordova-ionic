module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'www/bower_components/ionic/js/ionic.bundle.js',
      'www/js/**/*.js',
      'www/modules/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};