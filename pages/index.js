import useSWR from "swr";
import {
  Heading,
  Box,
  Container,
  Wrap,
  Text,
  Progress,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";

const MoviesContainer = ({ children }) => (
  <Container mt="3em" mb="1em">
    {children}
  </Container>
);

const ContainerTitle = ({ children }) => (
  <Heading size="md" mb="5">
    {children}
  </Heading>
);

export default function Homepage() {
  const { data, error } = useSWR("/api/homepage");

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

  return (
    <Layout title="Moviebase">
      <Box mb="3em" minHeight="100vh">
        {/*  */}
        <MoviesContainer>
          <ContainerTitle>Based on your history</ContainerTitle>
          <Wrap spacing="10px" textAlign="center" justify={"center"}>
            {data.recMovies?.results?.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </Wrap>
        </MoviesContainer>
        {/*  */}
        <MoviesContainer>
          <ContainerTitle> Top Rated </ContainerTitle>
          <Wrap spacing="10px" textAlign="center" justify={"center"}>
            {data.topRated?.results?.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </Wrap>
        </MoviesContainer>
        {/*  */}
        <MoviesContainer>
          <ContainerTitle> Upcoming </ContainerTitle>
          <Wrap spacing="10px" textAlign="center" justify={"center"}>
            {data.upcomingMovies?.results?.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </Wrap>
        </MoviesContainer>
        <MoviesContainer>
          <ContainerTitle> Popular Movies </ContainerTitle>
          <Wrap spacing="10px" textAlign="center" justify={"center"}>
            {data.popularMovies?.results?.map((movie) => (
              <MovieCard key={"movie.id"} movie={movie} />
            ))}
          </Wrap>
        </MoviesContainer>
      </Box>
    </Layout>
  );
}
