import { Box, Flex, Text } from "@chakra-ui/react";
import { stringify } from "querystring";
import { useLocation } from 'react-router-dom';

type TopbarProps = {
    action?: string;
}

const Topbar = (props: TopbarProps) => {
    const { action } = props;

    const { pathname } = useLocation();
    const page = pathname.charAt(1).toUpperCase() + pathname.slice(2);

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
                <Text fontSize='2xl'>
                    { page }
                </Text>
            </Box>

            <Box
             m='1em'
             alignSelf='flex-end'
             position='absolute'
             right='0'
            >
                <Text fontSize='2xl'>
                    { action ? action : '' }
                </Text>
            </Box>
        </Flex>
    );
}

export default Topbar;