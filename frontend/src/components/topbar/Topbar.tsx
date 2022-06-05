import { Box, Flex, Text } from "@chakra-ui/react";

type TopbarProps = {
    page: string;
    action?: string;
}

const Topbar = (props: TopbarProps) => {
    const { page } = props;
    const { action } = props;

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
             m='1em'
             alignSelf='flex-start'
             position='absolute'
             left='0'
             bottom='0'
            >
                <Text fontSize='2xl'>{page}</Text>
            </Box>

            <Box
             m='1em'
             alignSelf='flex-end'
             position='absolute'
             right='0'
            >
                <Text fontSize='2xl'>{action}</Text>
            </Box>
        </Flex>
    );
}

export default Topbar;