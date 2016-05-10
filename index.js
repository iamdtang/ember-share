/* jshint node: true */
'use strict';

var ncp = require('copy-paste');
var ngrok = require('ngrok');
var Promise = require('ember-cli/lib/ext/promise');

module.exports = {
  name: 'ember-share',
  includedCommands: function() {
    return {
      share: {
        name: 'share',
        description: 'A command to share your local Ember apps with the world using ngrok.',
        availableOptions: [
          { name: 'port', type: Number, default: 4200, aliases: ['p'] }
        ],
        run: function(commandOptions, rawArgs) {
          var port = commandOptions.port;
          var self = this;

          return new Promise(function(resolve, reject) {
            ngrok.connect(port, function(err, url) {
              ncp.copy(url);
              self.ui.writeLine('Your sharable URL is ' + url + ' and has been copied to your clipboard!');
            });
          });

        }
      }
    }
  }
};
