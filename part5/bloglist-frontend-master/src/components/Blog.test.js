import React from 'react'
// eslint-disable-next-line no-unused-vars
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('clicking the like button twice, calls event handler twice', () => {
  const blog = {
    title: 'Testing with Jest',
    author: 'Kel Elden',
    user: { username: 'root' },
    url: 'www.testingjest.com',
    likes: 384
  }

  const mockHandler = jest.fn()

  const  component = render(
    <Blog blog={blog} user={'root'} handleLikes={mockHandler}/>
  )

  const  { getByText } = render(
    <Blog blog={blog}  handleLikes={mockHandler}/>
  )

  const button = component.container.querySelector('.default')
  fireEvent.click(button)
  const button_1 = getByText('like')
  fireEvent.click(button_1)
  fireEvent.click(button)
  const button_2 = getByText('like')
  fireEvent.click(button_2)

  expect(mockHandler.mock.calls.length).toBe(2)
})