import { render } from '@testing-library/react'
import HomePage from '../components/HomePage/index'

test('this is a test', () => {
    const { getByText, container } = render(<HomePage />)
    const header = container.querySelector('h1').innerHTML
    expect(header).toBe('Check out Anthony\'s Personal Site')
})
