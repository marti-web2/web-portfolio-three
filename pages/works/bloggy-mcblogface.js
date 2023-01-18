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
    <Layout title="Bloggy McBlogface">
      <Container>
        <Title>
          Bloggy McBlogface<Badge>{' '}2023</Badge>
        </Title>
        <P>
        This blog is dedicated to exploring the intersection of programming, music, and art.
        </P><br />
        <P>
        Here you will find articles and tutorials on topics such as creating music with code, using technology in art, and more. The blog is built using Next.js, a framework for building server-rendered React applications.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://myblog-next-psi.vercel.app/" target="_blank">
            https://myblog-next-psi.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/marti-web2/myblog-next"
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
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                alt="Next Logo"
                boxSize={'1.5rem'}
                borderRadius="full"
                ignoreFallback
              />
              <Text ml={2} mr={4}>
                NextJS
              </Text>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind Logo"
                boxSize={'1.5rem'}
                borderRadius="full"
                ignoreFallback
              />
              <Text ml={2}>Tailwind CSS</Text>
            </Flex>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/bloggy/bloggy-shot-1.png"
          alt="Photo of Gameplay"
        />
        <WorkImage
          src="/images/works/bloggy/bloggy-shot-2.png"
          alt="Photo of Game Over Screen"
        />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  