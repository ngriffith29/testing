import React from "react";
import "./style.css";


export default function Bullets(props) {
    const {items, theme, selected, onSelect} = props;
    return (
        <div class={"slider-bullets " + (theme || "")}>
            {
                items.map((v, i) => {
                    const selectedClass = (i === selected) ? " selected" : "";
                    return (
                        <div key={i} onClick={() => onSelect(i)} className={"slider-bullet" + selectedClass}>
                        </div>
                    )
                })
            }
        </div>
    )
}
