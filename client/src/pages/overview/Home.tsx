import {Text, Heading, Flex, Grid, GridItem, Center, Icon, Box, Link, Image} from "@chakra-ui/react";
import { MdBakeryDining } from "react-icons/md";
import {ImGithub} from "react-icons/im";
import {useState} from "react";
import bread1 from '../../assets/bread1.jpeg';
import bread2 from '../../assets/bread2.jpeg';

// ../../../assets/

const Home = () => {
    const [randomImage, setRandomImage] = useState<number>(
        Math.floor(Math.random() * (2 - 1 + 1) + 1)
    )

    return (
        <Grid
            alignSelf='center'
            width='80%'
            height='80%'
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={8}
        >
            <GridItem colSpan={3} rowSpan={1} bg="brand.main" borderRadius="md" textAlign="center">
                <Flex height='100%' justifyContent='center' alignItems='center' flexDir='column' p={5}>
                    <Heading as='h1' fontSize='50px'>Panader.io</Heading>
                    <Icon as={ MdBakeryDining } h={38} w={38}/>
                </Flex>
            </GridItem>
            <GridItem colSpan={2} rowSpan={3} bg="brand.main" borderRadius="md">
                <Image
                    p={5}
                    src={bread2}
                    alt='some bread'
                />
            </GridItem>
            <GridItem colSpan={3} rowSpan={2} bg="brand.main" borderRadius="md">
                    <Box p={5}>
                        <Text >A database management software for all your small-batch, cottage, and micro bakery needs!</Text>

                        <Text mt={2}>This app lets the baker add, delete, and select records to keep track of customers, orders, products, recipes, ingredients.</Text>

                        <Text mt={2}>Tables include: Customer, Order, Product, LineItem, Recipe, and Ingredient.
                            Future tables: User, Business, Address, Supplier, Inventory</Text>

                        <Text mt={2} >The UI / frontend is a React app coded in TypeScript. The server / backend is a Spring Boot app coded in Java.</Text>

                        <Text mt={2}>The database is constructed in PostgreSQL and hosted on Heroku.</Text>

                        <Text mt={2}>Both the UI and server are bundled together and deployed as one .jar file using the maven frontend plugin.</Text>

                        <Text mt={8}>
                            <Link p={2} href='https://github.com/scottross123/microbakery-management-software'>
                                <Icon as={ ImGithub } />
                            </Link>
                            Created by Scott Ross
                        </Text>
                    </Box>
            </GridItem>
        </Grid>
    )
}

export default Home;