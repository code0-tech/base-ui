import {Meta} from "@storybook/react";
import React from "react";
import Dropdown from "./Dropdown";
import Button from "../button/Button";
import {IconAbc, IconMail, IconSearch} from "@tabler/icons-react";
import ButtonGroup from "../button-group/ButtonGroup";
import Input from "../input/Input";

const meta: Meta = {
    title: "Dropdown",
    component: Dropdown
}

export default meta;

export const Dropdowns = () => {
    return <>
        <Dropdown position={"bottom"} align={"start"}>
            <Dropdown.Trigger>
                <Button>Open Dropdown</Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </Dropdown.Menu>
        </Dropdown>


        <Dropdown position={"top"} align={"center"}>
            <Dropdown.Trigger>
                <Button>Open Dropdown</Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
                <Dropdown.Header>
                    <Input.Control placeholder={"search..."}>
                        <Input.Control.Icon><IconSearch/></Input.Control.Icon>
                    </Input.Control>
                </Dropdown.Header>
                <Dropdown.Group>
                    <Dropdown.Group.Item>
                        Item 1
                    </Dropdown.Group.Item>
                    <Dropdown.Group.Item>
                        Item 2
                    </Dropdown.Group.Item>
                </Dropdown.Group>
                <Dropdown.Footer>
                    That's the footer
                </Dropdown.Footer>
            </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
            {
                ["secondary", "secondary", "secondary", "secondary"].map((value, index) => {
                    // @ts-ignore
                    return (index % 2 == 0) ? <Button disabled={(index % 2) == 0} variant={value}>
                        {(index % 2) == 0 ? <Button.Icon><IconAbc/></Button.Icon> : null}
                        {value}
                    </Button> : <Dropdown position={"bottom"} align={"start"}>
                        <Dropdown.Trigger>
                            <Button disabled={(index % 2) == 0} variant={"secondary"}>
                                {(index % 2) == 0 ? <Button.Icon><IconAbc/></Button.Icon> : null}
                                {value}
                            </Button>
                        </Dropdown.Trigger>
                        <Dropdown.Menu>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        </Dropdown.Menu>
                    </Dropdown>
                })
            }
        </ButtonGroup>
    </>
}