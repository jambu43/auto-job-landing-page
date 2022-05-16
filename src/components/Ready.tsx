import { Stack, StatUpArrow } from "@chakra-ui/react";
import styled from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { m } from "framer-motion";

function Ready() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    axios({
      method: "POST",
      url: `https://api-autojob.herokuapp.com/api/users/add`,
      data: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.state) {
          setFormData({
            fullname: "",
            phone: "",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const mySwitchFunction = (currentStep: any) => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <FormContainer>
              <InputPhone
                type="text"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    fullname: e.target.value,
                  }))
                }
                value={formData.fullname}
                placeholder="Nom complet"
              />
              <Button colorScheme="blue" style={btn} onClick={next}>
                Suivant
              </Button>
            </FormContainer>
          </>
        );
      case 2:
        return (
          <>
            <FormContainer>
              <Flag />
              <Prefix>+243</Prefix>
              <InputPhone
                type="text"
                maxLength={9}
                placeholder="000000"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: "243" + e.target.value,
                  }))
                }
              />
              <Button className="button" style={btn} onClick={back}>
                Précédent
              </Button>

              <Button colorScheme="blue" style={btn} onClick={handleSubmit}>
                Valider
              </Button>
            </FormContainer>
          </>
        );
      default:
        return <>step default</>;
    }
  };

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
        {mySwitchFunction(currentStep)}

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
  padding: 15px 25px 15px 95px;
  border-radius: 14px;
  width: 350px;
  margin-right: 10px;
  color: #8a8f95;
  font-family: "Product Sans";
`;
const btn = {
  width: "auto",
  height: "70px",
  background: "#ffffff",
  borderRadius: "14px",
  color: "#fa5e1e",
  marginLeft: "10px",
};
const Flag = styled.div`
  height: 30px;
  width: 30px;
  background-image: url("../../images/rdc-flag.png");
  background-size: cover;
  position: absolute;
  left: 32%;
  margin-top: 19px;
  border-radius: 50px;
`;
const Prefix = styled.span`
  position: absolute;
  left: 34.4%;
  margin-top: 23px;
  color: #8a8f95;
  font-family: "Product Sans";
`;

export default Ready;
