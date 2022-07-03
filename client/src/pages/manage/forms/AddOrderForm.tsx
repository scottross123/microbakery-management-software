import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export const AddOrderForm = () => {

    return (
        <form>
            <FormControl>
                <FormLabel htmlFor='order-time'>Order time</FormLabel>
                <Input  placeholder='im gonna make this a date picker later'/>
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='pickup-time'>Pickup time</FormLabel>
                <Input  placeholder='im gonna make this a date picker later'/> {/* date picker */}
            </FormControl>

            <FormControl mt={3}>
                <FormLabel htmlFor='orderer'>Customer</FormLabel>
                <Input  placeholder='dropdown will all customers'/>
            </FormControl>
        </form>
    )
}