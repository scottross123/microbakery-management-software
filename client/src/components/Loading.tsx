import {Flex, Heading, Spinner} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex alignSelf='center' justifyContent='center' alignItems='center' flexDir='column'>
      <Heading mb={10}>Loading</Heading>
      <Spinner
          color='primary.main'
          size='xl'
          thickness='7.5px'
          speed='0.7s'
      />
    </Flex>
  )
}

export default Loading;