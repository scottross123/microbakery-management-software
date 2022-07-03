import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddIngredientForm = () => {

    return (
        <form>
            <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input  placeholder='Enter name...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Input  placeholder='Enter description...'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='cost'>Cost</FormLabel>
                <Input  placeholder='Enter cost...'/>
            </FormControl>
        </form>
    )
}