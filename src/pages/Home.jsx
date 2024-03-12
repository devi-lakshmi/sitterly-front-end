
import  Header  from "./Header";


export const HomePage = () => {
  return (
    <div className="bg-stone-700 min-h-screen flex flex-col">
    <Header/>
      <div className="flex-grow p-8">
         {/* <p className="text-4xl font-bold mb-4">Welcome to HomePage</p>  */}
        <div className="flex flex-col-1 md:flex-col gap-8">
         
             <div className="w-full mx-auto ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/271/634/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg"
              alt="Opp"
              className="mb-4 w-full h-50 object-cover rounded-md shadow-md"
              />
            
            <p className="text-gray-100 text-bold text-xl">
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