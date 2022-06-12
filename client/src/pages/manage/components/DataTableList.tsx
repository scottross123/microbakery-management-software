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
import EditRecord from './EditRecord';

type DataTableListProps<Object> = {
    records: Array<{ id: number, [key: string]: any }>
}

const DataTableList = (props: DataTableListProps<Object>) => {
    const { records } = props;

    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal, onToggle: onToggleModal } = useDisclosure();
    const { isOpen: isOpenAlert, onOpen: onOpenAlert, onClose: onCloseAlert, onToggle: onToggleAlert } = useDisclosure();

    const [ selectedId, setSelectedId ] = useState<number | undefined>();

    const updateDisclosure = (component: 'modal' | 'alert') => {
        component === 'modal' ? onToggleModal() : onToggleAlert();
    }

    const updateSelctedId = (id: number) => {
        setSelectedId(id);
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
                    <DataTableItem record={record} updateDisclosure={updateDisclosure} updateSelectedId={updateSelctedId} />
                ))}
            </Tbody>

            <EditRecord isOpen={isOpenModal} onClose={onCloseModal}/>
            <DeleteRecord isOpen={isOpenAlert} onClose={onCloseAlert} cancelRef={cancelRef} selectedId={selectedId}/>
        </Table>
    )
}

export default DataTableList;