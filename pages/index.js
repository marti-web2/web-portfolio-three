import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/links/youtube.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marti McDee
          </Heading>
          <p>Digital Artist / Musician / Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/marti.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a freelance and a full-stack developer based in the U.S.A. with a
          passion for building things that help people do things and have fun. I
          have a knack for all things launching products, from planning and
          designing all the way to solving real-life problems with code. When
          not online, I love to play music. I periodically upload instructional
          videos and tips/tricks on my{' '}
          <NextLink
            href="https://www.youtube.com/channel/UCfwy8OpJX_eO4bDExgQ2lfw"
            passHref
          >
            <Link target="_blank">YouTube </Link>
          </NextLink>
          channel.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Associates of Science Program at Northeast Lakeview
          College
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bachelor&apos;s of Computer Science Program at the
          University of Texas at San Antonio
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, Learning new languages, Drawing, Playing keyboards {'&'}{' '}
          guitar, and{' '}
          <Link href="https://www.twitch.tv/marti_mcdee" target="_blank">
            Gaming
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/marti_mcdee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @marti_mcdee
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/marti-mcdee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.linkedin.com/in/david-martinez-a693b165/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCfwy8OpJX_eO4bDExgQ2lfw"
            title="Pregaming the Afterlife"
            thumbnail={thumbYouTube}
            alt="YouTube thumbnail"
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="#"
            title="Project"
            thumbnail={thumbInkdrop}
            alt="App thumbnail"
          >
            Highlighted Project
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
