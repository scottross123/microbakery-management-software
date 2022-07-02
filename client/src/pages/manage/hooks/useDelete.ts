import { useMutation, UseMutationResult, useQueryClient } from "react-query";

type DeleteRecord = {
    table: string,
    id: number,
}

const deleteRecord = async ({ table, id }: DeleteRecord): Promise<Response> => {
    const response = await fetch(`/api/v1/${table}/${id}`,
        {
            method: 'DELETE',
        })
    return response;
}

export const useDelete = (): UseMutationResult<Response, unknown, DeleteRecord> => {
    const queryClient = useQueryClient();

    return useMutation(
        'deleteRecord',
        deleteRecord,
        {
        onMutate: async () => {
            await queryClient.cancelQueries(['records', 'customer']);
            const previousRecords = queryClient.getQueryData(['records', 'customer'])
            console.log('mutated')
            return { previousRecords }
        },
        onSuccess: () => {
            console.log('succedded')
        },
        onError: (err, context: any) => {
            console.log(err)
            queryClient.setQueryData(['records', 'customer'], context.previousRecords)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['records', 'customer']);
            console.log('settled')
        }
    });

}