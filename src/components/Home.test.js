import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { Home } from './Home';

const json = { json: () => ({ results: [
{ collectionId: 400, collectionName: 'foo', artworkUrl100: 'foo', artistName: 'foo', releaseDate: 'foo'  }
] }) };
jest.mock('react-router-dom', () => ({ Link: 'Link' }))
fetch = jest.fn().mockImplementation(() => new Promise(resolve => resolve(json)));

describe('RoutedComponent: Home', () => {
  test('get albuns when the component mounts', async () => {
    const component = await renderer.create(
      <Home />
    );

    let tree = await component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().componentDidMount();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // component.getInstance().handleInputChange({ persist: () => {} });
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
