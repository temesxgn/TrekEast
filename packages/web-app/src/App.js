import './App.css';

import Heading from '@trekeast/component-library/components/Heading';
import ProfileImage from '@trekeast/component-library/components/ProfileImage';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Text, View } from 'react-primitives';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <View className="App">
      <Helmet title="TrekEast" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text>
            Edit <code>src/App.js</code> and save to reload.
          </Text>
          <Heading title="Temesxgn"/>
          <ProfileImage />
        </header>
      </View>
    );
  }
}

export default App;
