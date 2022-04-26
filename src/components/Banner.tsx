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
            <Text color={"#000"} as={"span"}>
              We look for your next job, we find it and it’s 100% free!
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"#000"}>
            Upload your resume and autojob will automatically apply for new jobs
            on your behalf that match your profile.
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
              Get Started Now
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
