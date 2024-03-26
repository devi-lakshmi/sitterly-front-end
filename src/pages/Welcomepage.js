import React from 'react';

const WelcomePage = () => {
  return (
    <div className="bg-orange-50 min-h-screen flex flex-col">
      <p className="text-3xl font-bold mb-50 mt-0 text-black-500">Welcome to Sitterly!</p>
      <div className="flex-grow p-8">
        <div className="bg-orange-50  py-1 mt-0 flex flex-col lg:flex-col justify-between  rounded-lg mb-4 items-center">

          <div className="text-center py-1 p-8 ">

            <p className="text-purple-400 text-3xl  lg:mr-6 lg:mb-6" >
              Sitterly is a platform connecting parents with reliable and trustworthy babysitters. if want see my sevices click To Register.
            </p>
          </div>
          <div className="lg:w-1/2 py-0 px-0 lg:justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/271/634/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg"
              alt="Babysitter"
              className="w-11/12 h-auto rounded-md shadow-md mb-4 mr-4 lg:mr-6 lg:mb-6 "
            />
          </div>
          <div className="lg:w-full mb-6 mt-4 flex lg:flex-row-reverse lg:mb-4 lg:mr-4">
            <p className="  text-lg text-stone-800 font-bold  justify-between leading-tight rounded-lg ">
              Yes, it is! A babysitter is someone who comes to your home to take care of your child. A childminder, on the other hand, takes care of your child in their own home. So, you can choose which option suits you best. And, of course, you can always use a babysitter for a night out, or for a day when you have to work. But, you can also use a babysitter when you want to go to the gym, or when you have an appointment. Or, when you just need some time for yourself. It’s all possible!
            </p>
          </div>
          <div className="lg:w-full  lg:mb-4 lg:mr-4">
            <p className="  text-lg text-stone-800 font-bold  justify-between leading-tight rounded-lg mb-4 mr-4 lg:mr-6 lg:mb-6">
              Babysitting through Sitterly  is the best(part - time) babysitting job there is.You work on fixed days a week, on moments you can and want to.babysit for the best families near you.You choose when, where, and how often you babysit, but at least you are available for the next six months.Moreover, you will also determine your own hourly rate.</p >

          </div>


        </div>
      </div>

    </div>

  );
};

export default WelcomePage;




