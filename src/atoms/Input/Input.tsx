import React, {ChangeEvent} from "react";
import styles from "./Input.module.css";

export interface IInputProps {
    value:string;
    setValue(newValue:string):void;
}

export const Input:React.FC<IInputProps> = ({value, setValue}:IInputProps) => (
    <input
        className={styles.input}
        type="text"
        onChange={(e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        value={value}
    />
)
