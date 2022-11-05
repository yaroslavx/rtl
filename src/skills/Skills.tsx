import { useEffect, useState } from "react"
import { SkillsProps } from "./skills.types"

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 3000);
    }, [])

    return (
        <>
            <ul>
                {skills.map(skill => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? <button>Start</button> :
                <button onClick={handleLogin}>Login</button>
            }
        </>
    )
}
