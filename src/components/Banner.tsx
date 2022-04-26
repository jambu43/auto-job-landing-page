import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Stack minH={"30vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#FFFAF9"}
              color={"#FB4718"}
              _hover={{
                bg: "#FB4718",
                color: "#FFFAF9",
              }}
            >
              Hello! This is Autojob
            </Button>
          </Stack>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#000"} as={"span"} style={{ fontFamily: "Recoleta" }}>
              Ton prochain job, c’est nous qui le cherchons, c'est nous qui le
              trouvons… et c’est 100% gratuit !
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"#000"}>
            Téléchargez votre CV et autojob postule automatiquement en votre nom
            à de nouveaux emplois correspondant à votre profil.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#FB4718"}
              color={"#FFFAF9"}
              _hover={{
                bg: "#FB4718",
                color: "#FFFAF9",
              }}
            >
              Démarrer maintenant !
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/images/Illustrator.svg"}
        />
      </Flex>
    </Stack>
  );
}
