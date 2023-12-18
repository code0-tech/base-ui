import React, {ReactNode, RefObject, useCallback, useEffect, useState} from "react";

export const getChild = (children: ReactNode | ReactNode[], child: React.FC<any>): ReactNode | null => {
    return React.Children.toArray(children).find((childT) => {
        if (!React.isValidElement(childT)) return false;
        return childT.type == child;
    })
}

export const getContent = (children: ReactNode | ReactNode[], ...child: React.FC<any>[]): ReactNode[] | null => {

    const array = React.Children.toArray(children).filter((childT) => {
        if (!React.isValidElement(childT)) return true;
        return !child.find(value => value == childT.type);
    })

    return array.length == 0 ? null : array
}

export interface Positioning {
    height: number
    width: number
    x: number
    y: number
}

export const getWindowPositioning = (): Omit<Omit<Positioning, "x">, "y"> => {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    }
}

export const getPositioning = (node: HTMLElement): Positioning => {
    return {
        width: node.offsetWidth,
        height: node.offsetHeight,
        x: node.getBoundingClientRect().left,
        y: node.getBoundingClientRect().top
    }
}

export const getPositionAroundTarget = (target: HTMLElement, element: HTMLElement, position: 'top' | 'bottom' | 'left' | 'right' = "bottom") => {

    const margin = 8
    const targetPos = getPositioning(target)
    const elementPos = getPositioning(element)
    const windowSize = getWindowPositioning()

    const positionObject = [
        {
            name: "bottom",
            hierarchy: ["top", "left", "right"],
            conditionFit: ((targetPos.y + targetPos.height + margin + elementPos.height) <= windowSize.height)
        },
        {
            name: "top",
            hierarchy: ["bottom", "left", "right"],
            conditionFit: ((targetPos.y - margin - elementPos.height) >= 0)
        },
        {
            name: "left",
            hierarchy: ["right", "bottom", "top"],
            conditionFit: ((targetPos.x - margin - elementPos.width) >= 0)
        },
        {
            name: "right",
            hierarchy: ["left", "bottom", "top"],
            conditionFit: ((targetPos.x + targetPos.width + margin + elementPos.width) <= windowSize.width)
        }
    ]

    const currentPositionObject = positionObject.find(value => value.name == position)

    if (!currentPositionObject) return "bottom"
    if (currentPositionObject.conditionFit) return position


    for (let i = 0; i < currentPositionObject.hierarchy.length; i++) {
        const tempPositionObject = positionObject.find(value => value.name == currentPositionObject.hierarchy[i])
        if (tempPositionObject?.conditionFit) {
            return tempPositionObject.name
        }
    }

    return "bottom"

}