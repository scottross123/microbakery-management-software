import { Flex, Icon, Text, Box } from "@chakra-ui/react";
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

type SidebarItemProps = {
    icon: IconType;
    text: string;
}

export const SidebarItem = (props : SidebarItemProps) => {
    const { icon } = props;
    const { text } = props;

    const activeStyle = {
        textDecor: 'none', 
        color: '#a48b73',
    }

    return (
        <NavLink
        to={text}
        style={
            ({ isActive }) =>
            isActive ? activeStyle : {}
        }
        >    
            <Flex 
            className='sidebar-item'
            _hover={activeStyle}
            justifyContent="center"
            w="100%"
            >
                <Box alignSelf="center">
                    <Icon as={icon} fontSize="3xl" />
                </Box>

                <Box
                textDecoration='none' 
                ml='.5em'
                alignSelf="center" 
                >
                    <Text>{text}</Text>
                </Box>
            </Flex>
        </NavLink>
    )
}

// to-do: split this into two components, Sidebar.tsx for UI layout and SidebarList.tsx for functionality 
