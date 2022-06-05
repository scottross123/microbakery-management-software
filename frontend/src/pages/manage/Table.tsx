import { Flex } from "@chakra-ui/react";

type TableProps = {
    table: string;
}

const Table = (props: TableProps) => {
    const { table } = props;
  
    return (
        <Flex
        justifyContent='center'
        >
            { table }
        </Flex>
    );
}

export default Table;