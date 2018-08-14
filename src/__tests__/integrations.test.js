import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

// pass in jest's (done) function to create a delay for setTimeout
it('can fetch a list of comments and display them', done => {
  // Attempt to render the entire App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // Find the FETCH comments button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Introduce a tiny little pause so moxios has time to activate
  moxios.wait(() => {
    wrapped.update();
    // expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
