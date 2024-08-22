import React from 'react'
import SkillPercent from './SkillPercent'

const skillData = [
    {
        title: 'HTML',
        percent: 95
    },
    {
        title: 'CSS',
        percent: 90
    },
    {
        title: 'JS',
        percent: 85
    },
    {
        title: 'ReactJS',
        percent: 80
    },
    {
        title: 'Bootstrap',
        percent: 70
    },
    {
        title: 'WordPress',
        percent: 60
    },
    {
        title: 'Tailwind CSS',
        percent: 75
    },
]

const SkillBar = () => {
  return (
    <div>
        {skillData.map(skill => {
            return <SkillPercent key={skill.title} title={skill.title} dataPercent={skill.percent} percent={skill.percent}/>
        })}
    </div>
  )
}

export default SkillBar