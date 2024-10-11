import { Fragment, useState } from "react";

import {
  MenuButton,
  Overlay,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  Icon,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "./sidebar.styles";

import {
  FaBars,
  FaTimes,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import SignInForm from "../sign-in-form/sign-in-form.components";
import SignUpForm from "../sign-up-form/sign-up-form.component";

const SideBar = () => {
// const handleSignOut = async () => {
// 		try {
// 			await signOutUser(auth);
// 			console.log("user signOut success!")
// 		} catch (error) {
// 			console.error("Error signing out:", error.message);
// 		}
// 	};

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (content) => {
    setIsOpen(false);
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };
  return (
    <Fragment>
      <MenuButton onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MenuButton>

      <Overlay isOpen={isOpen} onClick={toggleSidebar} />

      <Sidebar isOpen={isOpen}>
        <SidebarHeader>Daily Tracker</SidebarHeader>
        <SidebarItem>
          <Icon>
            <FaUser />
          </Icon>
          Profile
        </SidebarItem>
        <SidebarItem onClick={() => openModal(<SignInForm />)}>
          <Icon>
            <FaSignInAlt />
          </Icon>
          Sign In
        </SidebarItem>
        <SidebarItem onClick={() => openModal(<SignUpForm />)}>
          <Icon>
            <FaSignInAlt />
          </Icon>
          Sign Up
        </SidebarItem>
        {/* <p onClick={handleSignOut}>SignOut</p> */}
      </Sidebar>

      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
          {modalContent}
        </ModalContent>
      </ModalOverlay>
    </Fragment>
  );
};

export default SideBar;
