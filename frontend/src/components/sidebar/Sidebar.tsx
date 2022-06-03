import {
     Flex, 
     Heading, 
     Divider, 
     Text,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon, 
} from "@chakra-ui/react"

import { 
    GiPerson, 
    GiShoppingCart, 
    GiSlicedBread, 
    GiWheat, 
    GiWaterMill, 
    GiHouse,
    GiShop,
    GiPieChart,
    GiCalendar,

} from "react-icons/gi";
import { SidebarItem } from "./SidebarItem";
import './sidebar.css';

export const Sidebar = () => {

    return (
        <Flex
         backgroundColor='green.50'
         className="sidebar"
         as="nav"
         w="15%"
         pos="sticky"
         flexDir="column"
         alignItems="center"
         justifyContent="space-between"
         borderRight='1px'
        >
            <Flex
             flexDir="column"
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
                <Accordion>
                    <AccordionItem>
                        <AccordionButton>
                            <Text
                            alignSelf="center"
                            letterSpacing="tight"
                            >
                                overiew
                            </Text>
                        </AccordionButton>

                        <AccordionPanel>
                            <SidebarItem icon={GiHouse} text='Home'/>
                            <SidebarItem icon={GiPieChart} text='Dashboard'/>
                            <SidebarItem icon={GiShop} text='Business'/>
                            <SidebarItem icon={GiCalendar} text='Calendar'/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'olivedrab', color: 'white' }}>
                            <Text
                            alignSelf="center"
                            letterSpacing="tight"
                            >
                                manage
                            </Text>
                        </AccordionButton>

                        <AccordionPanel>
                            <SidebarItem icon={GiPerson} text='Customers'/>
                            <SidebarItem icon={GiShoppingCart} text='Orders'/>
                            <SidebarItem icon={GiSlicedBread} text='Products'/>
                            <SidebarItem icon={GiWheat} text='Ingredients'/>
                            <SidebarItem icon={GiWaterMill} text='Suppliers'/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Text
                            alignSelf="center"
                            letterSpacing="tight"
                            >
                                reports
                            </Text>
                        </AccordionButton>

                        <AccordionPanel>
                            <SidebarItem icon={GiPerson} text='Customers'/>
                            <SidebarItem icon={GiShoppingCart} text='Orders'/>
                            <SidebarItem icon={GiSlicedBread} text='Products'/>
                            <SidebarItem icon={GiWheat} text='Ingredients'/>
                            <SidebarItem icon={GiWaterMill} text='Suppliers'/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Text
                            alignSelf="center"
                            letterSpacing="tight"
                            >
                                settings
                            </Text>
                        </AccordionButton>

                        <AccordionPanel>
                            <SidebarItem icon={GiPerson} text='Customers'/>
                            <SidebarItem icon={GiShoppingCart} text='Orders'/>
                            <SidebarItem icon={GiSlicedBread} text='Products'/>
                            <SidebarItem icon={GiWheat} text='Ingredients'/>
                            <SidebarItem icon={GiWaterMill} text='Suppliers'/>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            
            </Flex>
            
        </Flex>
    )
}

export default Sidebar;