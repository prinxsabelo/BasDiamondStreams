import React from 'react';
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const MachinesList = ({ machines = [] }) => {
    return (
        <div className='machines-list mt-16'>
            {machines.map(machine => {
                const { id, name, image } = machine;
                const pathToImage = getImage(image);
                return (

                    <Link key={id} to={`/`} className='machine shadow-sm' >
                        <GatsbyImage image={pathToImage} alt={name} className="machine-img" />

                        <div className='p-2'>
                            <h5>{name}</h5>
                        </div>

                    </Link>


                )
            })}
        </div >
    )
};

export default MachinesList;
