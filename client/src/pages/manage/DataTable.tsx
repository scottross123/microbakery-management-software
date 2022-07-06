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
                <Box
                    width="90%"
                >
                    <Heading mt={9}>
                        {capitalize(model) + 's'}
                    </Heading>

                    <Flex
                        mt={3}
                        justifyContent="space-between"
                    >
                        <Box borderRadius="md" width="80%">
                            <InputGroup>
                                <InputLeftElement children={<GoSearch />} />
                                <Input
                                    width="100%"
                                    placeholder='Search...'
                                    focusBorderColor="primary.main"
                                    borderColor='primary.main'
                                    _hover={{ bg: 'brand.main' }}
                                />
                            </InputGroup>
                        </Box>
                        <Box>
                            <Menu isLazy>
                                <MenuButton
                                    as={Button}
                                    variant='outline'
                                    rightIcon={<GoTriangleDown />}
                                    _hover={{ bg: 'brand.main' }}
                                    _expanded={{ bg: 'brand.main' }}
                                    _focus={{ bg: 'brand.main' }}
                                    focusBorderColor="primary.main"
                                    borderColor='primary.main'
                                >
                                    Sort
                                </MenuButton>
                                <MenuList borderColor='primary.main' backgroundColor='brand.800' >
                                    <MenuItem _focus={{ bg: 'brand.700' }}>Ascending order</MenuItem>
                                    <MenuItem _hover={{ bg: 'brand.700' }}>Descending order</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Box justifySelf='center' >
                            <Button
                                variant='outline'
                                colorScheme='primary.main'
                                aria-label={table}
                                rightIcon={<GoPlus />}
                                onClick={handleAddClick}
                                borderColor='primary.main'
                                _hover={{ bg: 'brand.main' }}
                                _focus={{ bg: 'brand.main' }}
                            >
                                {capitalize(model)}
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