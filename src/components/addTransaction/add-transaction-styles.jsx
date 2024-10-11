import styled from 'styled-components'



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 2000;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  margin: auto;
  background: white;
  color: #102632;
  padding: 20px;
  border-radius: 10px;
  z-index: 3000;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;
