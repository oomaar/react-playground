import { Button } from "../../../components/Button/Button";
import { Modal } from "../../../components/Modal/Modal";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { AddUserModalBody } from "./AddUserModalBody/AddUserModalBody";

export function AddUserModal() {
  const { close, isOpen, open } = useDisclosure();

  return (
    <>
      <Button variant="Primary" onClick={open}>
        Add User
      </Button>
      <Modal width="700px" height="500px" isOpen={isOpen} onClose={close}>
        <AddUserModalBody key={Math.random()} onClose={close} />
      </Modal>
    </>
  );
}
