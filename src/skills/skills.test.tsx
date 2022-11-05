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

    test('renders login button', () => {
        render(<Skills skills={skills} />)

        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    test('Start button is not rendered', () => {
        render(<Skills skills={skills} />)

        const startButton = screen.queryByRole('button', {
            name: 'Start'
        })
        expect(startButton).not.toBeInTheDocument()
    })

    test('Start button is eventually displayed', async () => {
        render(<Skills skills={skills} />)

        const startButton = await screen.findByRole('button', {
            name: 'Start'
        }, {
            timeout: 5000
        })
        expect(startButton).toBeInTheDocument()

    })
}) 