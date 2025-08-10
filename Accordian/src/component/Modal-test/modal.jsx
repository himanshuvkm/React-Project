import React ,{useRef} from "react";

function Modal({onClose}) {
  const modalref = useRef();
  const closeModal = (e)=>{
    if(modalref.current === e.target){
      onClose();
    }
  }
  return (
    <div ref={modalref} onClick={closeModal} className="fixed inset-0  bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="mt-10 bg-indigo-600 text-white rounded-xl px-8 py-10 w-[90%] max-w-md text-center shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Download free E-Book</h1>
        <p className="mb-6">Want to learn how to crack Web Development interviews like a pro?</p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-md text-black border-gray-300 rounded-md bg-white  "
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 font-bold py-2 rounded-md hover:bg-indigo-100 transition duration-300"
          >
            Download
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
