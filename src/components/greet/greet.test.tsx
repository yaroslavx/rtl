import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet', () => {
    it("renders correctly", () => {
        render(<Greet />)
        const greetElement = screen.getByText(/hello/i)
        expect(greetElement).toBeInTheDocument()
    })

})