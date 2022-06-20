import { IconButton, Stack, Td, Tooltip, Tr, } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { GiSave, GiCancel, } from 'react-icons/gi';

type DataTableItemProps = {
    record: { id: number, [key: string]: any },
    updateEditable: ((id: number | undefined) => void),
}

type ActionButton = {
    label: 'Save' | 'Cancel',
    icon: ReactElement,
}

const DataTableItem = (props: DataTableItemProps) => {
    const { record, updateEditable } = props;

    const handleClick = (label: 'Save' | 'Cancel') => {
        console.log(label);
        updateEditable(undefined);
    }

    const actionButtons: ActionButton[] = [
        { label: 'Save', icon: <GiSave /> },
        { label: 'Cancel', icon: <GiCancel /> },
    ];    

    return (
        <Tr>
            { Object.values(record).slice(1).map((value) => (
                <Td>{value}</Td>
            ))}

            <Td>
                <Stack direction='row' spacing={4} align='center'>
                    { actionButtons.map(({ label, icon }: ActionButton ) => {
                        return ( <>
                        <Tooltip hasArrow label={label} placement='top'>
                            <IconButton 
                            aria-label={label} 
                            variant='ghost' 
                            icon={icon} 
                            fontSize="3xl"
                            onClick={() => handleClick(label)} 
                            />
                        </Tooltip>
                        </> )
                    })}
                </Stack>
            </Td>
        </Tr> 
    );
}

export default DataTableItem;