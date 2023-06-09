import React from "react";
import { TodoIcons } from './index';

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcons
            type = "delete"
            color = "grey"
            onClickEvent = {onDelete}
        />
    );
}

export { DeleteIcon };