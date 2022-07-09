import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Delicious Dining">
    <Container>
      <Title>
        Delicious Dining <Badge>2016-</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $300k.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://delicious-dining.online/">
          https://delicious-dining.online/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 2.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJs</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/delicious-recipes_01.png" alt="Delicious Dining" />
      <WorkImage src="/images/works/delicious-recipes_02.png" alt="Delicious Dining" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
