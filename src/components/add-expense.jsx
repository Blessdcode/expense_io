import React, { useState } from "react";
import AddExpense from "../components/AddExpense";

const AddExpenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  //   const openModal = () => {
  //     setIsModalOpen(true);
  //   };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-content">
          <div className="bg-white rounded shadow-lg">
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
            <AddExpense />
          </div>
        </div>
      )}
    </>
  );
};

export default AddExpenses;
