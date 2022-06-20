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
import React from 'react';
import { useQuery } from 'react-query';

type DataTableProps = {
    table: string;
}

type Record = {
    id: number,
    [key: string]: any
}

const fetchRecords = async (table: string): Promise<Record[]> => {
    const response = await fetch(`/get_records?table=${table}`)
    return response.json();
}

const DataTable = (props: DataTableProps) => {
    const { table } = props;
  
    const { data, isLoading, error } = useQuery<Record[], Error>('records', () => fetchRecords(table));

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