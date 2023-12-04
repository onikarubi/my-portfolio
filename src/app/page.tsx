import BasicInfo from '@/components/BasicInfo'
import Header from '@/components/Header'
import SkillsExperience from '@/components/SkillsExperience'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <BasicInfo />
      <SkillsExperience />
    </div>
  )
}
