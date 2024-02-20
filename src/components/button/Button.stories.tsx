import Button from "./Button";
import {StoryObj} from "@storybook/react";
import React from "react";
import ButtonGroup from "../button-group/ButtonGroup";
import {IconAbc} from "@tabler/icons-react";

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        icon: {
            type: "boolean",
            default: true
        },
        disabled: {
            type: "boolean",
            default: false
        },
        variant: {
            options: ['none', 'normal', 'filled', 'outlined'],
            control: {type: 'radio'},
        },
        size: {
            options: ["xs", "sm", "md", "lg", "xl"],
            control: {type: "radio"},
        },
        color: {table: {disable: true}}
    }
}

type ButtonStory = StoryObj<{ icon: boolean, disabled: boolean, variant: string, size: string }>;
type ButtonGroupStory = StoryObj<typeof ButtonGroup>;

export default meta

export const Buttons: ButtonStory = {
    render: (args) => {

        const {icon, disabled, variant, size} = args

        return <>
            {
                ["primary", "secondary", "info", "success", "warning", "error"].map(value => {
                    // @ts-ignore
                    return <Button size={size} disabled={disabled} variant={variant} color={value}>
                        {icon ? <Button.Icon><IconAbc/></Button.Icon> : null}
                        {value}
                    </Button>
                })
            }
        </>
    },
    args: {
        icon: true,
        disabled: false,
        variant: "normal",
        size: "md",
    }
}

export const ButtonGroups: ButtonGroupStory = {
    render: () => {
        return <>
            <ButtonGroup>
                {
                    ["primary", "secondary", "info", "success", "warning", "error"].map((value, index) => {
                        // @ts-ignore
                        return <Button color={value}>
                            {(index % 2) == 0 ? <Button.Icon><IconAbc/></Button.Icon> : null}
                            {value}
                        </Button>
                    })
                }
            </ButtonGroup>
            <ButtonGroup>
                {
                    ["primary", "primary", "primary", "primary"].map((value, index) => {
                        // @ts-ignore
                        return <Button color={value}>
                            {(index % 2) == 0 ? <Button.Icon><IconAbc/></Button.Icon> : null}
                            {value}
                        </Button>
                    })
                }
            </ButtonGroup>

            <ButtonGroup>
                {
                    ["secondary", "secondary", "secondary", "secondary"].map((value, index) => {
                        // @ts-ignore
                        return <Button disabled={(index % 2) == 0} color={value}>
                            {(index % 2) == 0 ? <Button.Icon><IconAbc/></Button.Icon> : null}
                            {value}
                        </Button>
                    })
                }
            </ButtonGroup>
        </>
    }
}