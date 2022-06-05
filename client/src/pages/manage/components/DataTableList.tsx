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
  } from '@chakra-ui/react';
import DataTableItem from './DataTableItem';

type DataTableListProps<Object> = {
    records: Array<Object>
}

const DataTableList = (props: DataTableListProps<Object>) => {
    const { records } = props;

    return (
        <Table variant='simple'>
            <Thead>
                <Tr>
                    { Object.keys(records[0]).map((key) => (
                        <Td>{ key }</Td>
                    ))}
                </Tr>
            </Thead>

            <Tbody>
                { records.map((record) => (
                    <DataTableItem record={record} />
                ))}
            </Tbody>
        </Table>
    )
}

export default DataTableList;