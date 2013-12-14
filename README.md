Workers Board
=============

[![Build Status](https://travis-ci.org/1000k/workers-board.png)](https://travis-ci.org/1000k/workers-board)


What's This?
------------
Info-board for viewing persons information. Expected usage is showing employees in any organization.

Powered by AngularJS.


Requires
--------
- Node.js >= 0.10.0


Usage
-----
Run web server with `node ./scripts/web-server.js`.

Then access to `http://localhost:8000/app/index.html`.


Development Information
-----------------------
### Installing development tools
1. `cd {workers board directory}`
1. Type `sudo npm install`

NOTE: some npm packages have too long name not to create path on Windows -- `npm ERR! code: 'EPERM'` means this error.

### Testing
First of all, run web server.

Then:

- Run unit test: `./scripts/test.sh`
- Run scenerio test: `./scripts/e2e-test.sh`

### Modifying Stylesheet
1. Install Compass and Sass with `gem update --system && gem install compass`.
1. `grunt watch`
1. Modified `resources/sass/screen.scss` then run compile tasks. Output is put in `app/css`.


Author
------
SENDA Keijiro <senda.keijiro@gmail.com>
