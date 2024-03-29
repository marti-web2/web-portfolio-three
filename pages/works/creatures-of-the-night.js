import {
  Container,
  Badge,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Creatures of the Night">
    <Container>
      <Title>
        Creatures of the Night<Badge>{' '}2022</Badge>
      </Title>
      <P>
      Blackjack is a curious adventurer who finds himself lost on a morning walk. As the sun begins to set, he must find his way back home to his wife, Undgretta, before he is forced to spend the night in the creepy forest.
      </P><br />
      <P>
      Players must guide Blackjack through the wilderness and help him safely return home.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://marti-web2.github.io/" target="_blank">
            https://marti-web2.github.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/marti-web2/creatures-of-the-night"
            target="_blank"
          >
            {'<> Code'} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Flex mt={1}>
            <Meta>Platform</Meta>
            <Image
              src="https://toppng.com/uploads/preview/web-png-jpg-transparent-stock-website-icon-blue-11563644926reanjnmk6x.png"
              alt="Worldwide Web Logo"
              boxSize={'1.5rem'}
              borderRadius="full"
              ignoreFallback
            />
            <Text ml={2}>Web 2.0</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex mt={1}>
            <Meta>Stack</Meta>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="TypeScript Logo"
              boxSize={'1.5rem'}
              borderRadius="full"
              ignoreFallback
            />
            <Text ml={2} mr={4}>
              TypeScript
            </Text>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
              alt="Sass Logo"
              boxSize={'1.5rem'}
              borderRadius="full"
              ignoreFallback
            />
            <Text ml={2}>Sass</Text>
          </Flex>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/creatures-of-the-night/creatures_01.png"
        alt="Photo of Gameplay"
      />
      <WorkImage
        src="/images/works/creatures-of-the-night/creatures_02.png"
        alt="Photo of Game Over Screen"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
