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
import {useMutation, useQueryClient} from 'react-query';
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
    const queryClient = useQueryClient();

    const deleteRecord = async () => {
        const response = await fetch(`/api/v1/${table}/${deletableId}`,
            {
                method: 'DELETE',
            })
        return response;
    }

    const mutation = useMutation<any, Error>(
        'deleteRecord',
        deleteRecord,
        {
            onMutate: async () => {
                await queryClient.cancelQueries(['records', 'customer']);
                const previousRecords = queryClient.getQueryData(['records', 'customer'])
                console.log('mutated')
                return { previousRecords }
            },
            onSuccess: () => {
                alert('yay record removed');
                console.log('succedded')
            },
            onError: (err, context: any) => {
                console.log(err)
                queryClient.setQueryData(['records', 'customer'], context.previousRecords)
                alert('oh fuck something went wrong');
            },
            onSettled: () => {
                queryClient.invalidateQueries(['records', 'customer']);
                console.log('settled')
            }
        });

    const handleDeleteClick = async () => {
        await mutation.mutateAsync()
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