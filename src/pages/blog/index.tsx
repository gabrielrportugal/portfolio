import { BlogDetails } from "@/interfaces";
import { getAllPosts } from "@/lib/get-posts";
import { Box, Heading } from "@chakra-ui/react";

interface BlogProps {
  posts: BlogDetails[];
}

export default function Blog({
  posts
}:BlogProps) {
  return (
    <Box>
      <Heading as="h1" mb="2">
        Ainda estamos trabalhando nisto !
      </Heading>
    </Box>
  )
}

export const getStaticProps = async () => {
  const postList: BlogDetails[] = getAllPosts();

  return {
    props: {
      posts: postList,
    },
  };
};