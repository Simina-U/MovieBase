import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import {
  Box,
  Heading,
  Button,
  Container,
  useDisclosure,
  HStack,
  Stack,
  Spacer,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MenuItem = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <Button as="a" variant="link" {...props} textShadow="1px 1px #ff0000">
      {children}
    </Button>
  </Link>
);

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="teal.600">
      <Container>
        <Stack
          as="nav"
          direction={["column", , "row"]}
          justify="space-between"
          wrap="wrap"
          py="1.5rem"
        >
          <HStack justify="space-between">
            <MenuItem href="/" mr={8}>
              <Heading size="lg" textShadow="2px 2px #ff0000">
                Moviebase
              </Heading>
            </MenuItem>

            <Box display={["block", , "none"]} onClick={onToggle}>
              <Button variant="outline">
                <HamburgerIcon />
              </Button>
            </Box>
          </HStack>
          <Spacer />
          <Stack
            direction={["column", , "row"]}
            justify="start"
            align={["start", , "center"]}
            display={[isOpen ? "flex" : "none", , "flex"]}
            spacing={4}
          >
            <MenuItem href="/search">Search</MenuItem>
            <MenuItem href="/watchlistpage">Watchlist</MenuItem>
            <MenuItem href="/historypage">History</MenuItem>
          </Stack>

          <Box display={[isOpen ? "block" : "none", , "block"]}>
            <MenuItem href="/recommended" variant="outline">
              What to watch
            </MenuItem>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid minH="100vh">
        <VStack w="full" align="stretch" spacing={8}>
          <Header />
          <Box as="main" h="full">
            {children}
          </Box>
        </VStack>
        <Footer />
      </Grid>
    </>
  );
}
