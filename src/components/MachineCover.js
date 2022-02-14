import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  {
    contentfulMachineCover {
      description {
        description
      }
      title
      image {
        gatsbyImageData
      }
    }
  }
`


const MachineCover = () => {
  const data = useStaticQuery(query);
  const { title, description: { description }, image } = data.contentfulMachineCover;
  const pathToImage = getImage(image);
  return (

    <div className='machine-cover border'>
      <GatsbyImage image={pathToImage} alt={title} className="machine-img" />
      <div>
        <h5>
          {description}
        </h5>

      </div>
    </div>


  )
}

export default MachineCover;