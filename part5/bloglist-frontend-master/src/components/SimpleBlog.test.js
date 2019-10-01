import React from 'react'
// eslint-disable-next-line no-unused-vars
import { render, cleanup, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'


test('renders title', () => {

  const blog = {
    title: 'Testing with Jest',
    author: 'Kel Elden',
    url: 'www.testingjest.com',
    likes: 384
  }

  const component = render(
    <SimpleBlog blog={blog}/>
  )

  expect(component.container).toHaveTextContent(
    'Testing with Jest',
  )

})

test('renders likes', () => {
  const blog = {
    title: 'Testing with Jest',
    author: 'Kel Elden',
    url: 'www.testingjest.com',
    likes: 384
  }

  const component = render(
    <SimpleBlog blog={blog}/>
  )

  const div = component.container.querySelector('.likes')
  expect(div).toHaveTextContent(
    '384'
  )
})

test('renders author', () => {

  const blog = {
    title: 'Testing with Jest',
    author: 'Kel Elden',
    url: 'www.testingjest.com',
    likes: 384
  }

  const component = render(
    <SimpleBlog blog={blog}/>
  )

  const div = component.container.querySelector('.info')
  expect(div).toHaveTextContent(
    'Kel Elden'
  )

})

