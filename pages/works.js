import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDining from '../public/images/works/delicious-dining/delicious-recipes_card.png'
import thumbCreatures from '../public/images/works/creatures-of-the-night/creatures_card.png'

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
            An app that provides detailed instructions to help anyone prepare a
            delicious gourmet meal.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <Divider my={6} />
          <WorkGridItem
            id="creatures-of-the-night"
            title="Creatures of the Night"
            thumbnail={thumbCreatures}
          >
            A side scrolling arcade-style action game. The goal is to defeat
            enough night creatures before the timer expires.
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
