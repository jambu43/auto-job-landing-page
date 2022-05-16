import { Stack, StatUpArrow } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

function Ready() {
  return (
    <Stack
      minH={"30vh"}
      direction={{ base: "column", md: "row" }}
      style={{ marginTop: "50px", marginBottom: "50px" }}
      id="subscriptions"
    >
      <Container>
        <CircleTop />
        <Title>Hey ! Tu nous a surpris avant que nous soyons prêts.</Title>
        <Description>
          Nous travaillons pour finaliser la plateforme, les choses avancent
          bien et nous serons opérationnels d’ici quelques jours. Si tu
          souhaites être sur le premier recevoir un rappel lorsque nous serons
          prêts, il suffit de mettre ton adresse e-mail ici :
        </Description>
        <FormContainer>
          <Flag />
          <Prefix>+243</Prefix>
          <InputPhone type="text" maxLength={9} />
          <Submit type="submit" />
        </FormContainer>
        <CircleBottom />
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
  font-size: 35px;
  line-height: 120%;
  margin: auto;
  text-align: center;
  color: #ffffff;
  width: 587px;
`;
const Description = styled.p`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 170%;
  color: #ffffff;
  text-align: center;
  margin: 20px auto auto;
  width: 45rem;
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
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const InputPhone = styled.input`
  padding: 15px 25px 15px 105px;
  border-radius: 14px;
  width: 350px;
  margin-right: 10px;
  color: #8a8f95;
  font-family: "Product Sans";
`;
const Submit = styled.input`
  width: 160px;
  height: 70px;
  background: #ffffff;
  border-radius: 14px;
  color: #fa5e1e;
`;
const Flag = styled.div`
  height: 30px;
  width: 30px;
  background-image: url("../../images/rdc-flag.png");
  background-size: cover;
  position: absolute;
  left: 34%;
  margin-top: 19px;
  border-radius: 50px;
`;
const Prefix = styled.span`
  position: absolute;
  left: 36.4%;
  margin-top: 23px;
  color: #8a8f95;
  font-family: "Product Sans";
`;

export default Ready;
