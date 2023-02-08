import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import CustomButton from '../CustomeButton';

describe('CustomButton component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CustomButton title="Press me" onPress={() => {}} />);
    const button = getByText('Press me');
    expect(button).toBeTruthy();
  });

  it('calls onPress function when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<CustomButton title="Press me" onPress={onPress} />);
    const button = getByText('Press me');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(<CustomButton title="Press me" onPress={() => {}} style={customStyle} />);
    const button = getByTestId('button-container') ;
    const { backgroundColor } = button.props.style;
    expect(backgroundColor).toBe(customStyle.backgroundColor);
  });
});