import React, { useState } from 'react'

const Modal = ({ filteredButtons, handleSelectWeek, setShowModal, showModal }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClick = (index) => {
    setSelectedWeek(index + 1);
    handleSelectWeek(index + 1); 
  };

  const handleSave = () => {
    if (selectedWeek !== null) {
      console.log('Selected Week:', selectedWeek);
      setShowModal(!showModal)
    } else {
      alert('Please select a week before saving');
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-1/2 z-10 bg-white max-w-2xl w-full text-center px-4 py-10 rounded-xl shadow-3xl border border-gray-300">
      <h6 className='text-2xl text-primary-darks font-semibold'>Select Week</h6>
      <div className="flex flex-wrap gap-4 items-center justify-center my-10">
        {filteredButtons.map((button, index) => (
          <button
            key={index}
            className={`text-xl text-center py-2.5 px-7 rounded-md cursor-pointer ${
              selectedWeek === index + 1 ? 'bg-[#CFECFF]' : 'bg-[#F2F2F2]'
            }`}
            onClick={() => handleClick(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <button
        onClick={handleSave}
        className='mx-auto w-fit px-10 py-2 cursor-pointer text-white text-2xl bg-primary-blue rounded-md' >
        Save
      </button>
    </div>
  );
};

export default Modal;
