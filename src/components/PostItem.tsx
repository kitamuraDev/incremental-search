import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import { ResponseDataType } from "../types";

type Props = {
  filterd: ResponseDataType[];
};

const PostItem: VFC<Props> = memo((props) => {
  const { filterd } = props;

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={5} p={3}>
      {filterd?.map((post) => (
        <GridItem
          key={post.id}
          border="1px"
          borderColor="blue.300"
          borderRadius="base"
          p={2}
        >
          <Heading as="h2" size="md" noOfLines={1} mb={1}>
            {post.title}
          </Heading>
          <Text fontSize="sm">{post.body}</Text>
        </GridItem>
      ))}
    </Grid>
  );
});

export default PostItem;
