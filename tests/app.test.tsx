import 'react-native';
import React from 'react';
import App from '../App';
import { render, waitFor } from '@testing-library/react-native';

describe('App component', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => getByText('Open up App.tsx to start working on your app with chat fucking gpt !!!!'));
  });
});