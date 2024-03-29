import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'
import thumbJS from '../../public/images/links/posts/programming/js.webp'
import thumbCPlusPlus from '../../public/images/links/posts/programming/cplusplus.jpeg'
import thumbWebDev from '../../public/images/links/posts/programming/web-dev.webp'

const Programming = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Programming
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Types, Values, and Variables"
            sub="Comparing Two Arrays"
            thumbnail={thumbJS}
            href="https://twitter.com/MartiMcdee/status/1596715496996745220"
          />
          <GridItem
            title="Functions"
            sub="Custom Function Properties"
            thumbnail={thumbJS}
            href="https://twitter.com/MartiMcdee/status/1596963335484084224"
          />
          <GridItem
            title="Objects"
            sub="Property Access Errors"
            thumbnail={thumbJS}
            href="https://twitter.com/MartiMcdee/status/1597427204916666368"
          />
          <GridItem
            title="Asynchronous Programming"
            sub="Events"
            thumbnail={thumbJS}
            href="https://twitter.com/MartiMcdee/status/1597036566601687042"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Objects"
            sub="Static vs. Dynamic"
            thumbnail={thumbCPlusPlus}
            href="https://twitter.com/MartiMcdee/status/1604606461509881857"
          />
          </SimpleGrid>
          </Section>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="MERN Stack"
            sub="Creating a CRUD App"
            thumbnail={thumbWebDev}
            href="https://myblog-next-psi.vercel.app/blog/coding/mern-stack"
          />
          </SimpleGrid>
          </Section>
    </Container>
  </Layout>
)

export default Programming
export { getServerSideProps } from '../../components/chakra'