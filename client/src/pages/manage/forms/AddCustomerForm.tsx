import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const AddCustomerForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
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