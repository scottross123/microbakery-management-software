import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

type DataTableItemProps = {
    record: Object;
}

const DataTableItem = (props: DataTableItemProps) => {
    const { record } = props;

    return (
        <Tr>
            { Object.values(record).map((value) => (
                <Td>{ value }</Td>
            ))}
        </Tr> 
    );
}

export default DataTableItem;