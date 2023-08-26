import build from "../../../componentBuilder";

/**
 * @param {String} type - Input type
 * @param {String} label - Input label
 * @param {String} name - Input name
 * @param {Function} onChange - Input onChange handler
 * @param {String} placeholder - Input placeholder
 * @param {Boolean} required - Input required
 * @param {Boolean} fullWidth - Input fullWidth
 * @returns {HTMLElement} - Input component
 * @description - Renders Input component
 **/
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
