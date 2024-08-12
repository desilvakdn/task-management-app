"use client";
import React, { TextareaHTMLAttributes, useEffect, useRef } from "react";

const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props,
) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  function autoResize() {
    if (!ref.current) return;
    if (ref.current.style.maxHeight < ref.current.style.height) return;
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + 10 + "px";
  }

  useEffect(() => {
    if (ref && ref.current) {
      ref.current?.addEventListener("input", autoResize, false);

      return () => ref.current?.removeEventListener("input", autoResize, false);
    }
  }, [ref]);

  return (
    <textarea
      ref={ref}
      name=""
      id=""
      {...props}
      className="b1 max-h-[270px] min-h-[260px] w-full overflow-y-auto rounded-lg border-1 border-solid border-dark-50 p-3 font-medium text-dark-400"
    ></textarea>
  );
};

export default TextArea;
