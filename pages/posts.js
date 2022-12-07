import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbLaptop from '../public/images/links/posts/laptop.webp'

const Posts = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <Divider my={6} />
          <WorkGridItem
            section={'posts'}
            id="programming"
            title="Programming"
            thumbnail={thumbLaptop}
          />
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

