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
import {useDeleteRecord} from "../hooks/useDeleteRecord";

type DeleteRecordProps<FocusableElement> = {
    isOpen: boolean,
    onClose: (() => void),
    cancelRef: RefObject<FocusableElement>,
    deletableId: number | undefined,
}

const DeleteRecordAlert = (props: DeleteRecordProps<HTMLButtonElement>) => {
    const { isOpen, onClose, cancelRef, deletableId } = props;

    let location = useLocation();
    let table = location.pathname.slice(1, -1);
    const { mutateAsync } = useDeleteRecord(table);

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
          <AlertDialogContent backgroundColor="brand.main">
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Record
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this record?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button variant='outline' ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='outline' colorScheme='red' onClick={handleDeleteClick} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}

export default DeleteRecordAlert;