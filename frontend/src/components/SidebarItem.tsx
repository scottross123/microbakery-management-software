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
        <Flex>
            <Link>
                <Icon as={icon} fontSize="3xl" />
            </Link>

            <Link>
                <Text>{text}</Text>
            </Link>
        </Flex>
    )
}
