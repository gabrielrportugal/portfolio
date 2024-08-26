/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug, getPostSlugs } from '@/lib/get-posts'
import { Box, Heading, Stack, Text, Tag, HStack, theme } from '@chakra-ui/react'
import { GetStaticPathsResult, GetStaticProps } from 'next'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import { chakraTheme } from '@/utils'

interface BlogDetailsProps {
  title: string
  date: string
  content: string
  description: string
  slug: string
  tags: string[]
  banner: string
  contentHtml: string | TrustedHTML
}

const blogTheme = {
  p: (props: any) => {
    const { children } = props
    return (
      <Text mb={2} fontSize={'16px'}>
        {children}
      </Text>
    )
  },
  h1: (props: any) => {
    const { children } = props
    return (
      <Heading mt="12px" as="h1" fontSize="48px" fontWeight="bolder">
        {children}
      </Heading>
    )
  },
  h3: (props: any) => {
    const { children } = props
    return (
      <Heading mt="40px" as="h3" fontSize="32px" fontWeight="bolder">
        {children}
      </Heading>
    )
  },
  li: (props: any) => {
    const { children } = props
    return (
      <Text as="li" mb={2} fontSize={'16px'}>
        {children}
      </Text>
    )
  },
}

function BlogDetails({
  title,
  tags,
  date,
  description,
  content,
}: BlogDetailsProps) {
  return (
    <Box>
      <Stack spacing={3} mb="18px">
        <Heading as="h1" mb="2" fontWeight="bolder">
          {title}
        </Heading>

        <Heading fontSize="24px" fontWeight="normal">
          {description}
        </Heading>

        <HStack>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </HStack>

        <Text>{new Date(date).toLocaleDateString('pt')}</Text>
      </Stack>

      <Box my="20px">
        <ReactMarkdown components={ChakraUIRenderer(blogTheme)} skipHtml>
          {content}
        </ReactMarkdown>
      </Box>
    </Box>
  )
}

export const getStaticPaths = (): GetStaticPathsResult => {
  const posts = getPostSlugs()

  const paths = posts.map((postSlug: string) => {
    return {
      params: {
        slug: postSlug.replace('.md', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ?? ''
  const postDetails = getPostBySlug(slug.toString())

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
  }
}

export default BlogDetails
