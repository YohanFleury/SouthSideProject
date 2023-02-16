import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

import CustomButton from '../CustomButton';


describe('CustomButton component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
    <Provider store={store}>
      <CustomButton title="Press me" onPress={() => {}} />
    </Provider>);
    const button = getByText('Press me');
    expect(button).toBeTruthy();
  });

  it('calls onPress function when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
    <Provider store={store}>
      <CustomButton title="Press me" onPress={onPress} />
    </Provider>
    );
    const button = getByText('Press me');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('renders with custom style', () => {
   
  });
});