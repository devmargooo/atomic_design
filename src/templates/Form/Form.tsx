import React from "react";
import {IField, FormBody} from "../../organisms/FormBody";
import {Header} from "../../atoms/Header";

export interface IForm {
    header:string;
    fields:IField[];
}

export const Form:React.FC<IForm> = ({header, fields}) => (
    <form>
        <Header text={header}/>
        <FormBody fields={fields}/>
    </form>
)
