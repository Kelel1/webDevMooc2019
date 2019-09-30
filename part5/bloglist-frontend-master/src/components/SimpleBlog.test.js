import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'


afterEach(cleanup)

test('renders content', () => {

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
    'Kel Elden',
    'www.testingjest.come'
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
    `blog has ${blog.likes} likes`
  )
})