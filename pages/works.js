import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDining from '../public/images/works/delicious-dining/delicious-recipes_card.png'
import thumbCreatures from '../public/images/works/creatures-of-the-night/creatures_card.png'
import thumbBloggy from '../public/images/works/bloggy/bloggy-title-card.png'

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
            section={'works'}
            id="delicious-dining"
            title="Delicious Dining"
            thumbnail={thumbDining}
          >
            An app that provides users with detailed instructions for preparing delicious gourmet meals at home. 
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <Divider my={6} />
          <WorkGridItem
            section={'works'}
            id="creatures-of-the-night"
            title="Creatures of the Night"
            thumbnail={thumbCreatures}
          >
            An arcade-style action game featuring side-scrolling gameplay. Players are tasked with defeating a certain number of night creatures before the timer runs out.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <Divider my={6} />
          <WorkGridItem
            section={'works'}
            id="bloggy-mcblogface"
            title="Bloggy McBlogface"
            thumbnail={thumbBloggy}
          >
            In this blog, we explore the intersection of programming, music, and art.
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
