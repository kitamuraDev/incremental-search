import { ChangeEvent, useCallback } from "react";
import { ChakraProvider, Spinner, VStack } from "@chakra-ui/react";

import useFetch from "./hooks/useFetch";
import useFilter from "./hooks/useFilter";
import Header from "./components/Header";
import PostItem from "./components/PostItem";
import { ResponseDataType } from "./types";

/**
 * description
 *  - incremental search
 *  - darkmode compatible
 */

export default function App() {
  const { data, isLoading } = useFetch<ResponseDataType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { filtered, filter } = useFilter(data!);

  // filter handler
  const handleFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // 空文字を入力させない
      if (e.target.value.trim() === "") {
        e.target.value = "";
      }
      filter(e.target.value);
    },
    [filter]
  );

  return (
    <ChakraProvider>
      <VStack>
        <Header handleFilter={handleFilter} />
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <PostItem filterd={filtered!} />
        )}
      </VStack>
    </ChakraProvider>
  );
}
