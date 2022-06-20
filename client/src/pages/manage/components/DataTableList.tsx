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
    useDisclosure,
  } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { capitalize } from '../../../utils/capitalize';
import DataTableItem from './DataTableItem';
import DeleteRecord from './DeleteRecord';
import EditableItem from './EditableItem';

type DataTableListProps<Object> = {
    records: Array<{ id: number, [key: string]: any }>
}

type selectedId = {
    id: number,
    editing: boolean,
}

const DataTableList = (props: DataTableListProps<Object>) => {
    const { records } = props;

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const [ deletableId, setDeletableId ] = useState<number | undefined>();
    const [ editableId, setEditableId ] = useState<number | undefined>();

    const updateDeletable = (id: typeof deletableId) => {
        setDeletableId(id)
        onToggle();
    }

    const updateEditable = (id: typeof editableId) => {
        setEditableId(id);
    }

    const cancelRef = useRef(null);

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
                    editableId === record.id ? ( 
                        <EditableItem record={record}  updateEditable={updateEditable}/>
                    ) : (
                        <DataTableItem record={record} updateEditable={updateEditable} updateDeletable={updateDeletable} />
                    )
                ))}
            </Tbody>

            <DeleteRecord isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} deletableId={deletableId}/>
        </Table>
    )
}

export default DataTableList;