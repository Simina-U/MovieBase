import useSWR from "swr";
import Layout from "../components/Layout";
import {
  Box,
  Container,
  Heading,
  Wrap,
  Text,
  Progress,
} from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";

const MoviesSectionTitle = ({ children }) => (
  <Heading size="md" mb="5" mt="6">
    {children}
  </Heading>
);

const MoviesWrap = ({ children }) => (
  <Wrap spacing="10px" textAlign="center" justify={"center"}>
    {children}
  </Wrap>
);

export default function Recommended() {
  const { data, error } = useSWR("/api/recommended");

  if (error) {
    return (
      <Text color="red">
        Error fetching recommended movies for you: {JSON.stringify(error)}
      </Text>
    );
  }
  if (!data) {
    return <Progress size="xs" isIndeterminate />;
  }
  console.log(data);

  return (
    <Layout title="Recommended">
      <Box mb="3em" minHeight="100vh">
        <Container>
          <MoviesSectionTitle>From your WatchList</MoviesSectionTitle>
          <MoviesWrap>
            {data.watchlist.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </MoviesWrap>
        </Container>
        <Container pt="5">
          <MoviesSectionTitle>Watch again</MoviesSectionTitle>

          <MoviesWrap>
            {data.history.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </MoviesWrap>
        </Container>
        <Container pt="5">
          <MoviesSectionTitle>Now trending</MoviesSectionTitle>
          <MoviesWrap>
            {data.trending?.results?.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </MoviesWrap>
        </Container>
      </Box>
    </Layout>
  );
}
