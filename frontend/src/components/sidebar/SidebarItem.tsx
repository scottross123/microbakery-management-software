import { Flex, Link, Icon, Text } from "@chakra-ui/react";
import { IconType } from 'react-icons';

type SidebarItemProps = {
    icon: IconType;
    text: string;
}

export const SidebarItem = (props : SidebarItemProps) => {
    const { icon } = props;
    const { text } = props;

    return (
        <Flex 
         className='sidebar-item'
         _hover={{ textDecor: 'none', color: 'olivedrab' }}
         justifyContent="center"
         w="100%"
         >
            <Link alignSelf="center">
                <Icon as={icon} fontSize="3xl" />
            </Link>

            <Link 
             textDecoration='none' 
             ml='.5em'
             alignSelf="center" 
            >
                <Text>{text}</Text>
            </Link>
        </Flex>
    )
}
