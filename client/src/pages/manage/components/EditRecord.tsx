import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Button,
} from '@chakra-ui/react';

type EditRecordProps = {
    isOpen: boolean,
    onClose: (() => void),
}

const EditRecord = (props: EditRecordProps) => {
    const { isOpen, onClose } = props;

    return (
        <Modal 
         isOpen={isOpen} 
         onClose={onClose}
         motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit record</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    add edit form later
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditRecord;