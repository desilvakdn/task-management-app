import React from "react";

interface SelectTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children:
    | React.ReactElement<HTMLOptionElement>
    | React.ReactElement<HTMLOptionElement>[];
}
interface SelectItemType extends React.OptionHTMLAttributes<HTMLOptionElement> {
  textValue: string;
}

const Select: React.FC<SelectTypes> = ({ children }) => {
  return <select className="appearance-none outline-none">{children}</select>;
};

const SelectItem: React.FC<SelectItemType> = ({ textValue, ...props }) => {
  return (
    <option value={textValue.toLowerCase()} {...props}>
      {textValue}
    </option>
  );
};

export { Select, SelectItem };
