import dbConnect from "../utils/dbConnect";
import Watchlist from "../models/Watchlist";
import React from "react";
import { Container, Heading, Wrap } from "@chakra-ui/react";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";

export default function Watchlistpage({ movies }) {
  return (
    <Layout title="Watchlist">
      <Container mb="3em">
        <Heading size="md" mb="4" mt="6">
          WatchList
        </Heading>
        <Wrap spacing="10px" textAlign="center" justify={"center"}>
          {movies.map((movie) => (
            <MovieCard key={"movie.id"} movie={movie} />
          ))}
        </Wrap>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const result = await Watchlist.find({}).sort({ date: 1 });
  const movies = result.map((doc) => {
    const movie = doc.toObject();
    movie._id = movie._id.toString();
    movie.dateAdded = movie.dateAdded.toString();
    return movie;
  });

  return { props: { movies: movies } };
}
