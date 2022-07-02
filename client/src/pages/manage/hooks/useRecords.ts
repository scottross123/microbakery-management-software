import { useQuery, UseQueryResult } from "react-query";

type Record = {
    id: number,
    [key: string]: any
}

const fetchRecords = async (table: string): Promise<Record[]> => {
    const response = await fetch(`/api/v1/${table}`)
    return response.json();
}

export const useRecords = (table: string): UseQueryResult<Record[], Error> => {
    return useQuery<Record[], Error>(
        ['records', table],
        () => fetchRecords(table),
    )
}