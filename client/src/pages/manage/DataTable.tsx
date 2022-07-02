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
  } from '@chakra-ui/react'
import Loading from '../Loading';
import { useRecords } from './hooks/useRecords';
import DataTableList from './components/DataTableList';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from "react-router-dom";


const DataTable = () => {
    let location = useLocation();
    let table = location.pathname.slice(1, -1);

    const { data, isLoading, error } = useRecords('table')

    console.log(data);

    error && console.log(error);
  
    return (
        <React.Fragment>
            { isLoading ? (
                <Loading />
            ) : ( 
            <TableContainer
             display='block'
            >
                <DataTableList records={data} />
            </TableContainer>
            )}
        </React.Fragment>
    );
}

export default DataTable;