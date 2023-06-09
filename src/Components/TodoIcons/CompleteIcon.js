import React from "react";
import { TodoIcons } from './index';

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