import React from 'react';
const WelcomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <div className="flex-grow p-8"></div>
      <div
        className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/013/271/634/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

      </div>
    </div>
  );
};

export default WelcomePage;