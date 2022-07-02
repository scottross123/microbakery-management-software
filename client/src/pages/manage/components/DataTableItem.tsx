import { IconButton, Stack, Td, Tooltip, Tr, } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { GiFountainPen, GiOpenBook, GiTrashCan } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

type DataTableItemProps = {
    record: { id: number, [key: string]: any },
    updateDeletable: ((id: number) => void),
    updateEditable: ((id: number) => void),
}

type ActionButton = {
    label: string,
    icon: ReactElement,
}

const DataTableItem = (props: DataTableItemProps) => {
    const { record, updateDeletable, updateEditable } = props;
    //const navigate = useNavigate();

    const activeStyle = {
        textDecor: 'none',
        bgColor: '#FFEFCA',
    }

    const handleClick = (component: ActionButton['label']) => {
        switch (component) {
            case 'Details':
                alert('oops, i havent implemented this feature yet 😬');
                break;        
            case 'Delete':
                updateDeletable(record.id)
                break;
            case 'Edit':
                updateEditable(record.id)
                break;
            default:
                throw new Error();
        }
    }

    const actionButtons: ActionButton[] = [
        { label: 'Details', icon: <GiOpenBook /> },
        { label: 'Edit', icon: <GiFountainPen  /> },
        { label: 'Delete', icon: <GiTrashCan /> },
    ];

    return (
        <Tr _hover={activeStyle}>
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