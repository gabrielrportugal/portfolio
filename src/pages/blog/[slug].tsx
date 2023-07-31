import { getPostBySlug } from "@/lib/get-posts";
import { Box, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";

interface BlogDetailsProps {
  title: string;
  date: string;
  content: string;
  description: string;
  slug: string;
  tags: string[];
  banner: string;
}

function BlogDetails({
  banner,
  title,
  tags,
  date,
  slug,
  description,
  content,
}: BlogDetailsProps) {
  return (
    <Box>
      <Heading as="h1" mb="2">
        Ainda estamos trabalhando nisto !
      </Heading>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = ({
  params,
}) => {
  const slug = params?.slug ?? "";
  const postDetails = getPostBySlug(slug.toString());

  return {
    props: {
      title: postDetails.data.title,
      date: postDetails.data.date,
      description: postDetails.data.description,
      slug: postDetails.slug,
      content: postDetails.content,
      tags: postDetails.data.tags,
      banner: postDetails.data.banner,
    },
  };
};

export default BlogDetails;
