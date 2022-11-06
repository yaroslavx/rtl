import { render, screen } from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import user from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('renders correclty', () => {
    render(<CounterTwo count={0} />)
    const testElement = screen.getByText('CounterTwo')
    expect(testElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    user.setup()
    const handleIncrement = jest.fn()
    const handleDecrement = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    )
    const incButton = screen.getByRole('button', { name: 'Inc' })
    await user.click(incButton)
    expect(incButton).toBeInTheDocument()
    expect(handleIncrement).toHaveBeenCalledTimes(1)
    const decButton = screen.getByRole('button', { name: 'Dec' })
    await user.click(decButton)
    expect(decButton).toBeInTheDocument()
    expect(handleDecrement).toHaveBeenCalledTimes(1)
  })
})
