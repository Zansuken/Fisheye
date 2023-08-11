import build from "../../../componentBuilder";

const Input = ({
  type,
  label,
  name,
  onChange,
  placeholder,
  required = false,
  fullWidth = false,
}) => {
  const addFullWidthClass = (className) =>
    fullWidth ? `${className} fullWidth` : className;

  const baseInputAttributes = {
    id: name,
    type,
    class: addFullWidthClass("input"),
    name,
    placeholder,
    required,
  };

  if (onChange) {
    baseInputAttributes.onchange = onChange;
  }

  const textareaInputAttributes = {
    ...baseInputAttributes,
    class: addFullWidthClass("input-textarea"),
  };

  const inputElement = build(
    type === "textarea" ? "textarea" : "input",
    type === "textarea" ? textareaInputAttributes : baseInputAttributes
  );

  const labelElement = build("label", { class: "label", for: name }, [
    required ? `${label}*` : label,
  ]);

  const wrapper = build(
    "div",
    { class: "field" },
    label ? [labelElement, inputElement] : [inputElement]
  );

  return wrapper;
};

export default Input;
