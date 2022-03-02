import { Link, WrapItem, VStack, Image, Flex, Box } from "@chakra-ui/react";

import { buildImageUrl } from "../utils/api";
import React from "react";
import ModalComp from "./ModalComp";

export default function MovieCard({ movie }) {
  return (
    <Box>
      <WrapItem
        key="{movie.id}"
        maxWidth="290"
        bg="teal.600"
        h="380"
        pt="5"
        borderRadius="10"
      >
        <ModalComp movie={movie} />

        <Flex>
          <VStack>
            <Image
              boxSize="300px"
              src={buildImageUrl(movie.image || movie["poster_path"], "w300")}
              alt="{movie.title}"
              layout="responsive"
              height="300"
              objectFit="contain"
              unoptimized="true"
            />
            <Link
              as="a"
              href={`/movies/${movie.id}`}
              fontWeight="bold"
              fontFamily="sans-serif"
              textShadow="1px 1px teal"
              h="20px"
              paddingTop="3px"
            >
              {movie.name || movie.title}
            </Link>
          </VStack>
        </Flex>
      </WrapItem>
    </Box>
  );
}
