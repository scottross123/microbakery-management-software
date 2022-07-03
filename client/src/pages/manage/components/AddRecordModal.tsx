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
//import { Customer, Ingredient, Order, Product } from "../models";

type AddRecordModalProps = {
    isOpen: boolean,
    onClose: (() => void),
    model: 'customer' | 'order' | 'product' | 'ingredient';
}

const AddRecordModal = (props: AddRecordModalProps) => {
    const { isOpen, onClose, model } = props;

    const handleAddClick = () => {
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a new {model}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    oops, i havent implemented the form component yet 😬
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAddClick}>
                        Add!
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddRecordModal;