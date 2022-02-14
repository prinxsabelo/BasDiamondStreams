import React from 'react';

const Profile = () => {
  return (
    <div className='flex flex-col  my-32 mt-16 profile' id="profile">
      <div className='h-100'></div>
      <h1>Our Profile</h1>
      <div className='mb-4'>
        The increase in the involvement of private, individual and corporate bodies in the property
        business in Nigeria today both in the construction and property management levels has
        become a critical issue which has been generating a lot of questions among home owners,
        property developers and stake-holders in general.
      </div>
      <div>
        The rampart case of collapsed building in our modern cities is an evidence to prove that there are thorns
        among roses in the areas of property development. It is now lift for decision makers in the industry
        to invest in organization with proven integrity,  uncompromising standards
        and with updated modern innovations, so as to have the worth for their money.
      </div>
      <div>
        <h4 className='my-6'>
          Our expansive service covers three essential areas of project development.
        </h4>
        <ul >
          <li>
            * Project Management and Maintenance
          </li>
          <li>
            *  Civil Engineering
          </li>
          <li>
            * Building Equipment &amp; Materials Sales and Supplies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
