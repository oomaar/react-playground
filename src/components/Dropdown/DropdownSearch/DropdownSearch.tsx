import { InputHTMLAttributes, useCallback, useRef } from "react";
import {
  DropdownSearchInput,
  DropdownSearchInputContainer,
  DropdownSearchLI,
} from "./styledDropdownSearch";
import { SearchIcon } from "lucide-react";

type DropdownSearchProps = InputHTMLAttributes<HTMLInputElement>;

export function DropdownSearch(props: DropdownSearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFocus = useCallback(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  return (
    <DropdownSearchLI>
      <DropdownSearchInputContainer>
        <div>
          <SearchIcon onClick={onFocus} width={20} height={20} />
        </div>
        <DropdownSearchInput
          {...props}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </DropdownSearchInputContainer>
    </DropdownSearchLI>
  );
}
