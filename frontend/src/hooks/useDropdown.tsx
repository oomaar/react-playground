import { useEffect, useRef, useState } from "react";

export function useDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((state) => !state);

  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listner = (event: MouseEvent | TouchEvent) => {
      const el = dropdownContainerRef.current;
      if (!el || el.contains(event.target as Node)) return;
      handleClose();
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, []);

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
    dropdownContainerRef,
  };
}
