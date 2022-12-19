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
  <Layout title="Delicious Dining">
    <Container>
      <Title>
        Delicious Dining <Badge>2022</Badge>
      </Title>
      <P>
      This web application offers detailed instructions for preparing gourmet meals at home. The app features a user-friendly interface, utilizing the Splide component to allow users to easily browse and select recipes through a convenient carousel.
      </P><br />
      <P>
      Whether you are an experienced chef or a beginner, this app will provide you with the tools and guidance you need to create delicious and impressive dishes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://delicious-dining.online/" target="_blank">
            https://delicious-dining.online/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/marti-web2/delicious-recipes-react"
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
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              boxSize={'1.5rem'}
              borderRadius="full"
              ignoreFallback
            />
            <Text ml={2} mr={4}>
              React
            </Text>
            <Image
              src="../../images/icons/node.png"
              alt="Node Logo"
              boxSize={'1.5rem'}
              borderRadius="full"
              ignoreFallback
            />
            <Text ml={2}>Node</Text>
          </Flex>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/delicious-dining/delicious-recipes_01.png"
        alt="Photo of Home Page"
      />
      <WorkImage
        src="/images/works/delicious-dining/delicious-recipes_02.png"
        alt="Photo of Recipe Page"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
