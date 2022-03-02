import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      color={"teal"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="gray.700" fontSize="1em" marginTop={"4em"}>
      <Container as={Stack} maxW={"6xl"} py={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
          <Stack align={["center", "flex-start"]}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={["center", "flex-start"]}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={["center", "flex-start"]}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>

          <Stack align={["center", "flex-start"]}>
            <Stack align={"flex-start"} direction={"row"}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
            <Box pb={3} fontWeight={"bold"}>
              <Text> SuMovieS©2022. All rights reserved</Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
