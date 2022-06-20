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

type DataTableProps = {
    table: string;
}

const DataTable = (props: DataTableProps) => {
    const { table } = props;
    const url: string = '/get_records?table=' + table;
    const { data, loading, error } = useFetch(url, {});

    error && console.log(error);
  
    return (
        <React.Fragment>
            { loading ? (
                <Loading />
            ) : ( 
            <TableContainer
             display='block'
            >
                <DataTableList records={data.records}/>
            </TableContainer>
            )}
        </React.Fragment>
    );
}

export default DataTable;