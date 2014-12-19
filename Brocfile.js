/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// Init Application
var app = new EmberApp({ 
  dotEnv: {
    clientAllowedKeys: ['SESSION_ID']
  }
});


// Bootstrap
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',  { destDir: 'assets/fonts' });
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',  { destDir: 'assets/fonts' });
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'assets/fonts' });
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',  { destDir: 'assets/fonts' });


/** Export */
module.exports = app.toTree();
