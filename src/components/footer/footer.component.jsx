import { Fragment, useState } from "react";

import {
  Container,
  BgColor,
  AddIcon,
  ImgContainer,
  Image,
} from "./footer.styles";

import { add, wallet, home, activity } from "../../assets";
import AddTransaction from "../addTransaction/add-transaction-component";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Fragment>
      <Container>
        <BgColor>
          <ImgContainer>
            <Image src={home} alt="" />
            <Image src={activity} alt="" />
            <Image src={wallet} alt="" />
          </ImgContainer>
        </BgColor>
        <AddIcon onClick={toggleModal}>
          <Image src={add} alt="" />
        </AddIcon>
      </Container>
      {isModalOpen && <AddTransaction />}
    </Fragment>
  );
};

export default Footer;
