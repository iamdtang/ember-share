/* eslint-env node */
'use strict';

let ncp = require('copy-paste');
let ngrok = require('ngrok');
let Promise = require('rsvp').Promise;
let ServeCommand = require('ember-cli/lib/commands/serve');

module.exports = {
  name: 'ember-share',
  includedCommands: function() {
    return {
      share: ServeCommand.extend({
        name: 'share',
        description: 'Share your local Ember apps with the world using ngrok.',

        run: function(commandOptions, rawArgs) {
          let port = commandOptions.port;
          let self = this;

          let ngrokServer = new Promise(function(resolve, reject) {
            ngrok.connect(port, function(err, url) {
              ncp.copy(url);
              self.ui.writeLine(`Your sharable URL is ${url} and has been copied to your clipboard.`);
            });
          });

          return Promise.all([ngrokServer, this._super.run.apply(this, arguments)]);
        }
      })
    }
  }
};
