import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "950": "#050505",
            "800": "#121212",
            "790": "#212529",
            "750": "#222222",
            "700": "#333333",
            "650": "#333D4A",
            "625": "#4f4e4e",
            "600": "#5d5d5d",
            "500": "#7d7d7d",
            "400": "#a4a4a4",
            "300": "#afafaf",
            "250": "#aeaeae",
            "200": "#dcdcdc",
            "150": "#eaeaea",
            "50": "#f6f6f6",
        },
        orange: {
            "50": "#ea8565",
            "100": "#e59999"
        },
        teal: {
            "450": '#289d9a'
        },
        pink: {
            "500": '#F65D7C'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: "Poppins",
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.750'
            }
        }
    }
})