import { Project } from 'entities/repository/model'
import { FC } from 'react'
import { Card } from 'shared/ui/card'
import { ProjectCard } from '../project-card'

interface ProjectListProps {
  projects: Project[]
}
export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <Card>
      <div className="grid grid-cols-2 gap-4">
        {projects.length === 0 && (
          <div className="text-center">Public projects not found...</div>
        )}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Card>
  )
}
