import {Flex, Icon, Text, Box, Tooltip} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import {capitalize} from "../../utils/capitalize";

type SidebarItemProps = {
    icon: IconType;
    text: string;
}

export const SidebarItem = (props : SidebarItemProps) => {
    const { icon } = props;
    const { text } = props;
    const [isSelected, setIsSelected] = useState<'brand.600' | 'none'>('none');

    const activeStyle = {
        textDecor: 'none', 
        backgroundColor: 'brand.600',
    }

    return (
        <Tooltip hasArrow fontSize='lg' label={capitalize(text)} placement='right'>
            <Flex
                className='sidebar-item'
                _hover={activeStyle}
                w="100%"
                justifyContent="center"
                backgroundColor={isSelected}
                p={2}
            >
                <NavLink
                    to={text}
                    className={({isActive}) => {
                        isActive ? setIsSelected('brand.600') : setIsSelected('none');
                        return undefined;
                    }}
                >
                    <Icon as={icon} w={5} h={5} />
                </NavLink>
            </Flex>
        </Tooltip>
    )
}

export default SidebarItem;
// to-do: split this into two components, Sidebar.tsx for UI layout and SidebarList.tsx for functionality 
/*
                <Box
                textDecoration='none'
                ml='.5em'
                alignSelf="center"
                >
                    <Text>{text}</Text>
                </Box>
 */