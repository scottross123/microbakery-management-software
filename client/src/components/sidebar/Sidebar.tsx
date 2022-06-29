import {
     Flex, 
     Heading, 
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon,
     Box, 
     useTheme,
} from "@chakra-ui/react"

import { 
    GiHouse,
    GiShop,
    GiPieChart,
    GiCalendar,
    GiThreeFriends, 
    GiShoppingCart, 
    GiSlicedBread, 
    GiFlour, 
    GiWaterMill, 
    GiReceiveMoney,
    GiPayMoney,
    GiWoodenCrate,
    GiPerson,
    GiSettingsKnobs,
    GiEnvelope,
    GiExitDoor,

} from "react-icons/gi";
import { SidebarItem } from "./SidebarItem";
import { IconType } from 'react-icons';
import { } from '../../pages/exports';
import './sidebar.css';

type PanelItem = {
    icon: IconType,
    text: string,
}

const items: Record<string, Array<PanelItem>> = { 
    'overview': [
        { icon: GiHouse, text: 'home' },
        { icon: GiPieChart, text: 'dashboard' },
        { icon: GiShop, text: 'business' },
        { icon: GiCalendar, text: 'calendar' },
    ],

    'manage': [
        { icon: GiThreeFriends, text: 'customers' },
        { icon: GiShoppingCart, text: 'orders' },
        { icon: GiSlicedBread, text: 'products' },
        { icon: GiFlour, text: 'ingredients' },
        //{ icon: GiWaterMill, text: 'suppliers' },
    ],

    'reports': [
        { icon: GiReceiveMoney, text: 'sales' },
        { icon: GiPayMoney, text: 'costs' },
        { icon: GiWoodenCrate, text: 'inventory' },
    ],

    'settings': [
        { icon: GiPerson, text: 'profile' },
        { icon: GiSettingsKnobs, text: 'options' },
        { icon: GiEnvelope, text: 'contact' },
        { icon: GiExitDoor, text: 'logout' },
    ],
};

export const Sidebar = () => {

    return (
        <Flex
         background='brand.main'
         className="sidebar"
         w="15%"
         h="100vh"
         pos="sticky"
         flexDir="column"
         justifyContent="flex-start"
         borderRight='1px'
        >
            <Flex
             flexDir="column"
             w='100%'
            >
                <Heading
                 mt={50}
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
             as="nav"
             w='100%'
            >
                <Accordion w='100%'>
                    { Object.entries(items).map((item, i) => 
                        <AccordionItem>
                            <AccordionButton _expanded={{ bg: 'main.700' }}>
                                <Box
                                alignSelf="center"
                                letterSpacing="tight"
                                w='100%'
                                >
                                    {item[0]}
                                </Box>   
                            </AccordionButton>

                        <AccordionPanel w='100%'>
                            {item[1].map(({ icon, text }: PanelItem) => {
                                return <SidebarItem icon={icon} text={text}/>
                            })}
                        </AccordionPanel>
                    </AccordionItem> 
                    )}
                </Accordion>
            
            </Flex>
            
        </Flex>
    )
}

export default Sidebar;