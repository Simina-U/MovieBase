import dbConnect from "../utils/dbConnect";
import History from "../models/History";
import {
  Badge,
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  Link,
  Button,
} from "@chakra-ui/react";

import Layout from "../components/Layout";

function handleDate(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const finalDate = `${day}/${month + 1}/${year}`;
  return finalDate;
}

export default function Historypage({ movies }) {
  return (
    <Layout title="History">
      <Container minHeight="100vh">
        <Heading size="md" mb="4" ps="1em" mt={"6"}>
          Last time you were here
        </Heading>
        <UnorderedList>
          {movies.map((movie) => (
            <ListItem
              key="{movie.id}"
              fontSize="1.1em"
              display="flex"
              paddingRight="1em"
              flexDirection={["", "row"]}
            >
              <Box>
                🎬
                <Link as="a" href={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  rightIcon={<Badge>{handleDate(movie.date)}</Badge>}
                  justifyContent="flex-start"
                  fontStyle="italic"
                  fontSize="0.8em"
                  textAlign="left"
                >
                  {" "}
                  seen on
                </Button>
              </Box>
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const result = await History.find({}).sort({ date: -1 });
  const movies = result.map((doc) => {
    const movie = doc.toObject();
    movie._id = movie._id.toString();
    movie.date = movie.date.toString();
    // console.log(movie);

    return movie;
  });

  return { props: { movies: movies } };
}
