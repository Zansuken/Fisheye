import build from "../../../componentBuilder";

/**
 * ## Renders Input component
 * ### Example:
 * ```
    * Input({
          label: "First name",
          name: "firstName",
          type: "text",
          placeholder: "First name",
          required: true,
          fullWidth: true,
        })

    * <input id="firstName" type="text" class="input fullWidth" name="firstName" placeholder="First name" required="">
 * ```
 * ### Props:
 * @param {String} type - Input type
 * @param {String} label - Input label
 * @param {String} name - Input name
 * @param {Function} onChange - Input onChange handler
 * @param {String} placeholder - Input placeholder
 * @param {Boolean} required - Input required
 * @param {Boolean} fullWidth - Input fullWidth
 * @returns {HTMLElement} Input component
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

  if (type === "textarea") {
    delete baseInputAttributes.type;
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
