import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
import '../assets/css/project.scss';
const ProjectsList = ({ projects = [] }) => {
    return (
        <div className='projects-list mt-16'>
            {projects.map(project => {
                const { title, location, demoImage, id } = project;
                const pathToDemoImage = getImage(demoImage);
                const slug = slugify(title, { lower: true })

                return (
                    <Link key={id} to={`/${slug}`} className='project shadow-sm '>
                        <GatsbyImage image={pathToDemoImage} alt={title} className="project-img" />

                        {/* <StaticImage src="../assets/images/bg.jpg" alt="project-img"
                            className="project-img"
                        /> */}
                        <div className='p-2'>
                            <h5>{title}</h5>
                            <p>{location}</p>
                        </div>

                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectsList
