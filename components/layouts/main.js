import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import NoSSr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import NoSsr from '../no-ssr'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({children,router}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Marti McDee - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
<VoxelDog />
</NoSsr>
        {children}

       
      </Container>
    </Box>
  )
}

export default Main