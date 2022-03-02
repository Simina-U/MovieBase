import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import useSWR from "swr";
import { buildImageUrl } from "../../utils/api";
import {
  Badge,
  Box,
  Center,
  CircularProgress,
  Container,
  Heading,
  HStack,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
  Link,
  VStack,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import HistoryButton from "../../components/HistoryButton";
import WatchListBTN from "../../components/WatchListBTN";

const MovieContent = () => {
  const { id } = useRouter().query;
  const { data, error } = useSWR(id && `/api/movies/${id}`);

  if (error) {
    return (
      <Text color="red">
        Error fetching movie with ID {id}: {JSON.stringify(error)}
      </Text>
    );
  }
  if (!data) {
    return (
      <Center h="full">
        <CircularProgress isIndeterminate />
      </Center>
    );
  }
  return (
    <>
      <Stack direction={["column", "row"]} spacing={4}>
        <Head>
          <title>{data.movie.title}</title>
        </Head>
        <Box minW="300px" pos="relative">
          <Image
            src={buildImageUrl(data.movie.poster_path, "w300")}
            alt="Movie poster"
            layout="responsive"
            width="300"
            height="450"
            objectFit="contain"
            unoptimized
          />
        </Box>
        <Stack marginBottom="0">
          <HStack top={2} left={2}>
            <WatchListBTN />
            <HistoryButton />
          </HStack>
          <HStack justify="flex-start">
            <Heading as="h2" mt="1em">
              {data.movie.title}
            </Heading>
            <Box>
              {/* <Tag colorScheme="purple" variant="solid">
              {data.release_date}
            </Tag> */}
            </Box>
          </HStack>
          {/* <Box>{data.tagline}</Box> */}

          <Stack direction="row" pt="1em">
            {data.movie.genres?.map((genre) => (
              <Badge key={genre.id} colorScheme="purple" variant="outline">
                {genre.name}
              </Badge>
            ))}
          </Stack>
          <Box pt="2em">{data.movie.overview || data.movie.plot}</Box>
          <Stack
            // tags are here
            direction={["column", "row"]}
            justifyContent={"flex-start"}
            pt="5em"
          >
            {" "}
            <Tag colorScheme="purple" variant="solid">
              {data.movie.release_date}
            </Tag>
            <Tag color="white">Popularity rate: {data.movie.popularity}</Tag>
            <Tag color="white">Vote Average: {data.movie.vote_average}</Tag>
            <Tag color="white">Votes Count: {data.movie.vote_count}</Tag>
          </Stack>
        </Stack>
      </Stack>
      <Box>
        <UnorderedList stylePosition="inside">
          <Heading
            as="h3"
            textAlign={["center", "left"]}
            mb={"0.5em"}
            mt="1.3em"
          >
            Actors Gallery
          </Heading>
          <Stack
            display={"flex"}
            flexWrap={"wrap"}
            direction={["column", "row"]}
            justify-content={["center", "flex-start"]}
            alignItems={["center", "flex-start"]}
          >
            {data.castToDisplay.map((actor) => (
              <ListItem key={actor.id} listStyleType={"none"}>
                <Box
                  minW="200px"
                  minHeight={"250"}
                  mb="1em"
                  mt="1em"
                  display={"flex"}
                  justify={["center", "flex-start"]}
                  alignItems={["center", "flex-start"]}
                >
                  <Image
                    src={buildImageUrl(actor.profile_path, "w200")}
                    alt="Actor picture"
                    layout="intrinsic"
                    width="200"
                    height="250"
                    objectFit="cover"
                    unoptimized
                  />
                </Box>
                <Box maxW="200px" display={"flex"} justifyContent={"center"}>
                  <Link>{actor.name}</Link>
                </Box>
                <Box maxW="200px" display={"flex"} justifyContent={"center"}>
                  <Link>as {actor.character}</Link>
                </Box>
              </ListItem>
            ))}
          </Stack>
        </UnorderedList>
      </Box>
    </>
  );
};

export default function Movie() {
  return (
    <Layout>
      <Container h="full" mb="3em">
        <MovieContent />
      </Container>
    </Layout>
  );
}
