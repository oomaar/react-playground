import { LiHTMLAttributes, PropsWithChildren } from "react";
import { DropdownItemLI } from "./styledDropdownItem";

type DropdownItemProps = PropsWithChildren<
  LiHTMLAttributes<HTMLLIElement> & {
    isDanger?: boolean;
    isSelected?: boolean;
  }
>;

export function DropdownItem(props: DropdownItemProps) {
  const { children, isDanger, isSelected } = props;

  return (
    <DropdownItemLI
      $isSelected={isSelected}
      $isDanger={isDanger}
      {...props}
      className={`dropdown-item ${
        isDanger
          ? "dropdown-item-danger"
          : isSelected
            ? "dropdown-item-selected"
            : ""
      }`}
    >
      {children}
    </DropdownItemLI>
  );
}
