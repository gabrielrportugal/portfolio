import { GithubRepository } from '@/interfaces'
import { Badge, Link, Stack, Text } from '@chakra-ui/react'

interface ProjectProps {
  repository: GithubRepository
}

export const ProjectItem = ({ repository }: ProjectProps) => {
  const { description, html_url, language, name } = repository

  return (
    <Link href={html_url} _hover={{ opacity: 0.6 }}>
      <Stack
        direction="column"
        border="1px"
        rounded={8}
        borderColor="primary.500"
        h="full"
        padding="12px 16px"
      >
        <Text fontWeight="bold" fontSize={[16, 24]}>
          {name}
        </Text>

        <Badge textAlign="center">{language}</Badge>

        <Text>{description}</Text>
      </Stack>
    </Link>
  )
}
