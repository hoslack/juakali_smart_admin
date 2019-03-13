import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate"/>
                  <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                  <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
