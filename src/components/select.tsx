import { useState } from "react";
import IconChevronDown from "../assets/icons/chevron-down";
import { OptionType } from "../features/select/select-page";

type SelectProps = {
  options: OptionType[];
  onChange: (option: OptionType) => void;
  placeholder?: string;
  defaultValue?: OptionType;
};

const Select = ({
  options,
  onChange,
  placeholder = "Select an option",
  defaultValue,
}: SelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<OptionType | null>(
    defaultValue ? defaultValue : null
  );

  return (
    <div className="select">
      <div
        className={`select__action ${isActive ? "isActive" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {activeOption ? activeOption.label : placeholder}
        <IconChevronDown />
      </div>
      {isActive && (
        <div className="select__list">
          {options.map((option) => {
            return (
              <div
                key={option.value}
                className="select__list__item"
                onClick={() => {
                  onChange(option);
                  setActiveOption(option);
                  setIsActive(false);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Select;
