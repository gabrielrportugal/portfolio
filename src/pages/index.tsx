/* eslint-disable @next/next/no-img-element */
import { ProjectItem } from '@/components/project-item'
import { GithubRepository } from '@/interfaces'
import { api } from '@/services'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'

interface Props {
  repositories: GithubRepository[]
}

function Home({ repositories }: Props) {
  const isDesktopVersion = useBreakpointValue({ base: false, lg: true })
  const titleColor = useColorModeValue('primary.500', 'primary.50')

  return (
    <Box>
      <Flex
        justifyContent={'space-around'}
        alignItems="center"
        paddingY={['12', '20']}
      >
        <Flex as="section" direction="column" gap="2">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Heading as="h1" fontSize="3.5rem" mb="">
              Gabriel Portugal
            </Heading>

            {!isDesktopVersion && (
              <Box maxW={['80px', '120px']} maxH={['80px', '120px']}>
                <img
                  alt="Gabriel Portugal profile pic seated in a chair"
                  src="/images/eu.jpeg"
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </Box>
            )}
          </Stack>

          <Heading as="h3" fontWeight={'light'} fontSize="1.5rem" mb="8">
            Software Developer
          </Heading>

          <Text fontSize={['1rem', '1.25rem', '1.5rem']}>
            Sou um desenvolvedor de software apaixonado por programação.
          </Text>

          <Text fontSize={['1rem', '1.25rem', '1.5rem']}>
            Gosto de falar sobre Node, React, programação e tecnologia de modo
            geral.
          </Text>

          <Text fontSize={['1rem', '1.25rem', '1.5rem']}>
            📌 Rio de Janeiro, Brasil.
          </Text>
        </Flex>

        {isDesktopVersion && (
          <Box maxW="240px" maxH="240px">
            <img
              alt="Gabriel Portugal profile pic seated in a chair"
              src="/images/eu.jpeg"
              style={{
                borderRadius: '50%',
              }}
            />
          </Box>
        )}
      </Flex>

      <Divider />

      <Flex
        justifyContent={'space-around'}
        direction="column"
        alignItems="center"
        paddingY={['12', '20']}
      >
        <Heading as="h1" fontSize={'2.0rem'} mb="">
          Alguns dos meus projetos
        </Heading>

        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(3, 1fr)',
          ]}
          gridTemplateRows={'160px'}
          gap={3}
          my={8}
        >
          {repositories.map((repository) => (
            <ProjectItem key={repository.id} repository={repository} />
          ))}
        </Grid>

        <Link
          href="https://github.com/gabrielrportugal?tab=repositories"
          rounded={8}
          padding="4px 12px"
          _hover={{ opacity: 0.8 }}
        >
          <Button color={titleColor}>Ver todos</Button>
        </Link>
      </Flex>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const githubUsername = 'gabrielrportugal'

  const response = await api.get<GithubRepository[]>(
    `https://api.github.com/users/${githubUsername}/repos?per_page=50`,
  )

  const repositoriesFiltered = response.data.filter(
    ({ name }) =>
      name === 'nest-clean-architecture' ||
      name === 'leetcode-challenges' ||
      name === 'portfolio',
  )

  const repositories = repositoriesFiltered

  const ONE_DAY_TO_REVALIDATE_DATA = 60 * 60 * 24

  return {
    props: { repositories },
    revalidate: ONE_DAY_TO_REVALIDATE_DATA,
  }
}

export default Home
