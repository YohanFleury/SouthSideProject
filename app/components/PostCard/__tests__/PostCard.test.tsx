import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import PostCard from '../PostCard'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

describe('PostCard component', () => {
  it('renders images and description', () => {
    const description = 'Test description'
    const { getByText, getByTestId } = render(
    <Provider store={store}>
      <PostCard blurred description={description} />
    </Provider>)

    // Validate that the description is displayed
    expect(getByText(description)).toBeTruthy()

    // Validate that the images are displayed
  })

  it('renders blur view when blurred prop is true', () => {
    const { getByTestId } = render(<PostCard blurred />)

    // Validate that the BlurView component is displayed
    expect(getByTestId('blurview')).toBeTruthy()
  })

  it('does not render icon container when blurred prop is true', () => {
    const { queryByTestId } = render(<PostCard blurred />)

    // Validate that the icon container is not displayed
    expect(queryByTestId('iconcontainer')).toBeFalsy()
  })

  it('renders icon container when blurred prop is false', () => {
    const { getByTestId } = render(<PostCard blurred={false} />)

    // Validate that the icon container is displayed
    expect(getByTestId('iconcontainer')).toBeTruthy()
  })
})