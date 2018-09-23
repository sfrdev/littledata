import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {
  Page,
  Tabbar,
  Tab,
  Navigator
} from 'react-onsenui';


import Home from './components/Home';

class Tabs extends React.Component {
  renderTabs() {
    return [
      {
        content: <Home key="home" navigator={this.props.navigator} />,
        tab: <Tab key="home" label="Home" icon="ion-ios-home-outline" />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar
          renderTabs={this.renderTabs.bind(this)}
        />
      </Page>
    );
  }
}

class App extends React.Component {

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{comp: Tabs, props: { key: 'tabs' }}}
        renderPage={this.renderPage}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
