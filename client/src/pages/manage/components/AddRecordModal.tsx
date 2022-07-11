import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {AddCustomerForm} from "../forms/AddCustomerForm";
import {AddOrderForm} from "../forms/AddOrderForm";
import {AddProductForm} from "../forms/AddProductForm";
import {AddIngredientForm} from "../forms/AddIngredientForm";
//import { Customer, Ingredient, Order, Product } from "../models";

type AddRecordModalProps = {
    isOpen: boolean,
    onClose: (() => void),
    model: 'customer' | 'order' | 'product' | 'ingredient';
}

const AddRecordModal = (props: AddRecordModalProps) => {
    const { isOpen, onClose, model } = props;
    let form;

    switch (model) {
        case "customer":
            form = <AddCustomerForm />;
            break;
        case "order":
            form = <AddOrderForm />;
            break;
        case "product":
            form = <AddProductForm />;
            break;
        case "ingredient":
            form = <AddIngredientForm />;
            break;
        default:
            throw new Error('something went wrong ')

    }

    const handleAddClick = () => {
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor="brand.main">
                <ModalHeader>Add a new {model}!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {form}
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="outline" type='submit' form="add-record-form" onClick={handleAddClick}>
                        Add!
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddRecordModal;