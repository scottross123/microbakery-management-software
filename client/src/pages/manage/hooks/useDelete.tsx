import {useMutation, UseMutationResult, useQueryClient} from "react-query";

export const useDelete: any = async () => {
    const queryClient = useQueryClient();

    const deleteRecord = async ({ table, id }: any) => {
        const response = await fetch(`/api/v1/${table}/${id}`,
            {
                method: 'DELETE',
            })
        return response;
    }

    const mutation = useMutation<any, Error>(
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
            alert('yay record removed');
            console.log('succedded')
        },
        onError: (err, context: any) => {
            console.log(err)
            queryClient.setQueryData(['records', 'customer'], context.previousRecords)
            alert('oh fuck something went wrong');
        },
        onSettled: () => {
            queryClient.invalidateQueries(['records', 'customer']);
            console.log('settled')
        }
    });

    return mutation
}