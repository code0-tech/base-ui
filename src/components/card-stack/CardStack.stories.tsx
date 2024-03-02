import Button from "../button/Button";
import {StoryObj} from "@storybook/react";
import ButtonGroup from "../button-group/ButtonGroup";
import {CardStack} from "./CardStack";
import React from "react";
import Card from "../card/Card";

const meta = {
    title: "CardStack",
    component: CardStack,
}

export default meta

type CardStackStoryType = StoryObj<typeof ButtonGroup>;

export const Stack: CardStackStoryType = {
    render: (args) => {
        return <CardStack>
            <Card>
                <>
                    1
                </>
                <Card.Section>
                    Test  123123123123123123123
                </Card.Section>
            </Card>
            <Card color={"error"}>
                <>
                    2
                </>
                <Card.Section>
                    Test  123123123123123123123123123123123
                </Card.Section>
            </Card>

        </CardStack>

    }
}