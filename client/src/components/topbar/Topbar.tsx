import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
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
         borderBottom='1px'
         flexDir='row'
        >
            <Box
             m='.5em'
            >
                <Text>{page}</Text>
            </Box>

            <Spacer />

            <Box
             m='.5em'
            >
                { action ? action : 'bruh' }
            </Box>
        </Flex>
    );
}

export default Topbar;
