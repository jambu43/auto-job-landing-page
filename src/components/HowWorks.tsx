import { Container } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

function HowWorks() {
  return (
    <Container maxW={"7xl"}>
      <Content>
        <Title>Comment ça marche ?</Title>
        <Description>
          Le processus de recherche d'un emploi est compliqué et prend beaucoup
          de temps. Des centaines d'outils, beaucoup de copier-coller. Nous
          avons conçu un processus unique pour vous permettre de trouver un
          emploi plus rapidement et avec un minimum d'efforts.
        </Description>

        <StepContainer>
          <StepContent>
            <StepOne>1</StepOne>
            <StepDescription>
              Créez votre profil et téléchargez votre CV
            </StepDescription>
          </StepContent>
          <StepContent>
            <StepTwo>2</StepTwo>
            <StepDescription>
              Sélectionnez vos titres de poste, vos lieux de travail et bien
              d'autres paramètres facultatifs.
            </StepDescription>
          </StepContent>
          <StepContent>
            <StepThree>3</StepThree>
            <StepDescription style={{ width: "349px" }}>
              On s’occupe du reste…
            </StepDescription>
          </StepContent>
        </StepContainer>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  margin-top: 150px;
`;
const Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 120%;
  text-align: center;
`;
const Description = styled.p`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  width: 560px;
  text-align: center;
  margin: auto;
  margin-top: 20px;
`;

const StepContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 50px;
`;
const StepContent = styled.div``;
const StepOne = styled.div`
  width: 90px;
  height: 90px;
  background: #8031bc;
  box-shadow: 0px 100px 80px rgba(128, 49, 188, 0.07),
    0px 41.7776px 33.4221px rgba(128, 49, 188, 0.0503198),
    0px 22.3363px 17.869px rgba(128, 49, 188, 0.0417275),
    0px 12.5216px 10.0172px rgba(128, 49, 188, 0.035),
    0px 6.6501px 5.32008px rgba(128, 49, 188, 0.0282725),
    0px 2.76726px 2.21381px rgba(128, 49, 188, 0.0196802);
  border-radius: 20px;
  text-align: center;
  margin: auto;
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StepTwo = styled.div`
  width: 90px;
  height: 90px;
  background: #fb4e54;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StepThree = styled.div`
  width: 90px;
  height: 90px;
  background: #feb813;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StepDescription = styled.div`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  width: 320px;
  margin-top: 30px;
`;
export default HowWorks;
