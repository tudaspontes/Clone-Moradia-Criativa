import { Grid } from "@chakra-ui/react";
import { FlexboxSection } from "../../Common/FlexboxSection";
import { ItemStatistic } from "./ItemStatistic";

export function Statistics() {
    return (
        <Grid
            maxW={1200}
            w="100%"
            margin="0 auto"
            templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)']}
            gap={["1rem","2rem"]}
            py="20"
            mt="6"
            pb={["2", "28"]}
            flexDir={["column", "column", "column", "row"]}
        >
            <ItemStatistic
                title="Comodos"
                desc="Diferentes tipos de comodos, estilos e cores"
                end={35}
            />

            <ItemStatistic
                title="Projetos"
                desc="Diversos Projetos produzidos pela nossa equipe"
                end={452}
            />
            <ItemStatistic
                title="Sonhos"
                desc="Anos de experiência e milhares de projetos realizados"
                end={533}
            />
            <ItemStatistic
                title="Famílias"
                desc="Diversas Casas e Famílias com um cantinho novo1"
                end={223}
            />
        </Grid>
    )
}