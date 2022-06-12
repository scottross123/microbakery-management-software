import { Button, IconButton, Stack, Td, Tooltip, Tr, useDisclosure } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';
import { GiFountainPen, GiOpenBook, GiTrashCan } from 'react-icons/gi';
import EditRecord from './EditRecord';
import DeleteRecord from './DeleteRecord';

type DataTableItemProps = {
    record: Object,
    updateDisclosure: ((component: 'modal' | 'alert') => void),
}

type ActionButton = {
    label: string,
    icon: ReactElement,
    component: 'modal' | 'alert' | 'detailPage'
}

const DataTableItem = (props: DataTableItemProps) => {
    const { record, updateDisclosure } = props;

    const handleClick = (component: ActionButton['component']) => {
        component === 'detailPage' ? 'do other shit' : updateDisclosure(component);
    }

    const actionButtons: ActionButton[] = [
        { label: 'Details', icon: <GiOpenBook />, component: 'detailPage' },
        { label: 'Edit', icon: <GiFountainPen  />, component: 'modal' },
        { label: 'Delete', icon: <GiTrashCan />, component: 'alert' },
    ];    

    return (
        <Tr>
            { Object.values(record).slice(1).map((value) => (
                <Td>{ value }</Td>
            ))}

            <Td>
                <Stack direction='row' spacing={4} align='center'>
                    { actionButtons.map(({ label, icon, component }: ActionButton ) => {
                        return ( <>
                        <Tooltip hasArrow label={label} placement='top'>
                            <IconButton 
                            aria-label={label} 
                            variant='ghost' 
                            icon={icon} 
                            fontSize="3xl"
                            onClick={() => handleClick(component)} 
                            />
                     ;   </Tooltip>

                        </> )
                    })}
                </Stack>
            </Td>
        </Tr> 
    );
}

export default DataTableItem;