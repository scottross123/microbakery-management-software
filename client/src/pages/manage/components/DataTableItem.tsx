import { IconButton, Stack, Td, Tooltip, Tr, } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { GiFountainPen, GiOpenBook, GiTrashCan } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

type DataTableItemProps = {
    record: { id: number, [key: string]: any },
    updateDisclosure: ((component: 'modal' | 'alert') => void),
    updateSelectedId: ((id: number) => void),
}

type ActionButton = {
    label: string,
    icon: ReactElement,
    component: 'modal' | 'alert' | 'detailPage'
}

const DataTableItem = (props: DataTableItemProps) => {
    const { record, updateDisclosure, updateSelectedId } = props;
    const navigate = useNavigate();

    const handleClick = (component: ActionButton['component']) => {
        component === 'detailPage' ? navigate('details') : updateDisclosure(component);
        updateSelectedId(record.id)
    }

    const actionButtons: ActionButton[] = [
        { label: 'Details', icon: <GiOpenBook />, component: 'detailPage' },
        { label: 'Edit', icon: <GiFountainPen  />, component: 'modal' },
        { label: 'Delete', icon: <GiTrashCan />, component: 'alert' },
    ];    

    return (
        <Tr>
            { Object.values(record).slice(1).map((value) => (
                <Td>{value}</Td>
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
                        </Tooltip>
                        </> )
                    })}
                </Stack>
            </Td>
        </Tr> 
    );
}

export default DataTableItem;