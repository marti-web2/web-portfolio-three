import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDining from '../public/images/works/delicious-recipes_card.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <Divider my={6} />
          <WorkGridItem
            id="delicious-dining"
            title="Delicious Dining"
            thumbnail={thumbDining}
          >
            An app that allows you to browse through a wide selection of
            delicious recipes that even the novice chef can prepare in little
            time.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
