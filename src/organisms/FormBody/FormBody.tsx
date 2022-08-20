import React from "react";
import styles from "./FormBody.module.css";
import {LabelledInput} from "../../molecules/LabelledInput";

export interface IField {
    label:string
    value:string;
    setter(newValue:string):void;
}

export interface IFormBody {
    fields:IField[];
}

export const FormBody:React.FC<IFormBody> = ({fields}) => (
    <div className={styles.formBody}>
        {fields.map(field => (
            <LabelledInput value={field.value} setValue={field.setter} label={field.label}/>
        ))}
    </div>
)
