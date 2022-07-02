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
import { MutationFunction, useMutation, useQueryClient} from 'react-query';
import { useLocation } from "react-router-dom";
import {useDelete} from "../hooks/useDelete";

type DeleteRecordProps<FocusableElement> = {
    isOpen: boolean,
    onClose: (() => void),
    cancelRef: RefObject<FocusableElement>,
    deletableId: number | undefined,
}

const DeleteRecord = (props: DeleteRecordProps<HTMLButtonElement>) => {
    const { isOpen, onClose, cancelRef, deletableId } = props;

    let location = useLocation();
    let table = location.pathname.slice(1, -1);
    const { mutateAsync } = useDelete();

    const handleDeleteClick = async () => {
        await mutateAsync({
            table: table,
            id: deletableId!,
        })
        onClose();
    }

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
              Are you sure you want to delete this record?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDeleteClick} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}

export default DeleteRecord;