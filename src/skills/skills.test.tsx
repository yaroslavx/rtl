import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe('Skills', () => {
    const skills = ['first', 'second', 'third']
    test('render correctly', () => {
        render(<Skills skills={skills} />)

        const skillElement = screen.getByRole('list')
        expect(skillElement).toBeInTheDocument()
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />)

        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
    })
})