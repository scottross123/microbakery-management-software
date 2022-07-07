import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddProductForm = () => {

    // @ts-ignore
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
                    <FormLabel htmlFor='price'>Price</FormLabel>
                    <Input focusBorderColor="primary.main" placeholder='Enter price...'/>
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor='recipe'>Recipe</FormLabel>
                    <Input focusBorderColor="primary.main" placeholder='Drop down menu for recipes or option to create new recipe'/>
                </FormControl>
        </form>
    )
}