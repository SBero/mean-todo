# TODO

---

This todo application is meant to showcase a basic MEAN application with a full set of  both unit tests, as well as end to end tests. It requires that your system be intially setup and configured with the following:

* node.js / io.js (latest)
* MongoDB

Once you have those items installed on your system, just clone the repository into a folder on your system and run:

```javascript
npm install
```

Once this is complete, you'll probably want to fire up the api. From the projects root folder run:

```javascript
node api.js
```

Now navigate to http://localhost:3000 from your favorite browser to view the demo.

## Node / Express Unit Tests

To run the node unit tests, run:

```javascript
mocha
```

To run the node unit tests and generate code coverage reports, run from the project root:
```javascript
istanbul cover _mocha
```

You have to actually quit the code runner that's built into mocha, in order to have the reports generated to view.

To view them, navigate to: http://localhost:3000/coverage/node/lcov-report/

## Angular Unit Tests

To run the angular unit tests (which also automatically generates code coverage reports), run:

```javascript
karma
```

To view the code coverage reports, navigate to: http://localhost:3000/coverage/angular/

## Angular End-to-End Tests

To run the angular end-to-end tests, run:

```javascript
protractor
```