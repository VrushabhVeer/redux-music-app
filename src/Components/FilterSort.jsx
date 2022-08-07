import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const intialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(intialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleChange = (e) => {
    const option = e.target.value;

    // if the option is alredy present in the category, remove it.
    // else add it in category array
    let newCategary = [...category];

    if (category.includes(option)) {
      newCategary.splice(newCategary.indexOf(option), 1);
    } else {
      newCategary.push(option);
    }
    setCategory(newCategary);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      setSearchParams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <Box w='200px' h='100vh' pos="fixed" p='10' borderRight="1px solid" className="filterSort">
        <Box textAlign="left">
          <Button w="100px">Home</Button>
          <br />
          <Button w="100px" mt="4">
            Albums
          </Button>
          <br />
          <Button w="100px" mt="4">
            Category
          </Button>
          <br />
          <Button w="100px" mt="4">
            Artists
          </Button>
        </Box>

        <Button variant="ghost" mt='8' mb='2'>Filter</Button>
        <div className="filterDiv">
          <input
            defaultChecked={category.includes("K-Pop")}
            type="checkbox"
            onChange={handleChange}
            value="K-Pop"
          />
          <label>K-Pop</label>
          <br />

          <input
            defaultChecked={category.includes("Country")}
            type="checkbox"
            onChange={handleChange}
            value="Country"
          />
          <label>Country</label>
          <br />
          <input
            defaultChecked={category.includes("Holiday")}
            type="checkbox"
            onChange={handleChange}
            value="Holiday"
          />
          <label>Holiday</label>
          <br />
          <input
            defaultChecked={category.includes("Heavy Metal")}
            type="checkbox"
            onChange={handleChange}
            value="Heavy Metal"
          />
          <label>Heavy Metal</label>
          <br />
          <input
            defaultChecked={category.includes("Rock")}
            type="checkbox"
            onChange={handleChange}
            value="Rock"
          />
          <label>Rock</label>
        </div>

        <div className="sortDiv" onChange={handleSort}>
          <Button variant="ghost" mb="4">Sort By</Button >
          <div>
            <input
              defaultChecked={sortBy === "asc"}
              name="sortBy"
              type="radio"
              value="asc"
            />
            <label>Ascending</label>
          </div>

          <div>
            <input
              defaultChecked={sortBy === "desc"}
              name="sortBy"
              type="radio"
              value="desc"
            />
            <label>Descending</label>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default FilterSort;
