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
    useDisclosure, Box, Input,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { capitalize } from '../../../utils/capitalize';
import DataTableItem from './DataTableItem';
import DeleteRecord from './DeleteRecord';
import EditableItem from './EditableItem';
import { useLocation } from "react-router-dom";

type DataTableListProps<Object> = {
    records: Array<{ id: number, [key: string]: any }> | undefined
}

type selectedId = {
    id: number,
    editing: boolean,
}

const DataTableList = (props: DataTableListProps<Object>) => {
    const { records } = props;

    let location = useLocation();
    let table = location.pathname.slice(1, -1);

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const [ deletableId, setDeletableId ] = useState<number | undefined>();
    const [ editableId, setEditableId ] = useState<number | undefined>();

    const updateDeletable = async (id: typeof deletableId) => {
        setDeletableId(id)
        onToggle();
    }

    const updateEditable = (id: typeof editableId) => {
        setEditableId(id);
    }

    const cancelRef = useRef(null);

    return (
        <Box mt={3} border="1px solid" borderColor="gray.100" borderRadius="md">
            <Table variant='simple' size='sm'>
                <Thead>
                    <Tr fontWeight='semibold'>
                        { (Object.keys(records?.[0]!)).slice(1).map((key) => (
                            <Td>{capitalize(key)}</Td>
                        ))}

                        <Td>Actions</Td>
                    </Tr>
                </Thead>

                <Tbody>
                    { records?.map((record) => (
                        editableId === record.id ? (
                            <EditableItem record={record}  updateEditable={updateEditable} types={[]}/>
                        ) : (
                            <DataTableItem record={record} updateEditable={updateEditable} updateDeletable={updateDeletable} />
                        )
                    ))}
                </Tbody>

                <Tfoot>
                    <Tr fontWeight='semibold'>
                        { (Object.keys(records?.[0]!)).slice(1).map((key) => (
                            <Td>{capitalize(key)}</Td>
                        ))}

                        <Td>Actions</Td>
                    </Tr>
                </Tfoot>

                <DeleteRecord isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} deletableId={deletableId}/>
            </Table>
        </Box>
    )
}

export default DataTableList;