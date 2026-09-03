import PageClient from '@/components/PageClient'
import content from '@/lib/data/content.json'

export default function Home() {
  const { education, projects, skills, contacts, about } = content

  return (
    <PageClient
      education={education}
      projects={projects}
      skills={skills}
      contacts={contacts}
      about={about}
    />
  )
}
