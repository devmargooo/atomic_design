import React from "react";
import styles from "./Header.module.css";

interface IHeaderProps {
    text:string;
}

export const Header:React.FC<IHeaderProps> = ({ text }:IHeaderProps) => (<h3 className={styles.header}>{text}</h3>)
