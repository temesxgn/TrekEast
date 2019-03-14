import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';
import { Text, View } from 'react-primitives';
import Heading from '@trekeast/component-library/components/Heading';

class App extends Component {
  render() {
    return (
      <View className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text>
            Edit <code>src/App.js</code> and save to reload.
          </Text>
          <Heading title="Temesxgn"/>
          
        </header>
      </View>
    );
  }
}

export default App;
