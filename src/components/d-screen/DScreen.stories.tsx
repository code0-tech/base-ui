import {Meta} from "@storybook/react";
import React from "react";
import DScreen from "./DScreen";
import Badge from "../badge/Badge";
import {
    IconDatabase,
    IconHierarchy3,
    IconLayoutNavbarCollapse,
    IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightCollapse,
    IconSettings,
    IconTicket
} from "@tabler/icons-react";
import Text from "../Text/Text";
import DFullScreen from "../d-fullscreen/DFullScreen";
import Button from "../button/Button";

const meta: Meta = {
    title: "Dashboard Screen",
    parameters: {
        visualTest: {
            selector: 'body'
        },
        layout: "fullscreen"
    },
    component: DScreen
}

export const DashboardScreenExample = () => {
    return <DFullScreen>
        <DScreen>
            <DScreen.VBar.Top>
                <Badge>Home</Badge>
                <Text size={"sm"} mx={0.5}>/</Text>
                <Badge>Organisations</Badge>
                <Text size={"sm"} mx={0.5}>/</Text>
                <Badge>Code0</Badge>
                <Text size={"sm"} mx={0.5}>/</Text>
                <Badge>Projects</Badge>
                <Text size={"sm"} mx={0.5}>/</Text>
                <Badge>Sagittarius</Badge>
            </DScreen.VBar.Top>
            <DScreen.VBar.Bottom>
                <Badge>Test</Badge>
            </DScreen.VBar.Bottom>
            <DScreen.HBar.Left justify={"space-between"}>
                <div style={{display: "flex", flexDirection: "column", gap: ".5rem"}}>
                    <DScreen.Item>
                        <IconHierarchy3 size={12}/>
                        Flows
                    </DScreen.Item>
                    <DScreen.Item>
                        <IconTicket size={12}/>
                        Issues
                    </DScreen.Item>
                    <DScreen.Item>
                        <IconDatabase size={12}/>
                        Database
                    </DScreen.Item>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: ".5rem"}}>
                    <DScreen.Item>
                        <IconSettings size={12}/>
                        Settings
                    </DScreen.Item>
                </div>
            </DScreen.HBar.Left>
            <DScreen.HBar.Right>
                <DScreen.Item>
                    Docs
                </DScreen.Item>
            </DScreen.HBar.Right>
            <DScreen.Content>
                <DScreen>
                    <DScreen.HBar.Left defaultSize={300} maxSizes={[0, 300]}>
                        {(size, collapsed, collapse) => {
                            return <>
                                {size > 0 ? (
                                    <>
                                        <Text size={"md"} hierarchy={"primary"}>
                                            Sagittarius 200
                                        </Text>
                                        <Text size={"xs"}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        </Text>
                                        <Button pos={"absolute"} bottom={"0"} mb={"0"}
                                                color={collapsed ? "info" : "primary"} onClick={collapse}>
                                            <Button.Icon>
                                                {
                                                    !collapsed ? <IconLayoutSidebarLeftCollapse/> :
                                                        <IconLayoutSidebarRightCollapse/>
                                                }
                                            </Button.Icon>
                                            {!collapsed ? "Collapse" : null}
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            pos={"relative"}><Button.Icon><IconLayoutNavbarCollapse/></Button.Icon></Button>
                                        <Button pos={"absolute"} bottom={"0"} mb={"0"}
                                                color={collapsed ? "info" : "primary"} onClick={collapse}>
                                            <Button.Icon>
                                                {
                                                    !collapsed ? <IconLayoutSidebarLeftCollapse/> :
                                                        <IconLayoutSidebarRightCollapse/>
                                                }
                                            </Button.Icon>
                                        </Button>
                                    </>
                                )}
                            </>
                        }}
                    </DScreen.HBar.Left>
                    <DScreen.Content>
                        <DScreen>
                            <DScreen.VBar.Top justify={"flex-end"}>
                                <DScreen.Item>
                                    Test Run
                                </DScreen.Item>
                            </DScreen.VBar.Top>
                            <DScreen.VBar.Bottom>
                                <DScreen.Item>
                                    Logs
                                </DScreen.Item>
                            </DScreen.VBar.Bottom>
                            <DScreen.Content>
                                <Text size={"md"}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </Text>
                            </DScreen.Content>
                        </DScreen>
                    </DScreen.Content>
                </DScreen>

            </DScreen.Content>
        </DScreen>
    </DFullScreen>
}

export default meta