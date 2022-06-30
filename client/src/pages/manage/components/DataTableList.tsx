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
import { useFetch } from '../../../hooks/useFetch';
import { capitalize } from '../../../utils/capitalize';
import DataTableItem from './DataTableItem';
import DeleteRecord from './DeleteRecord';
import EditableItem from './EditableItem';
import {useDelete} from "../hooks/useDelete";
import {useLocation} from "react-router-dom";

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

    //const { data, loading, error } = useFetch('/get_attribute_types?table=order', {});

    const updateDeletable = async (id: typeof deletableId) => {
        setDeletableId(id)
        onToggle();
    }

    const updateEditable = (id: typeof editableId) => {
        setEditableId(id);
    }

    const cancelRef = useRef(null);

    console.log({'records': records?.[0]})
    console.log({'keys': Object.keys(records?.[0]!).map((key) => ( key))})

    return (
        <Table variant='simple'>
            <Thead>
                <Tr>
                    { (Object.keys(records?.[0]!)).slice(1).map((key) => (
                        <Td>{capitalize(key)}</Td>
                    ))}

                    <Td></Td>
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

            <DeleteRecord isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} deletableId={deletableId}/>
        </Table>
    )
}

export default DataTableList;