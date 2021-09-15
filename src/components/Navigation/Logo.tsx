import { Image } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {
    width?: string;
    type?: string;
}

export function Logo({ width, type }: LogoProps) {
    return (
        <Link href="/">
            <a>
                <Image
                    src={type === 'branco' ? "/logo/logoBranco.svg" : "/logo/logoCompleto.svg"}
                    alt="moradia criativa logo"
                    w={width ? width : "10rem"}
                    h="2.75rem"
                />
            </a>
        </Link>
    )
}