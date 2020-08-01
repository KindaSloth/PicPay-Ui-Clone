import React from "react";

import { Container, Details, Title, Description, Img } from "./styles";

import img13 from "../../assets/13.png";

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>

      <Img source={img13} />
    </Container>
  );
};

export default Banner;
