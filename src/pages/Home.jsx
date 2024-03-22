
import  Header  from "./Header";


export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
    <Header/>
      <div className="flex-grow p-8">
         {/* <p className="text-4xl font-bold mb-4">Welcome to HomePage</p>  */}
        <div className="flex flex-col-1 md:flex-col gap-9">
         
             <div className=" relative w-full mx-auto ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/271/634/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg"
              alt="Opp"
              className="mb-4 w-full h-50 object-cover rounded-md shadow-md"
              />
         
            <p className="absolute bottom-8 left-10 right-10 text-stone-600 text-bold text-xl">
              Sitterly is a platform connecting parents with reliable and trustworthy babysitters.
            </p>
             </div>
          {/* Add more similar cards for additional content */}
        
        </div>
      </div>
    </div>
  );
};
export default HomePage;