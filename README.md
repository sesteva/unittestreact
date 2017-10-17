# Unit Testing React App Examples

## Use Cases
- logic
- react class //lifecycle as well
- react stateless component
- redux container connected
- redux container disconnected
- reducer
- action
- action with http calls
- component with Bootstrap //constructor as well
- component with react-bootstrap
- component where we need to replace the dependency of a dependency
- component with i18n
- high order component
- form

## Tools
### Option 1
- Mocha
- Chai
- Enzyme
- Rewire/Proxyquire

### Option 2
- Jest
- Jestshots
### Option 3
- Combining Option 1 or 2 with StoryBook -> https://github.com/mthuret/storybook-addon-specifications

## Setup

Requirements:
- NodeJS
- NPM

Clone this repo locally and simply execute:

      npm install 

## Commands

    npm test

  Runs all unit tests one time

    npm run test:watch

  Runs all unit tests on continous mode watching for file changes

    npm run coverage

  Runs all unit tests and reports the coverage percentage

    npm start

  Serves the application on localhost:8000
