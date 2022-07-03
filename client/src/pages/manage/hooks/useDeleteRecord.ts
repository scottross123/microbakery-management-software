import { useMutation, UseMutationResult, useQueryClient } from "react-query";

type UseDeleteRecordProps = {
    table: string,
    id: number,
}

const deleteRecord = async (props: UseDeleteRecordProps): Promise<Response> => {
    const { table, id } = props;

    const response = await fetch(`/api/v1/${table}/${id}`,
        {
            method: 'DELETE',
        });
    if (!response.ok) throw new Error('Uh-oh, there was an error deleting data from the server');
    return response;
}

export const useDeleteRecord = (table: string): UseMutationResult<Response, unknown, UseDeleteRecordProps> => {
    const queryClient = useQueryClient();

    return useMutation(
        'deleteRecord',
        deleteRecord,
        {
        onMutate: async () => {
            await queryClient.cancelQueries(['records', table]);
            const previousRecords = queryClient.getQueryData(['records', table])
            console.log('mutated')
            return { previousRecords }
        },
        onSuccess: () => {
            console.log('succeded')
        },
        onError: (err, context: any) => {
            console.log(err)
            queryClient.setQueryData(['records', table], context.previousRecords)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['records', table]);
            console.log('settled')
        }
    });

}