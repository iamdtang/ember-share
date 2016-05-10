# ember-share

`ember share` is a command to share your local Ember apps with the world using [ngrok](https://ngrok.com/). No additional software installation is required once the Ember CLI addon is installed.

## Installation

```
ember install ember-share
```


## How to Use

To share your site, simply run:

```
ember share
```

A publicly accessible URL will be inserted into your clipboard that is ready to paste directly into your browser.

By default, `ember share` will use port 4200. If you are running your Ember app on a port other than 4200, use the `port` option:

```
ember serve --port 8000
```

This was inspired by [Laravel Valet](https://laravel.com/docs/5.2/valet#sharing-sites).
