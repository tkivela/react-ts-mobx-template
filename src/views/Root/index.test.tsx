import * as React from 'react'
import { render } from 'react-testing-library'

import Root from './index'

it('renders without crashing', () => {
  render(<Root />)
})
