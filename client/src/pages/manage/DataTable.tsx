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
  } from '@chakra-ui/react'
import Loading from '../Loading';
import { useFetch } from '../../hooks/useFetch';
import DataTableList from './components/DataTableList';

type DataTableProps = {
    table: string;
}

const DataTable = (props: DataTableProps) => {
    const { table } = props;
    const url: string = '/get_records?table=' + table;
    const { data, loading, error } = useFetch(url, {});

    error && console.log(error);
  
    return (
        <Flex
        justifyContent='center'
        >
            { loading ? (
                <Loading />
            ) : ( 
            <TableContainer>
                <DataTableList records={data.records}/>
            </TableContainer>
            )}
        </Flex>
    );
}

export default DataTable;