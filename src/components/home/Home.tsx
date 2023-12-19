import React from 'react'
import BaseLayout from '../templates/BaseLayout'
import MainVisual from './MainVisual'
import PersonalPR from './PersonalPR'
import BasicInfo from './BasicInfo'
import SkillsExperience from './SkillsExperience'

const Home = () => {
  return (
    <BaseLayout>
      <MainVisual />
      <div className="container mx-auto py-8 px-48">
        <PersonalPR />
        <BasicInfo />
        <SkillsExperience />
      </div>
    </BaseLayout >
  )
}

export default Home
