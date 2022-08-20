import React from "react";
import {Form} from "../../templates/Form";
import styles from "./MainPage.module.css";

export const MainPage = () => {
    const [name, setName] = React.useState<string>("");
    return (
        <div className={styles.content}>
            <Form
                header="Форма"
                fields={[{
                    value:name,
                    setter:setName,
                    label:"Кто вы?:)"
                }]}
            />
        </div>
    );
}
