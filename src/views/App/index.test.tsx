import * as React from 'react'
import { render } from 'react-testing-library'

import Root from '../../Root'

it('renders without crashing', () => {
  render(<Root />)
})
