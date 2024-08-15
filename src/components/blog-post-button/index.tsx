import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  HStack,
  Stack,
  Tag,
} from '@chakra-ui/react'
import { BlogDetails } from '@/interfaces'

interface BlogPostButtonProps {
  blogDetails: BlogDetails
}
export const BlogPostButton = ({ blogDetails }: BlogPostButtonProps) => {
  const { title, description, date, tags } = blogDetails.data

  return (
    <Card as="a" href={blogDetails.slug} _hover={{ opacity: 0.8 }}>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody py={0.5}>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Stack>
          <Text>{new Date(date).toLocaleDateString('pt')}</Text>
          <HStack>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </HStack>
        </Stack>
      </CardFooter>
    </Card>
  )
}
