import {Meta} from "@storybook/react";
import React from "react";
import Card from "./Card";
import ListGroup from "../list-group/ListGroup";
import {CardFooter} from "./CardFooter";
import ButtonGroup from "../button-group/ButtonGroup";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";

const meta: Meta = {
    title: "Card",
    component: Card
}

export default meta

export const Test = () => {
    return <Card>
        <Card.Image src={"https://event.gls-west.de/Nico_Sammito.jpg"}/>
        <Card.Header>
            <Card.Title>Nico Sammito</Card.Title>
            <Card.Subtitle>Co-Founder</Card.Subtitle>
        </Card.Header>
        <ListGroup>
            <ListGroup.Item>
                <Dropdown>
                    <Dropdown.Trigger>
                        Test
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                        sd
                    </Dropdown.Menu>
                </Dropdown>
            </ListGroup.Item>
        </ListGroup>
        <CardFooter>
            <ButtonGroup>
                <Button>
                    Button
                </Button>
                <Button>
                    Button
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
}