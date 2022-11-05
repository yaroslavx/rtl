import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet renders correctly", () => {
    render(<Greet />)
    const greetElement = screen.getByText(/hello/i)
    expect(greetElement).toBeInTheDocument()
})

test('Greet renders with name', () => {
    render(<Greet name={'Cody'} />)
    const greetCodyElement = screen.getByText(/hello Cody/i)
    expect(greetCodyElement).toBeInTheDocument()
})