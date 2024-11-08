import {Code0Component} from "../../utils/types";
import React, {ReactNode} from "react";
import {mergeCode0Props} from "../../utils/utils";

export interface SectionType extends Code0Component<HTMLDivElement> {
    children: ReactNode | ReactNode[]
    //defaults to false
    image?: boolean,
    //defaults to false
    border?: boolean
}

const CardSection: React.FC<SectionType> = (props) => {

    const {
        image = false,
        border = false,
        children,
        ...args
    } = props;

    return <>
        <div {...mergeCode0Props(`card__section ${border ? "card__section--border" : ""} ${image ? "card__section--image" : ""}`, args)}>
            {children}
        </div>
    </>
}

export default CardSection