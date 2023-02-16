import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NotificationCard from '../NotificationCard';
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

describe('NotificationCard component', () => {
  const onPressMock = jest.fn();
  const onPressAvatarMock = jest.fn();
  const sourceMock = {uri: 'https://example.com/image.png'};

  it('renders content and time correctly', () => {
    const {getByText} = render(
    <Provider store={store}>
        <NotificationCard
          content="This is a notification"
          time="10:00 AM"
          onPress={onPressMock}
          onPressAvatar={onPressAvatarMock}
          source={sourceMock}
        />,
    </Provider>
    );

    const contentElement = getByText('This is a notification');
    const timeElement = getByText('10:00 AM');

    expect(contentElement).toBeTruthy();
    expect(timeElement).toBeTruthy();
  });

  it('calls onPress and onPressAvatar functions when tapped', () => {
    const {getByTestId} = render(
        <Provider store={store}>
            <NotificationCard
              content="This is a notification"
              time="10:00 AM"
              onPress={onPressMock}
              onPressAvatar={onPressAvatarMock}
              source={sourceMock}
            />,
        </Provider>
    );

    const notificationCard = getByTestId('notification-card');
    fireEvent.press(notificationCard);

    expect(onPressMock).toHaveBeenCalledTimes(1);

    const avatarElement = getByTestId('profil-picture');
    fireEvent.press(avatarElement);

    expect(onPressAvatarMock).toHaveBeenCalledTimes(1);
  });
});