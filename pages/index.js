import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  ButtonGroup,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitch
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbFeatured from '../public/images/featured-app.png'
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
            Marti Martinez
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
              lazyLoading="lazy"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          As a freelance software developer based in Texas, I am passionate about creating solutions that are both functional and enjoyable for users. I specialize in the entire product development process, from planning and design to problem-solving with code.</Paragraph><br />
        <Paragraph> In my free time, I enjoy playing music and sharing app development tips and{' '}
          <Link href="https://www.youtube.com/channel/UCfwy8OpJX_eO4bDExgQ2lfw" target="_blank">
            Leetcode Solutions
          </Link>
          {' '}on my YouTube channel. My expertise and enthusiasm make me well-equipped to develop innovative and effective solutions for my clients.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="cyan"
              variant={'outline'}
            >
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
         I have a strong educational background in computer science, having completed the <strong>Associates of Science</strong> program at Northeast Lakeview College in 2019 and the <strong>Bachelor&apos;s of Computer Science</strong> program at the University of Texas at San Antonio in 2021. 
        </Paragraph><br />
        <Paragraph>
          Currently, I am working as a freelancer, leveraging my skills and knowledge to deliver high-quality solutions to my clients.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, learning new programming languages, drawing, and playing keyboards and guitar. I also enjoy {' '}
          <Link href="https://www.twitch.tv/marti_mcdee" target="_blank">
            Retro Gaming
          </Link>
          {' '}as a way to relax and unwind.
        </Paragraph><br />
        <Paragraph>
          These passions and hobbies allow me to constantly expand my skill set and stay up-to-date on the latest trends and technologies in my field.
          </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List display="inline-flex">
          <ListItem>
            <Link href="https://twitter.com/MartiMcdee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="twitter"
                leftIcon={<IoLogoTwitter />}
              >
                Twitter
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
                colorScheme="linkedin"
                leftIcon={<IoLogoLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/marti-mcdee" target="_blank">
              <Button
                variant="ghost"
                colorScheme={"whatsapp"}
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/marti_mcdee/" target="_blank">
              <Button
                variant="ghost"
                colorScheme={"pink"}
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.twitch.tv/marti_mcdee" target="_blank">
              <Button
                variant="ghost"
                colorScheme={"purple"}
                leftIcon={<IoLogoTwitch />}
              >
                Twitch
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} style={{ marginTop: '2.5em' }}>
          <GridItem
            href="https://www.youtube.com/channel/UCfwy8OpJX_eO4bDExgQ2lfw"
            title="Pregaming the Afterlife"
            thumbnail={thumbYouTube}
            alt="YouTube thumbnail"
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://delicious-dining.online/"
            title="Delicious Dining"
            thumbnail={thumbFeatured}
            alt="App thumbnail"
          >
            An app that provides a menu of delicious recipes
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <ButtonGroup variant="outline" spacing="6">
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="cyan">
                Popular posts
              </Button>
            </NextLink>
            <Link href="mailto:marti@martimcdee.com">
              <Button as="a" leftIcon={<EmailIcon />} colorScheme="cyan">
                Email Me
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Section>
    </Container>
  </Layout >
)

export default Home
export { getServerSideProps } from '../components/chakra'
