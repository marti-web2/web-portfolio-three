import { forwardRef, useEffect } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="40%"
    top="40%"
    mt={['-24px', '-72px', '-276px']}
    mb={['-30px', '-112px', '-168px']}

  />
)

export const DogContainer = forwardRef(({ children }, ref) => {
  useEffect(() => {
    const container = ref?.current
    if (container) {
      container.style.overflow = 'hidden'
    }
  }, [ref])

  return (
    <Box
      ref={ref}
      className="shiba-inu"
      m="auto"
      mt={['-52px', '-158px', '-308px']}
      mb={['-36px', '-132px', '-198px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )})

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
