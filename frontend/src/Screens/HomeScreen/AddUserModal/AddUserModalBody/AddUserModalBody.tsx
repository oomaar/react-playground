import { XIcon } from "lucide-react";
import { ModalHeader } from "../../../../components/Modal/ModalHeader/ModalHeader";
import { ModalTitle } from "../../../../components/Modal/ModalTitle/ModalTitle";
import { ModalFooter } from "../../../../components/Modal/ModalFooter/ModalFooter";
import { Button } from "../../../../components/Button/Button";

type Props = {
  onClose: VoidFunction;
};

export function AddUserModalBody({ onClose }: Props) {
  return (
    <>
      <ModalHeader>
        <ModalTitle>Add User</ModalTitle>
        <XIcon height={25} width={25} />
      </ModalHeader>
      <div>body</div>
      <ModalFooter>
        <Button variant="Ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="Primary">Confirm</Button>
      </ModalFooter>
    </>
  );
}
