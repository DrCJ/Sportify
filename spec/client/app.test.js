import React from 'react';
import promise from 'redux-promise';
import { beforeEach } from 'mocha';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import reducers from '../../client/src/reducers/root_reducer';

import App from '../../client/src/app/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

describe("<App />", function() {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    );
  });
  it("contains div with className app-container", () => {
    expect(wrapper.find('.app-container')).to.have.length(1);
  });
  it('has className app-container', () => {
    expect(wrapper.find('.main-content')).to.have.length(1);
  });

  it("should not contain className .shadow-click when rendered", () => {
    expect(wrapper.find('.shadow')).to.have.length(1);
    expect(wrapper.find('.shadow-click')).to.have.length(0);
  });

  it("should not contain className .shadow-modal-click when rendered", () => {
    expect(wrapper.find('.shadow-modal')).to.have.length(1);
    expect(wrapper.find('.shadow-modal-click')).to.have.length(0);
  });

  it("wrapper", () => {
    const children = wrapper.children();
    // const grandchildren = children[0].children();
    const appContainer = children[0];
    const mainContent = wrapper.find('.main-content');

    console.log('wrapper:', mainContent);
  });

});
