import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddCustomerForm = () => {

    return (
        <form>
            <FormControl>
                <FormLabel htmlFor='first-name'>First name</FormLabel>
                <Input focusBorderColor="primary.main" placeholder='First name...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='last-name'>Last name</FormLabel>
                <Input focusBorderColor="primary.main" placeholder='Last name...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='phone-number'>Phone number</FormLabel>
                <Input focusBorderColor="primary.main" placeholder='Phone number...'/>
            </FormControl>
        </form>
    )
}