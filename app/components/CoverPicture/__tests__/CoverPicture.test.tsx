import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CoverPicture from '../CoverPicture';

describe('CoverPicture component', () => {
  const onPressMock = jest.fn();
  const sourceMock = {uri: 'https://example.com/image.png'};

  it('renders image correctly', () => {
    const {getByTestId} = render(
      <CoverPicture source={sourceMock} onPress={onPressMock} />,
    );

    const imageElement = getByTestId('cover-picture');

    expect(imageElement.props.source).toEqual(sourceMock);
    expect(imageElement.props.style.width).toEqual('100%');
    expect(imageElement.props.style.height).toEqual(200);
    expect(imageElement.props.style.borderTopRightRadius).toEqual(15);
    expect(imageElement.props.style.borderTopLeftRadius).toEqual(15);
  });

  it('calls onPress function when tapped', () => {
    const {getByTestId} = render(
      <CoverPicture source={sourceMock} onPress={onPressMock} />,
    );

    const coverPicture = getByTestId('cover-container');
    fireEvent.press(coverPicture);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});