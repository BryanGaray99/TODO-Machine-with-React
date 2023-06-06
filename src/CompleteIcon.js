import React from "react";
import { TodoIcons } from './TodoIcons';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcons
            type = "check"
            color = {completed ? 'green' : 'grey'}
            onClickEvent = {onComplete}
        />
    );
}

export { CompleteIcon };