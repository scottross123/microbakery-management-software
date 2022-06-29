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
import { useFetch } from '../../hooks/useFetch';
import DataTableList from './components/DataTableList';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {useLocation} from "react-router-dom";

type Record = {
    id: number,
    [key: string]: any
}

const fetchRecords = async (table: string): Promise<Record[]> => {
    const response = await fetch(`/api/v1/${table}`)
    return response.json();
}

const DataTable = () => {
    let location = useLocation();
    let table = location.pathname.slice(1, -1);

    const { data, isLoading, error } = useQuery<any, Error>(['records', table], () => fetchRecords(table));

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