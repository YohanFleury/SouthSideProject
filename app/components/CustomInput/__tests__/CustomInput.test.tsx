import React, {useState} from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import {Keyboard} from 'react-native';

import CustomInput from '../CustomInput';

describe('CustomInput', () => {
  it('renders without crashing', () => {
    render(<CustomInput onChangeText={() => {}} />);
  });

  it('shows placeholder text', () => {
    const { getByPlaceholderText } = render(<CustomInput placeholder="test" onChangeText={() => {}} />);

    expect(getByPlaceholderText('test')).toBeTruthy();
  });

  it('updates value when text is entered', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(<CustomInput onChangeText={onChangeText} />);
    fireEvent(getByTestId('input'), 'changeText', 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });

  it('submits when return key is pressed', () => {
    const onSubmitEditing = jest.fn();
    const { getByTestId } = render(<CustomInput onChangeText={() => {}} onSubmitEditing={onSubmitEditing} />);
    const input = getByTestId('input')
    fireEvent(input, 'submitEditing');
    expect(onSubmitEditing).toHaveBeenCalled();
  });
});
