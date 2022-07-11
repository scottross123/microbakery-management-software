import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm} from "react-hook-form";
import { useAddRecord } from "../hooks/useAddRecord";
import { Customer } from "../models";

export const AddCustomerForm = () => {
    const { handleSubmit, register } = useForm<Customer>();
    const { mutateAsync } = useAddRecord('customer');

    const onSubmit: SubmitHandler<Customer> = (data: Customer) => {
        console.log({...data, 'orders': []});
        mutateAsync({
            table: 'customer',
            model: {...data, 'orders': []},
        })
    }

    return (
        <form id ="add-record-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel htmlFor='first-name'>First name</FormLabel>
                <Input
                    focusBorderColor="primary.main"
                    placeholder='First name...'
                    {...register('firstName', {
                        required: 'This is required',
                    })}
                />
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='last-name'>Last name</FormLabel>
                <Input
                    focusBorderColor="primary.main"
                    placeholder='Last name...'
                    {...register('lastName', {
                        required: 'This is required',
                    })}
                />
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='phone-number'>Phone number</FormLabel>
                <Input
                    focusBorderColor="primary.main"
                    placeholder='Phone number...'
                    {...register('phoneNumber', {
                        required: 'This is required',
                    })}
                />
            </FormControl>
        </form>
    )
}