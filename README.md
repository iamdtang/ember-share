# Ember-share

`ember share` is a command to share your local sites with the world. No additional software installation is required once the Ember CLI Addon is installed. To share your site, simply run `ember share`. A publicly accessible URL will be inserted into your clipboard that is ready to paste directly into your browser. That's it.

By default, `ember share` will use port 4200. If you are running your Ember app on a port other than 4200, use the `port` option:

```
ember serve --port 8000
```

This was inspired by Laravel Valet.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
