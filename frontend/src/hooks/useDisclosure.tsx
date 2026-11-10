import { useState } from "react";

export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((value) => !value);

  return { isOpen, open, close, toggle };
}
