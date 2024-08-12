import TextArea from "@/components/common/textArea";
import React from "react";
import { twMerge } from "tailwind-merge";

const Description = ({
  description,
  changeDescription,
}: {
  description: string;
  changeDescription: (value: string) => void;
}) => {
  return (
    <TextArea
      value={description}
      onChange={(e) => changeDescription(e.target.value)}
    />
  );
};

export default Description;
