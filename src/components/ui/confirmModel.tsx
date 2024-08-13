import { CloseCircle } from "iconsax-react";
import React from "react";

interface ConfirModelTypes {
  headline: string;
  body: string;
  canceltext?: string;
  actiontext: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModel = (props: ConfirModelTypes) => {
  return (
    <div className="relative flex max-w-[649px] flex-col gap-6">
      <label
        onClick={props.onCancel}
        htmlFor=""
        className="absolute right-0 cursor-pointer text-dark-300"
      >
        <CloseCircle size={20} />
      </label>
      <label htmlFor="" className="b2 font-semibold">
        {props.headline}
      </label>
      <label htmlFor="" className="b1">
        {props.body}
      </label>
      <div className="flex w-full flex-row items-center justify-end gap-3">
        <button
          onClick={props.onCancel}
          className="b1 rounded-lg border-1 border-solid border-dark-50 p-3 font-semibold transition-all hover:bg-dark-50"
        >
          {props.canceltext || "Cancel"}
        </button>
        <button
          onClick={props.onConfirm}
          className="b1 rounded-lg bg-danger-500 p-3 font-semibold text-white transition-all hover:brightness-90"
        >
          {props.actiontext}
        </button>
      </div>
    </div>
  );
};

export default ConfirmModel;
