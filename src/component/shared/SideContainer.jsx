import React from "react";
import styled from "styled-components";
import { SideLayout } from "../layout/Layout";

const Image = styled.img`
  width: 2.903rem;
  height: 2.063rem;
`;
const StyledSide = ({ logo, name }) => {
  return (
    <SideLayout>
      <figure>
        <Image src={logo} alt={name} />
      </figure>
    </SideLayout>
  );
};

export default StyledSide;
