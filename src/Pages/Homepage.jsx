import { Flex } from "@chakra-ui/react";
import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";

const Homepage = () => {
  return (
    <Flex>
      <FilterSort />
      <MusicRecords />
    </Flex>
  );
};

export default Homepage;
