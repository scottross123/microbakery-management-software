import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
  } from '@chakra-ui/react'
import { RefObject } from 'react';

type DeleteRecordProps<FocusableElement> = {
    isOpen: boolean,
    onClose: (() => void),
    cancelRef: RefObject<FocusableElement>,
    selectedId: number | undefined,
}

const DeleteRecord = (props: DeleteRecordProps<HTMLButtonElement>) => {
    const { isOpen, onClose, cancelRef, selectedId } = props;

    return (
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Record
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete record id { selectedId }? You can't recover this record once it's been deleted.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}

export default DeleteRecord;