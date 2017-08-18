/* eslint-env node */
'use strict';

var ncp = require('copy-paste');
var ngrok = require('ngrok');
var Promise = require('rsvp').Promise;
var ServeCommand = require('ember-cli/lib/commands/serve');

module.exports = {
  name: 'ember-share',
  includedCommands: function() {
    return {
      share: ServeCommand.extend({
        name: 'share',
        description: 'Share your local Ember apps with the world using ngrok.',

        run: function(commandOptions, rawArgs) {
          var port = commandOptions.port;
          var self = this;

          var ngrokServer = new Promise(function(resolve, reject) {
            ngrok.connect(port, function(err, url) {
              ncp.copy(url);
              self.ui.writeLine('Your sharable URL is ' + url + ' and has been copied to your clipboard.');
              resolve();
            });
          });

          return Promise.all([ngrokServer, this._super.run.apply(this, arguments)]);
        }
      })
    }
  }
};
