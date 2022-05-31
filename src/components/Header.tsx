import { Flex, Input } from "@chakra-ui/react";
import React, { memo, useEffect, useRef, VFC } from "react";
import DarkModeToggleIcon from "./DarkModeToggleIcon";

type Props = {
  handleFilter: React.ChangeEventHandler<HTMLInputElement>;
};

const Header: VFC<Props> = memo((props) => {
  const focusRef = useRef<HTMLInputElement>(null);
  const { handleFilter } = props;

  // input area focus
  // useEffect(() => {
  //   focusRef.current?.focus();
  // }, []);

  return (
    <Flex mt={5} mb={5} p={3} w="100%" justify="space-around" align="center">
      {/* input */}
      <Input
        variant="flushed"
        placeholder="検索"
        w={{ base: "xs", sm: "md", md: "xl" }}
        mr={{ base: 5, md: 0 }}
        onChange={(e) => handleFilter(e)}
        ref={focusRef}
      />
      {/* darkmord toggle button */}
      <DarkModeToggleIcon />
    </Flex>
  );
});

export default Header;
