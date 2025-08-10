import React, { useState } from "react";
import './modal.css'
import Modal from './modal.jsx'
function ModalTest() {
  const [showModal, setShowModal] = useState(false);
  function handleModalpopup() {
    setShowModal(!showModal);
  }

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      <h1 className="text-5xl font-bold mt-4">Popup Modal</h1>
      <button className="bg-indigo-500 px-4 py-2 rounded-lg text-lg" onClick={handleModalpopup}>Open Modal</button>
      {showModal && <Modal onClose={()=>setShowModal(false)} />}
    </div>
  );
}

export default ModalTest;
