// React 16 requires 3 polyfills to support olders browsers (e.g. IE11)
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf'

import React from 'react';
import {render} from 'react-dom';
import ComponentA from './Components/ComponentA'

class App extends React.Component {
  render () {
    return <ComponentA/>
  }
}

render(<App/>, document.getElementById('app'));