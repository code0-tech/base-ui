import React from "react";

export interface InputDescriptionProps {
    children: React.ReactNode | React.ReactElement
}

const InputDescription: React.FC<InputDescriptionProps> = (props) => {

    const {children} = props

    return <span className={"input__description"}>
        {children}
    </span>

}

export default InputDescription