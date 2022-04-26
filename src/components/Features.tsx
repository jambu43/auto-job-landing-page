import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import styled from "styled-components";

function Features() {
  return (
    <Stack
      minH={"30vh"}
      direction={{ base: "column", md: "row" }}
      style={{ marginTop: "50px" }}
    >
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/images/features.png"}
        />
      </Flex>
      <Flex p={8} flex={1} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            style={{ marginBottom: "50px" }}
          >
            <Text color={"#000"} as={"span"} style={{ fontFamily: "Recoleta" }}>
              Les avantages
            </Text>
          </Heading>
          <StepContainer>
            <StepContent>
              <StepOne>1</StepOne>
              <StepRow>
                <StepTitle>Candidatures automatisées </StepTitle>
                <StepDescription>
                  Chaque jour, autojob envoie automatiquement ta candidature aux
                  entreprises qui te correspondent.
                </StepDescription>
              </StepRow>
            </StepContent>

            <StepContent>
              <StepTwo>2</StepTwo>
              <StepRow>
                <StepTitle>Meilleure correspondance des offres</StepTitle>
                <StepDescription>
                  Les critères personnalisés et intuitifs créent le meilleur
                  matching entre ton profil professionnel et les offres des
                  entreprises.
                </StepDescription>
              </StepRow>
            </StepContent>
            <StepContent>
              <StepThree>3</StepThree>
              <StepRow>
                <StepTitle>Organisation et suivi des candidatures </StepTitle>
                <StepDescription>
                  Un tableau de suivi enregistre toutes les offres auxquelles
                  autojob postule pour que tu puisses gérer l'évolution de
                  chaque candidature.
                </StepDescription>
              </StepRow>
            </StepContent>
          </StepContainer>
        </Stack>
      </Flex>
    </Stack>
  );
}

const StepContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
`;
const StepContent = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const StepRow = styled.div`
  margin-left: 20px;
`;
const StepOne = styled.div`
  width: 145px;
  height: 90px;
  background: linear-gradient(154.49deg, #5ca1fe 6.61%, #217bf4 89.72%);
  box-shadow: 0px 10px 22px -2px rgba(109, 171, 255, 0.36);
  border-radius: 20px;
  text-align: center;
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
  width: 178px;
  height: 90px;
  background: linear-gradient(154.49deg, #ff858a 6.61%, #f04148 89.72%);
  box-shadow: 0px 8px 22px -2px rgba(248, 87, 94, 0.3);
  border-radius: 20px;
  text-align: center;
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
  width: 197px;
  height: 90px;
  background: linear-gradient(154.49deg, #17b265 6.61%, #17b265 89.72%);
  box-shadow: 0px 10px 22px -2px rgba(23, 178, 101, 0.36);
  border-radius: 20px;
  text-align: center;
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
const StepTitle = styled.div`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  width: 320px;
`;
const StepDescription = styled.p`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
`;
export default Features;
