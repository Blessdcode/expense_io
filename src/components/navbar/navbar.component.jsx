import { useState } from "react";

import {  search } from "../../assets";
import { Container, ImageContainer, Title } from "./navbar.components.styles";
import SideBarComponents from "../sidebarcomponents/sidebar.components";

const Navbar = () => {


  return (
    <Container>
      <SideBarComponents />
      <Title>Daily Expense Tracker</Title>
      <ImageContainer>
        <img src={search} alt="search" />
      </ImageContainer>
    </Container>
  );
};

export default Navbar;
