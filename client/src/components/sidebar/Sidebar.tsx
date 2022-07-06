import {
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useTheme, Spacer,
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
import SidebarItem from "./SidebarItem";
import { IconType } from 'react-icons';
import { } from '../../pages/exports';
import './sidebar.css';

type PanelItem = {
    icon: IconType,
    text: string,
}

const items: Array<PanelItem> = [
    { icon: GiHouse, text: 'home' },
    { icon: GiPieChart, text: 'dashboard' },
    { icon: GiShop, text: 'business' },
    { icon: GiThreeFriends, text: 'customers' },
    { icon: GiShoppingCart, text: 'orders' },
    { icon: GiSlicedBread, text: 'products' },
    { icon: GiFlour, text: 'ingredients' },
    { icon: GiWoodenCrate, text: 'inventory' },
    { icon: GiSettingsKnobs, text: 'options' },
    { icon: GiExitDoor, text: 'logout' },
];
export const Sidebar = () => {

    return (
        <Flex
         className="sidebar-wrapper"
         w="15%"
         h="100vh"
         pos="sticky"
         justifyContent="center"
         alignItems="center"
        >
            <Flex
                className="sidebar"
                background='brand.main'
                flexDir="column"
                width='50%'
                height='90%'
                justifyContent="center"
                alignItems="center"
                borderRadius="30px"
            >
                <Flex
                    className="sidebar-items"
                    flexDir="column"
                    as="nav"
                    w='100%'
                    height='90%'
                    justifyContent='space-around'
                >
                    { items.map((item) =>
                        <SidebarItem icon={item.icon} text={item.text}/>
                    )}

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sidebar;
/*
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
                    Panader.io
                </Heading>
            </Flex>
 */