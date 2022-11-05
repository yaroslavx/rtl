import { SkillsProps } from "./skills.types"

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <><ul>
            {skills.map(skill => {
                return <li key={skill}>{skill}</li>
            })}
        </ul></>
    )
}
