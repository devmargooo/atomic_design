import React from "react";
import styles from "./LabelledInput.module.css";
import {IInputProps, Input} from "../../atoms/Input";

export interface ILabbeledInputProps extends IInputProps{
    label:string;
}

export const LabelledInput:React.FC<ILabbeledInputProps> = ({value, setValue, label}:ILabbeledInputProps) => (
    <div>
        <p className={styles.label}>{label}</p>
        <Input value={value} setValue={setValue}/>
    </div>
)
