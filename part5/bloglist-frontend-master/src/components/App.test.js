import React from 'react'
import {
  render, waitForElement
} from '@testing-library/react'
jest.mock('../services/__mocks__/blogs')
import App from '../App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('Login')
    )

    // expectations here
    expect(component.container).toHaveTextContent(
      'Log into Blog-ListusernamepasswordLogin',
    )

  })

  test('if user logged in, blogs are rendered', async () => {

    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }

    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))

    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('.blogs')
    )

    component.debug()

    const blogz = component.container.querySelectorAll('.blogs')
    expect(blogz.length).toBe(3)
  })


})

