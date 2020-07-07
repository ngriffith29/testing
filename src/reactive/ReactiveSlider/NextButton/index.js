import React from "react";
import "./style.css";


export default function NextButton(props) {
    const {isActive, theme, interval, onClick} = props;

    return (
        <div className={"carousel-next-button " + (theme || "")} onClick={onClick}>
            <svg className={`progress ${isActive ? "active" : ""}`} viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" style={{transition: isActive ? `stroke-dashoffset ${interval/1000}s linear` : "none"}}></circle>
            </svg>
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11">
                    <path id="arrow-1" fill-rule="nonzero" d="M.7123704 1.9738796c-.2406605-.2406606-.2406605-.6308486 0-.8715092.2406606-.2406605.6308486-.2406605.8715092 0l4.31375 4.31375c.2406605.2406606.2406605.6308486 0 .8715092l-4.31375 4.31375c-.2406606.2406605-.6308486.2406605-.8715092 0-.2406605-.2406606-.2406605-.6308486 0-.8715092L4.5903659 5.851875.7123704 1.9738796z"/>
            </svg>

        </div>
    )
}
