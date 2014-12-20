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
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map',  { destDir: 'assets' });
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',  { destDir: 'fonts' });
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',  { destDir: 'fonts' });
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',  { destDir: 'fonts' });


// Jasny Bootstrap
app.import('bower_components/jasny-bootstrap/dist/css/jasny-bootstrap.css');
app.import('bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.js');
app.import('bower_components/jasny-bootstrap/dist/css/jasny-bootstrap.css.map',  { destDir: 'assets' });


/** Export */
module.exports = app.toTree();
