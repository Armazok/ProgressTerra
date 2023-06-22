import './header.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";

export const Header:FC =({children}) => {
    return (
        <header className={classNames('header', {}, [])}>
            {children}
        </header>
    );
}
