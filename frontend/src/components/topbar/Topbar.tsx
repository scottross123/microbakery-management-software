import { Box, Flex, Text } from "@chakra-ui/react"

type TopbarProps = {
    page: string;
}

const Topbar = (props: TopbarProps) => {
    const { page } = props;

    return (
        <Flex
         backgroundColor='green.50'
         w='100%'
         h='7.5%'
         borderBottom='1px'
         flexDir='row'
         pos='sticky'
        >
            <Box
             w='25%'
             ml='1em'
             alignSelf='center'
             
            >
                <Text fontSize='2xl'>{page}</Text>
            </Box>
        </Flex>
    );
}

export default Topbar;