import {Box, Center, Flex, Grid, GridItem, Heading, Icon, Image, Link, Text} from "@chakra-ui/react";
import cat from '../../assets/cat/cat.jpeg';

const Business = () => {
    return (
        <Grid
            alignSelf='center'
            width='80%'
            height='80%'
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={8}
        >
            <GridItem colSpan={5} bg="brand.main" borderRadius="md" textAlign="center" >
                <Center height={'100%'}>
                    <Heading fontSize='100px' fontFamily='Abril Fatface' >
                        Black Cat Bakery
                    </Heading>
                </Center>
            </GridItem>
            <GridItem colSpan={3} rowSpan={2} bg="brand.main" borderRadius="md">
                <Text p={2}>
                    This small batch bakery specializes in sourdough / natural leavened breads and pastries, as well as using
                    whole grains and local ingredients. Open Tuesday to Friday from 7am to 4pm.
                </Text>
                <Text p={2}>
                    4933 Trymore Road, <br />
                    Russell, <br />
                    Georgia, <br />
                    56169 <br />
                </Text>
            </GridItem>
            <GridItem colSpan={2} rowSpan={2} bg="brand.main" borderRadius="md">
                <Center height={'100%'}>
                    <Image
                        p={2}
                        src={cat}
                        alt='koi'
                        maxHeight='100%'
                        maxWidth='100%'
                    />
                </Center>
            </GridItem>
        </Grid>
    );
}

export default Business;

/*
*  placeholder text for now. in the future will come the database. maybe
*
* */