import { DrawerHeader } from "@chakra-ui/react";
import { Logo } from "../Navigation/Logo";

export function HeaderSidebar() {
    return (
        <DrawerHeader
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            py="8"
        >
            <Logo width="8rem" />

        </DrawerHeader>
    )
}