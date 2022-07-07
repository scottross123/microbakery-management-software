import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Td,
    useDisclosure, Box, Input,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import DataTableItem from './DataTableItem';
import DeleteRecordAlert from './DeleteRecordAlert';
import EditableItem from './EditableItem';
import { useLocation } from "react-router-dom";
import { camelCaseConverter } from '../../../utils/camelCaseConverter';

type DataTableListProps<Object> = {
    records: Array<{ id: number, [key: string]: any }> | undefined
}

const DataTableList = (props: DataTableListProps<Object>) => {
    const { records } = props;

    let location = useLocation();
    let table = location.pathname.slice(1, -1);

    const {
        isOpen: isOpenDeleteAlert,
        onOpen: onOpenDeleteAlert,
        onClose: onCloseDeleteAlert,
        onToggle: onToggleDeleteAlert
    } = useDisclosure();
    const [ deletableId, setDeletableId ] = useState<number | undefined>();
    const [ editableId, setEditableId ] = useState<number | undefined>();

    const updateDeletable = async (id: typeof deletableId) => {
        setDeletableId(id)
        onToggleDeleteAlert();
    }

    const updateEditable = (id: typeof editableId) => {
        setEditableId(id);
    }

    const cancelRef = useRef(null);

    const tableHeader =
        <Tr fontWeight='semibold'>
            { (Object.keys(records?.[0]!)).slice(1).map((key) => (
                <Td>{camelCaseConverter(key)}</Td>
            ))}

            <Td textAlign="center">Actions</Td>
        </Tr>

    return (
        <Box mt={3} border="1px solid" borderColor="primary.main" borderRadius="md">
            <Table variant='simple' size='sm'>
                <Thead>
                    {tableHeader}
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
                    {tableHeader}
                </Tfoot>

                <DeleteRecordAlert isOpen={isOpenDeleteAlert} onClose={onCloseDeleteAlert} cancelRef={cancelRef} deletableId={deletableId}/>
            </Table>
        </Box>
    )
}

export default DataTableList;