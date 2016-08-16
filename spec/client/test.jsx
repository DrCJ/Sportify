import React from 'react';
import promise from 'redux-promise';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import reducers from '../../client/src/reducers/root_reducer';

import App from '../../client/src/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const wrapper = render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App>
          <div className="app-container" />
        </App>
      </Provider>
    );
    expect(wrapper.contains(<div className="app-container" />)).to.equal(true);
  });

  // it("contains spec with an expectation", function() {
  //   expect(shallow(<App />).is('.foo')).to.equal(true);
  // });
  //
  // it("contains spec with an expectation", function() {
  //   expect(mount(<App />).find('.foo').length).to.equal(1);
  // });
});
