import React, {useState} from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import {Keyboard} from 'react-native';
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

import CustomInput from '../CustomInput';

describe('CustomInput', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <CustomInput onChangeText={() => {}} />
      </Provider>
      );
  });

  it('shows placeholder text', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <CustomInput placeholder="test" onChangeText={() => {}} />
      </Provider>
    );

    expect(getByPlaceholderText('test')).toBeTruthy();
  });

  it('updates value when text is entered', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
    <Provider store={store}>
      <CustomInput onChangeText={onChangeText} />
    </Provider>
    );
    fireEvent(getByTestId('input'), 'changeText', 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });

  it('submits when return key is pressed', () => {
    const onSubmitEditing = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <CustomInput onChangeText={() => {}} onSubmitEditing={onSubmitEditing} />
      </Provider>
    );
    const input = getByTestId('input')
    fireEvent(input, 'submitEditing');
    expect(onSubmitEditing).toHaveBeenCalled();
  });
});
