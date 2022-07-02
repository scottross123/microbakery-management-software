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
         backgroundColor='brand.main'
         borderBottom='1px'
         flexDir='row'
        >
            <Box
             m='.5em'
            >
                panderia
            </Box>

            <Spacer />

            <Box
             m='.5em'
            >
                Logout
            </Box>
        </Flex>
    );
}

export default Topbar;
