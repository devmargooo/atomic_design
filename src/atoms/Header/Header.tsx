import React from "react";

interface IHeaderProps {
    text:string;
}

export const Header:React.FC<IHeaderProps> = ({ text }:IHeaderProps) => (<h3>{text}</h3>)
