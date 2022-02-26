import * as React from "react";
//Chakra-ui
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";
//Types
import { TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const CountryContainer = ({ teas }: TeasProps) => {
  const { currentCountry, setCurrentCountry } = useSearchTeasContext();

  const uniqueArray = teas.filter(
    (value, index, array) =>
      array.findIndex((t) => t.country === value.country) === index
  );

  return (
    <Flex
      maxW="fit-content"
      mx="auto"
      minH="3rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <SearchLabel>Country</SearchLabel>
      <Menu matchWidth>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon boxSize="1.45rem" />}
          bg="white"
          minW="206px"
          borderRadius="8"
          borderWidth="1px"
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.3)"
        >
          {currentCountry}
        </MenuButton>
        <MenuList defaultValue="Any">
          <MenuItem value="Any" onClick={() => setCurrentCountry("Any")}>
            Any
          </MenuItem>
          {uniqueArray.map((elem, index) => (
            <MenuItem
              key={index + 1}
              value={elem.country}
              onClick={() => setCurrentCountry(elem.country)}
            >
              {elem.country}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default CountryContainer;
