import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { ChevronDownIcon } from "lucide-react";
// @ts-ignore
import {
  DropdownButton,
  DropdownButtonIcon,
  DropdownContainer,
  DropdownMenu,
} from "./styledDropdown";
import { useDropdown } from "../../hooks/useDropdown";

type DropdownProps = PropsWithChildren<{
  children: ReactNode;
  text: string | ReactNode;
  width?: string;
}>;

export function Dropdown(props: DropdownProps) {
  const { text, width, children } = props;

  const { dropdownContainerRef, handleClose, handleToggle, isOpen } =
    useDropdown();

  const dropdownMenuRef = useRef<HTMLUListElement | null>(null);

  const [menuWidth, setMenuWidth] = useState(200);

  useEffect(() => {
    if (dropdownContainerRef.current) {
      setMenuWidth(dropdownContainerRef.current.offsetWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!isOpen || !dropdownMenuRef.current) return;

    const selectedItem = dropdownMenuRef.current.querySelector(
      '[data-dropdown-selected="true"]',
    ) as HTMLElement | null;

    if (!selectedItem) return;

    requestAnimationFrame(() => {
      selectedItem.scrollIntoView({
        block: "nearest",
      });
    });
  }, [isOpen, children]);

  return (
    <DropdownContainer $width={width} ref={dropdownContainerRef}>
      <DropdownButton $isOpen={isOpen} role="button" onClick={handleToggle}>
        {text}
        <DropdownButtonIcon $isOpen={isOpen} className="dropdwon-button-icon">
          <ChevronDownIcon />
        </DropdownButtonIcon>
      </DropdownButton>
      <DropdownMenu
        $menuWidth={`${menuWidth}px`}
        $isOpen={isOpen}
        onClick={handleClose}
        ref={dropdownMenuRef}
      >
        {children}
      </DropdownMenu>
    </DropdownContainer>
  );
}
