import {
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useBreakpointValue,
} from "@chakra-ui/react"
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer"

import { BodySidebar } from "./BodySidebar"
import { HeaderSidebar } from "./HeaderSidebar"

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: true,
    })

    if (isDrawerSidebar) {
        return (

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="white" >
                        <DrawerCloseButton
                            mt="3"
                            size="lg"
                            color="blue.750"
                            _focus={{
                                boxShadow: "none"
                            }}
                        />

                        <HeaderSidebar />

                        <BodySidebar />

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }else{
        return null
    }
}