import { GithubRepository } from "@/interfaces"
import { Badge, Box, Flex, Heading, Link, Text } from "@chakra-ui/react"

interface ProjectProps {
  repository: GithubRepository
}

export const ProjectItem = ({
  repository
}: ProjectProps) => {
  const {
    description,
    id,
    language,
    name,
    url
  } = repository;

  return (
    <Link href={url} _hover={{opacity: 0.8}}>
      <Flex
        direction="column"
        border="1px"
        rounded={8}
        borderColor="primary.500"
        h="full"
        padding="12px 16px"
      >
        <Heading fontWeight="normal">
          {name}
        </Heading>

        <Badge maxW="30%" textAlign="center">
          {language}
        </Badge>

        <Text mt="12px">
          {description}
        </Text>


      </Flex>
    </Link>
  )
}