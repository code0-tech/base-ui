import React from "react"
import "./Pill.style.scss"
import {getChild} from "../../utils/utils";
import {Button} from "../../index";
import {IconX} from "@tabler/icons-react";

export interface PillType {
    children: React.ReactElement<PillContentType> | React.ReactElement<PillContentType>[],
    removeButton?: boolean,
    //defaults to primary
    variant?: "primary" | "secondary" | "info" | "success" | "warning" | "error",
    //Defaults to md
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    href?: string,
    onRemoveButtonClick?: () => void,
}

export interface PillContentType {
    children: string,
}

const Pill: React.FC<PillType> = (props) => {
    const {children, href, removeButton = false, onRemoveButtonClick, variant = "primary", size = "md"} = props;

    const content: string = getChild(children, PillContent, true)?.props.children

    return <span
        className={`pill-root ${removeButton ? "rm-button-active" : ""} pill-variant-${variant} pill-size-${size} ${href && "pill-href"}`}
        onClick={(event) => {
            console.log(event.target)
            if (!["pill-root", "pill-label"].includes((event.target as HTMLDivElement).id)) return
            if (href) {
                window.location.assign(href)
            }
        }} id={"pill-root"}>
            <span id={"pill-label"} className={"pill-label"}>{content}</span>
        {removeButton &&
            <button title={"Pill Title"} onClick={onRemoveButtonClick} className={"pill-remove-button"}><IconX
                color={"#999999"} className={"pill-remove-icon"}/></button>}
        </span>

}

const PillContent: React.FC<PillContentType> = (props) => {

    const {children} = props;

    return <>{children}</>
}

export default Object.assign(Pill, {
    Content: PillContent,
})