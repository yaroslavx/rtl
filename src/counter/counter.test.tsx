import { render, screen } from "@testing-library/react"
import { count } from "console"
import { Counter } from "./Counter"

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
        const incButton = screen.getByRole('button', {
            name: "Inc"
        })
        expect(incButton).toBeInTheDocument()
    })
})