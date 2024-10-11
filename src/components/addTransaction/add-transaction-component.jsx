import {useState} from 'react'

import {ModalCloseButton, ModalContent, ModalOverlay} from './add-transaction-styles'
import Transaction from '../transaction/transaction.component'

const AddTransaction = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
        <Transaction/>
        </ModalContent>
      </ModalOverlay>
    );

}


export default AddTransaction