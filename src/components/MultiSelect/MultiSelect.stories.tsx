import MultiSelect from "./MultiSelect";
import {Meta, StoryObj} from "@storybook/react";
import React from "react";


const meta: Meta = {
    title: "MultiSelect",
    component: MultiSelect,
    argTypes: {
        clearable: {
            type: "boolean"
        },
        placement: {
            options: ['left start', 'left end', 'bottom start', 'bottom end', 'top start', 'top end', 'right start', 'right end'],
            control: {type: 'radio'},
        },
        placeholder: {
            type: "string"
        },
        defaultValue: {
            type: "string"
        },
        disabled: {
            type: "boolean"
        },
        disallowDeselection: {
            type: "boolean"
        }
    }
}


export default meta;

type MenuStory = StoryObj<typeof MultiSelect>

export const BasicMultiSelect: MenuStory = {
    render: (args) => {
        const {clearable = false, placement, placeholder, defaultValue, disabled, disallowDeselection} = args

        const arr: React.ReactElement[] = [];

        for (let i = 0; i < 100; i++) {
            arr.push(<MultiSelect.Option key={i}>{i}</MultiSelect.Option>)
        }

        return <MultiSelect disabled={disabled} defaultValue={defaultValue} disallowDeselection={disallowDeselection} placement={placement}  clearable={clearable} placeholder={placeholder}>
            {arr}
        </MultiSelect>

    },
    args: {
        clearable: false,
        placement: "bottom start",
        placeholder: "Placeholder",
        defaultValue: ["1"],
        disabled: false,
        disallowDeselection: false
    }
}
