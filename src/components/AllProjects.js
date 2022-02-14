import React from 'react'
import ProjectsList from './ProjectsList'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
{
  allContentfulProject {
    nodes {
      id
      title
      location
      demoImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        id
      }
    }
  }
}
`

const AllProjects = () => {
  const data = useStaticQuery(query);
  const projects = data.allContentfulProject.nodes;

  return (
    <div className='projects-container'>

      <ProjectsList projects={projects} />
    </div>
  )
}

export default AllProjects
