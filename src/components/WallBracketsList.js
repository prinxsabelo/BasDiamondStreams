import React from 'react';
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const WallBracketsList = ({ wbArr = [] }) => {
    console.log(wbArr);
    return (
        <div className='wb-list mt-16'>
            {wbArr.map(wb => {
                const { id, image } = wb;
                const pathToImage = getImage(image);
                return (

                    <Link key={id} to={`/`} className='wb' data-sal="fade-in" data-sal-easing="ease" >
                        <GatsbyImage image={pathToImage} alt={id} className="wb-img" />
                        <div>
                            ..
                        </div>
                    </Link>


                )
            })}
        </div >
    )
}
export default WallBracketsList;
