import {
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Container,
    Input,
    HStack,
    Text,
    Spacer,
    Button,
    IconButton,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuList,
    MenuButton,
    MenuItem, Heading, useDisclosure
} from '@chakra-ui/react'
import Loading from '../Loading';
import { useRecords } from './hooks/useRecords';
import DataTableList from './components/DataTableList';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import {GoPlus, GoSearch, GoTriangleDown} from "react-icons/go";
import { capitalize } from '../../utils/capitalize';
import AddRecordModal from "./components/AddRecordModal";


const DataTable = () => {
    let location = useLocation();
    let table = location.pathname.slice(1, -1);

    const { data: records, isLoading, error } = useRecords(table);
    const {
        isOpen: isOpenAddModal,
        onClose: onCloseAddModal,
        onToggle: onToggleAddModal
    } = useDisclosure();
    const model = table as 'customer' | 'order' | 'product' | 'ingredient';

    const handleAddClick = () => {
        onToggleAddModal();
    }

    error && console.log(error);
  
    return (
        <React.Fragment>
            { isLoading ? (
                <Loading />
            ) : (
                <Box>
                    <Heading mt={9}>
                        {capitalize(table) + 's'}
                    </Heading>

                    <Flex mt={3}>
                        <Box border="1px solid" borderColor="gray.100" borderRadius="md">
                            <InputGroup>
                                <InputLeftElement children={<GoSearch color='gray.300' />} />
                                <Input placeholder='Search...' />
                            </InputGroup>
                        </Box>
                        <Spacer />
                        <Box>
                            <Menu>
                                <MenuButton as={Button} variant='outline' rightIcon={<GoTriangleDown />}>
                                    Sort
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Ascending order</MenuItem>
                                    <MenuItem>Descending order</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Spacer />
                        <Box justifySelf='center'>
                            <Button
                                variant='outline'
                                //colorScheme='brand.700'
                                aria-label={table}
                                rightIcon={<GoPlus />}
                                onClick={handleAddClick}
                            >
                                {model}
                            </Button>
                        </Box>
                    </Flex>

                    <TableContainer
                     display='block'
                    >
                        <DataTableList records={records} />
                    </TableContainer>
                </Box>
            )}
            <AddRecordModal isOpen={isOpenAddModal} onClose={onCloseAddModal} model={model} />
        </React.Fragment>
    );
}

export default DataTable;