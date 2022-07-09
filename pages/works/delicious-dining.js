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
        A useful app with detailed instructions to help anyone prepare a delicious gourmet meal. The Splide component
        is implemented to give the user a smooth experience in selecting recipes from a handy carousel.
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
          <Link href="https://github.com/marti-web2/delicious-recipes-react" target="_blank">
            {'<> Code'} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 2.0</span>
        </ListItem>
        <ListItem>
          <Flex align="left">
            <Meta>Stack</Meta>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt='React Logo' 
            boxSize={'1.75rem'} borderRadius='full' ignoreFallback /><Text ml={2}>React</Text>

          </Flex>
        </ListItem>
      </List>
      <WorkImage src="/images/works/delicious-recipes_01.png" alt="Delicious Dining" />
      <WorkImage src="/images/works/delicious-recipes_02.png" alt="Delicious Dining" />
    </Container>

  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'



