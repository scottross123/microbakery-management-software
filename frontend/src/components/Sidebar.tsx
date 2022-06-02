import { Flex, VStack, Heading, Link, Icon, Text } from "@chakra-ui/react"
import { GiPerson, GiShoppingCart, GiSlicedBread, GiWheat, GiWaterMill } from "react-icons/gi";
import { SidebarItem } from "./SidebarItem";


export const Sidebar = () => {

    return (
        <Flex
         w="15%"
         pos="sticky"
         flexDir="column"
         alignItems="center"
         justifyContent="space-between"
        >
            <Flex
             flexDir="column"
             as="nav"
            >
                <Heading
                 mt={25}
                 mb={50}
                 alignSelf="center"
                 letterSpacing="tight"
                >
                    bakery
                </Heading>
            </Flex>

            <Flex
             flexDir="column"
             align="flex-start"
             justifyContent="center"
            >
                <SidebarItem icon={GiPerson} text='Customers'/>
                <SidebarItem icon={GiShoppingCart} text='Orders'/>
                <SidebarItem icon={GiSlicedBread} text='Products'/>
                <SidebarItem icon={GiWheat} text='Ingredients'/>
                <SidebarItem icon={GiWaterMill} text='Suppliers'/>
            </Flex>
        </Flex>
    )
}

export default Sidebar;