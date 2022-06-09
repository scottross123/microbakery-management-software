import { Button, IconButton, Stack, Td, Tooltip, Tr } from '@chakra-ui/react';
import { detachClipboardStubFromView } from '@testing-library/user-event/dist/types/utils';
import React, { ReactElement } from 'react';
import { GiFountainPen, GiOpenBook, GiTrashCan } from 'react-icons/gi';

type DataTableItemProps = {
    record: Object;
}

type ActionButton = {
    label: string,
    icon: ReactElement,
}

const actionButtons: ActionButton[] = [
    { label: 'Details', icon: <GiOpenBook />},
    { label: 'Edit', icon: <GiFountainPen  />},
    { label: 'Delete', icon: <GiTrashCan />},
]

const DataTableItem = (props: DataTableItemProps) => {
    const { record } = props;

    return (
        <Tr>
            { Object.values(record).slice(1).map((value) => (
                <Td>{ value }</Td>
            ))}

            <Td>
                <Stack direction='row' spacing={4} align='center'>
                    { actionButtons.map(({ label, icon }: ActionButton ) => {
                        return <Tooltip hasArrow label={label} placement='top'>
                            <IconButton 
                            aria-label={label} 
                            variant='ghost' 
                            icon={icon} 
                            fontSize="3xl" 
                            />
                        </Tooltip>
                    })}
                </Stack>
            </Td>
        </Tr> 
    );
}

export default DataTableItem;