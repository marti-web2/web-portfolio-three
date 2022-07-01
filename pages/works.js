import { Container, Heading, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section delay={0.2}>
        <Divider my={6} />

        {/* <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading> */}
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
