import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProfilPicture from '../ProfilPicture';

describe('ProfilPicture component', () => {
  it('should render correctly', () => {
    const size = 50;
    const source = {uri:'https://example.com/image.jpg'};
    const onPress = jest.fn();

    const {queryByTestId} = render(
      <ProfilPicture size={size} source={source} onPress={onPress} />,
    );

    expect(queryByTestId('profil-picture')).toBeTruthy();
  });

  it('should call onPress when clicked', () => {
    const size = 50;
    const source = {uri:'https://example.com/image.jpg'};
    const onPress = jest.fn();

    const {getByTestId} = render(
      <ProfilPicture size={size} source={source} onPress={onPress} />,
    );

    const profilPicture = getByTestId('profil-picture');

    fireEvent.press(profilPicture)
    expect(onPress).toHaveBeenCalled();
  });
});