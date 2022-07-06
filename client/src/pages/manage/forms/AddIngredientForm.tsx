import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddIngredientForm = () => {

    return (
        <form>
            <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input focusBorderColor="primary.main" placeholder='Enter name...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Input focusBorderColor="primary.main" placeholder='Enter description...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='cost'>Cost</FormLabel>
                <Input focusBorderColor="primary.main" placeholder='Enter cost...'/>
            </FormControl>
        </form>
    )
}