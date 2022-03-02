import { Box, Text, Tag, useDisclosure } from "@chakra-ui/react";
import React from "react";

import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function ModalComp({ movie }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const finalRef = React.useRef();

  return (
    <Box position={"absolute"} zIndex={"5"}>
      <Button
        variant="ghost"
        onClick={onOpen}
        size="md"
        top="327"
        left="230"
        _hover={{ bg: "none" }}
        _focus={{
          border: "none",
        }}
      >
        <ChevronDownIcon fontSize={"1.4em"} />
        {/* 🕹 */}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader mt="2">{movie.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{movie.overview || movie.plot}</Text>
            {movie.runtime && (
              <Text mt="3" size="sm">
                <Tag>Runtime: </Tag> {movie.runtime} minutes
              </Text>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
