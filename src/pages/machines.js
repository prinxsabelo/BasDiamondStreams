import React from 'react';
import MachinesList from '../components/MachinesList';
import { graphql, useStaticQuery } from 'gatsby'
import LayOut from '../components/LayOut';
import MachineCover from '../components/MachineCover';

export const query = graphql`
  {
    allContentfulMachines(sort: {order: DESC, fields: name}) {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
        id
      }
    }
  }
`



const Machines = () => {
  const data = useStaticQuery(query);
  const machinesArr = data.allContentfulMachines.nodes;
  console.log(machinesArr);
  return (
    <>
      <LayOut>
        <div className='alone-page'>
          <MachineCover />
          <p className='text-center p-4 pt-4 my-5 uppercase font-bold tracking-widest'>
            Our machines for hire
          </p>
          <MachinesList machines={machinesArr} />

        </div>
      </LayOut>
    </>
  );
};

export default Machines;
