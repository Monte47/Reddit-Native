import 'react-native';
import React from 'react';
import Index from '../index.ios.js';
import App from '../app/components/App.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
  expect(tree).toMatchSnapshot();
});
