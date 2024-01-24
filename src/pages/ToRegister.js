
import { useNavigate } from "react-router-dom";
import React from "react";

 const ToRegister = ({ onClose }) => {
  
   
   
   const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
    onClose();
  };

  const handleLogin = () => {
    navigate("/login");
    onClose();
  };

   return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <p className="text-lg font-bold mb-4">Welcome to Sitterly!</p>
        <p className="text-sm text-gray-800 mb-2  text-balck font-bold mb-5">Are you new here?</p>
        <button
          onClick={handleSignUp}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
        >
          Sign Up
        </button>
        <p className="text-sm text-gray-600 mb-2 text-balck font-bold mb-5">Already a member?</p>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};
 export default ToRegister;