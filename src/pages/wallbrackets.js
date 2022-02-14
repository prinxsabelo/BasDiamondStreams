import React from 'react'
import LayOut from '../components/LayOut';
import { graphql, useStaticQuery } from 'gatsby'
import WallBracketsList from '../components/WallBracketsList';

export const query = graphql`
  {
    allContentfulWallBrackets {
      nodes {
        
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        id
      }
    }
  }
`


const WallBrackets = () => {
  const data = useStaticQuery(query);
  const WallBracketsArr = data.allContentfulWallBrackets.nodes;
  console.log(WallBracketsArr);
  return (
    <>
      <LayOut>
        <div className='alone-page'>
          <p className='text-center p-4 uppercase font-bold tracking-widest'>
            We have wall brackets
          </p>
          <WallBracketsList wbArr={WallBracketsArr} />
        </div>
      </LayOut>

    </>
  )
}
export default WallBrackets;