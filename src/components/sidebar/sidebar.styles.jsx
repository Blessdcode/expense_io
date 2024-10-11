import styled from "styled-components";

export const Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  background: linear-gradient(145deg, #1e3c72, #2a5298);
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  .sidebar-item {
  }
`;

export const SidebarHeader = styled.div`
  font-size: 1.3rem;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 15px;
`;

export const SidebarItem = styled.div`
  margin: 15px 0;
  padding: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

export const Icon = styled.div`
  margin-right: 15px;
  font-size: 1.2rem;
`;

export const MenuButton = styled.div`
  font-size: 1.8rem;
  color: white;
  z-index: 1100;
  cursor: pointer;
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

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
