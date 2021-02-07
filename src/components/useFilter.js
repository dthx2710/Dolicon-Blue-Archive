import { useState } from "react";

export const useFilter = initialValues => {
    const [values , setValues] = useState(initialValues);
    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.id]: e.target.value
            });
        }
    ]
}