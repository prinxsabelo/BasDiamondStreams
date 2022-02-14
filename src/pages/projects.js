import React from 'react'
import AllProjects from '../components/AllProjects'
import LayOut from '../components/LayOut'

const Projects = () => {
    return (
        <LayOut>
            <div id="projects" className='mt-16'></div>
            <div className='h-100'></div>
            <div className='fluid'>
                <div className='mt-8 p-2'>
                    <h1>Projects</h1>
                    <p className='tracking-wider'>
                        We focus  on giving you the best
                    </p>
                </div>
                <AllProjects />
            </div>


        </LayOut >
    )
}

export default Projects
