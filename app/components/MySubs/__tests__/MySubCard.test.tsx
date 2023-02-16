import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

import MySubCard from '../MySubCard';

describe('MySubCard component', () => {
  const mockOnPress = jest.fn();
  const mockUserName = 'John Doe';
  const mockSource = require('../../../assets/verratti.png');

  it('should render the user name correctly', () => {
    const { getByText } = render(
    <Provider store={store}>
        <MySubCard onPress={mockOnPress} name={mockUserName} source={mockSource} />
    </Provider>
    );

    const userNameElement = getByText(mockUserName);

    expect(userNameElement).toBeDefined();
  });

  it('should call the onPress handler when the card is pressed', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <MySubCard onPress={mockOnPress} name={mockUserName} source={mockSource} />
        </Provider>
        );

    const cardElement = getByTestId('my-sub-card');

    fireEvent.press(cardElement);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render a ProfilPicture with the correct source', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <MySubCard onPress={mockOnPress} name={mockUserName} source={mockSource} />
        </Provider>
        );

    const profilPictureElement = getByTestId('profil-picture');

    expect(profilPictureElement).toBeDefined();
  });
});
