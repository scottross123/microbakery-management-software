import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { Customer, Order, Product, Ingredient } from "../models";

type useAddRecordProps = {
    table: string,
    model: Customer | Order | Product | Ingredient,
}

const addRecord = async ({ table, model }: useAddRecordProps): Promise<Response> => {
    const response = await fetch(`/api/v1/${table}`,
        {
            method: 'ADD',
            body: JSON.stringify({
                ...model,
            })
        });
    if (!response.ok) throw new Error('Uh-oh, there was an error adding data to the server');
    return response;
}

export const useAddRecord = (table: string): UseMutationResult<Response, unknown, useAddRecordProps> => {
    const queryClient = useQueryClient();

    return useMutation(
        'addRecord',
        addRecord,
        {
            onMutate: async () => {
                await queryClient.cancelQueries(['records', table]);
                const previousRecords = queryClient.getQueryData(['records', table])
                console.log('mutated')
                return { previousRecords }
            },
            onSuccess: () => {
                console.log('succeeded')
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