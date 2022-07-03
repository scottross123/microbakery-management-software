import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddCustomerForm = () => {

    return (
        <form>
            <FormControl>
                <FormLabel htmlFor='first-name'>First name</FormLabel>
                <Input  placeholder='First name...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='last-name'>Last name</FormLabel>
                <Input  placeholder='Last name...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='phone-number'>Phone number</FormLabel>
                <Input  placeholder='Phone number...'/>
            </FormControl>
        </form>
    )
}