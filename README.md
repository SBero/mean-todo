# TODO

---

## Description

This todo application is meant to showcase a basic MEAN application with a full set of  both unit tests, as well as end to end tests. It requires that your system be intially setup and configured with the following:

* node.js / io.js (latest)
* MongoDB

## Setup

Clone the repository into a folder on your system and run:

```
npm install
node api.js
```

To view the demo, navigate to: _http://localhost:3000_

## Node / Express Unit Tests

All node / express unit tests are in _/test/unit-express/_

To run the node unit tests, run:

```
mocha
```

To run the node unit tests and generate code coverage reports, run from the project root:
```
istanbul cover _mocha
```

You have to actually quit the istandbul command (_ctrl + c_) in order to have the reports generated.

To view the reports, navigate to: _http://localhost:3000/coverage/node/lcov-report/_

## Angular Unit Tests

All Angular unit tests are in _/test/unit-angular/_

To run the angular unit tests (which automatically generates code coverage reports on each run), go to the project root folder and run:

```
karma
```

To view the code coverage reports, navigate to: _http://localhost:3000/coverage/angular/_

## Angular End-to-End Tests

To run the angular end-to-end tests, run:

```
protractor
```