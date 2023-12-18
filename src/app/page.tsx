import BasicInfo from '@/components/home/BasicInfo'
import MainVisual from '@/components/home/MainVisual'
import PersonalPR from '@/components/home/PersonalPR'
import SkillsExperience from '@/components/home/SkillsExperience'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <MainVisual />
      <div className="container mx-auto p-4">
        <PersonalPR />
        <BasicInfo />
        <SkillsExperience />
      </div>
    </div>
  )
}
