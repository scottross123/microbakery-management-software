import {
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useTheme, Spacer, Icon,
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
import {MdBakeryDining} from "react-icons/md";

type PanelItem = {
    icon: IconType,
    text: string,
}

const items: Array<PanelItem> = [
    { icon: GiHouse, text: 'home' },
    //{ icon: GiPieChart, text: 'dashboard' },
    { icon: GiShop, text: 'business' },
    { icon: GiThreeFriends, text: 'customers' },
    { icon: GiShoppingCart, text: 'orders' },
    { icon: GiSlicedBread, text: 'products' },
    { icon: GiFlour, text: 'ingredients' },
    //{ icon: GiWoodenCrate, text: 'inventory' },
    //{ icon: GiSettingsKnobs, text: 'options' },
    //{ icon: GiExitDoor, text: 'logout' },
];
export const Sidebar = () => {

    return (

            <Flex
                className="sidebar"
                background='brand.main'
                flexDir="column"
                width='100%'
                height='90%'
                justifyContent="center"
                alignItems="center"
                w="10%"
                h="100vh"
                pos="sticky"
            >
                <Flex justifyContent='center' alignItems='center' flexDir='column' p={5}>
                    <Heading as='h1' fontSize='20px' fontFamily='IBM Plex Mono'>Panader.io</Heading>
                    <Icon as={ MdBakeryDining } h={5} w={5}/>
                </Flex>

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

    )
}

export default Sidebar;
