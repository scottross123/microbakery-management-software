import { Flex } from '@chakra-ui/react';

type DataDetailsProps = {
    selectedId: number
}

const DataDetails = (props: DataDetailsProps) => {
    const { selectedId } = props;

    return (
        <Flex
         justifyContent='center'
        >
            details for { selectedId }
        </Flex>
    )
}

export default DataDetails;