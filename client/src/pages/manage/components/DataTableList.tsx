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
import { capitalize } from '../../../utils/capitalize';
import DataTableItem from './DataTableItem';

type DataTableListProps<Object> = {
    records: Array<Object>
}

const DataTableList = (props: DataTableListProps<Object>) => {
    const { records } = props;
    console.log(capitalize('bruh'))

    return (
        <Table variant='simple'>
            <Thead>
                <Tr>
                    { Object.keys(records[0]).slice(1).map((key) => (
                        <Td>{capitalize(key)}</Td>
                    ))}

                    <Td></Td>
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