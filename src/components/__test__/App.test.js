import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
// Helper method provided by Jest to setup common test logic
// Will run before EACH and every test
beforeEach(() => {
  wrapped = shallow(<App />);
});

// 'it' refers to the App component
it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

// check for comment list
it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
