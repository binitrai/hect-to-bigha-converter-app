import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Dashboard from "./containers/Dashboard/Dashboard";


class App extends Component {
  render () {
      return (
        <div>
          <Layout>
              <Dashboard />
          </Layout>
        </div>
      );
    }
}



export default App;