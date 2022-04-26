import { Stack, StatUpArrow } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

function Ready() {
  return (
    <Stack
      minH={"30vh"}
      direction={{ base: "column", md: "row" }}
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Container>
        <CircleTop />
        <Title>Hey! You caught us before we were ready.</Title>
        <Description>
          We are working to finalize the platform things are progressing well
          and we will be operational within a few days. if you want to be on the
          First callback when we are ready, just put your phone number here :
        </Description>
        <CircleBottom />
        <ButtonContainer></ButtonContainer>
      </Container>
    </Stack>
  );
}

const Container = styled.div`
  background: #fa5e1e;
  border-radius: 30px;
  width: 1170px;
  height: 500px;
  margin: auto;
  padding: 100px;
`;
const Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 120%;
  margin: auto;
  /* or 60px */

  text-align: center;

  color: #ffffff;
  width: 587px;
`;
const Description = styled.p`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
`;
const CircleTop = styled.div`
  width: 225px;
  height: 225px;
  background: #ffb496;
  position: absolute;
  border-radius: 50%;
  left: 5%;
  top: 77%;
`;
const CircleBottom = styled.div`
  width: 225px;
  height: 225px;
  background: #ffb496;
  position: absolute;
  border-radius: 50%;
  left: 1127px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
export default Ready;
