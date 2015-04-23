# TODO

---

This todo application is meant to showcase a basic MEAN application with a full set of  both unit tests, as well as end to end tests. It requires that your system be intially setup and configured with the following:

* node.js / io.js (latest)
* MongoDB

Once you have those items installed on your system, just clone the repository into a folder on your system and run:

```javascript
npm install
```

Once this is complete, from the project folder run:

```javascript
node api.js
```

This will fireup the server and allow you to connect to http://localhost:3000 from your favorite browser to view the demo.

To run the node unit tests, run:

```javascript
mocha
```

To run the angular unit tests, run:

```javascript
karma
```

To run the angular end-to-end tests, run:

```javascript
protractor
```