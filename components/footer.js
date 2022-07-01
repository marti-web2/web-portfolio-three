import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Marti McDee, LLC
      <br />
      <a href="https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c">
        &quot;Shiba&quot;
      </a>
      , by <a href="https://sketchfab.com/zixisun51">zlxlsun02</a> licensed
      under{' '}
      <a
        about="/public/assets/shiba/scene.gltf"
        rel="license"
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        CC BY 4.0
      </a>
    </Box>
  )
}

export default Footer
