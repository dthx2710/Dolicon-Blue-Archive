import { useState } from "react";

export const useEquip = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      if (e.target.tagName.toLowerCase() === "a"){
        setValues([]);
      }
      else if (e.target.checked === true) {
        setValues(() => [...values,e.target.value]);
      } else {
        setValues(() => values.filter(value=>value!==e.target.value));
      }
    },
  ];
};