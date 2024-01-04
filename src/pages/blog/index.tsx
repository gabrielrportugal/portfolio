import { BlogPostButton } from "@/components";
import { BlogDetails } from "@/interfaces";
import { getAllPosts } from "@/lib/get-posts";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";

interface BlogProps {
  posts: BlogDetails[];
}

export default function Blog({ posts }:BlogProps) {
  const renderEmptyList = () => (
    <Heading fontWeight={'light'} my="6">
      Ainda não há publicações!
    </Heading>
  )

  return (
    <Box>
      <Head>
        <title>Blog</title>
      </Head>
      <Heading>
        Publicações
      </Heading>
      {posts.length === 0 && renderEmptyList()}
      {posts.length > 0 && (
        <SimpleGrid spacing={4} mt={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {posts.map((post) => (
            <BlogPostButton 
              key={post.slug}
              blogDetails={post}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export const getStaticProps = async () => {
  const postList: BlogDetails[] = getAllPosts();

  return {
    props: {
      posts: postList || [],
    },
  };
};