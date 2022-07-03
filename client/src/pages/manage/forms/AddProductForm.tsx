import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddProductForm = () => {

    // @ts-ignore
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
                    <FormLabel htmlFor='price'>Price</FormLabel>
                    <Input  placeholder='Enter price...'/>
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor='recipe'>Recipe</FormLabel>
                    <Input  placeholder='Drop down menu for recipes or option to create new recipe'/>
                </FormControl>
        </form>
    )
}