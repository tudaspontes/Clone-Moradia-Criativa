import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";

export function QuizElementColor() {
  const [colorCheck, setColorCheck] = useState('transparent')

  const colors = [
    "#EA2027",
    "#EE5A24",
    "#F79F1F",
    "#FFC312",
    "#006266",
    "#009432",
    "#A3CB38",
    "#C4E538",
    "#1B1464",
    "#0652DD",
    "#1289A7",
    "#12CBC4",
    "#5758BB",
    "#9980FA",
    "#D980FA",
    "#FDA7DF",
  ]

  return (
    <Box
      mt={5}>
      <Grid templateColumns="repeat(4, 1fr)">
        {colors.map((color, index) => (
          <Box
          key={index}
          w="100%"
          h="94px"
          bg={color}
          border={color === colorCheck ? "4px" : ""}
          borderColor={color === colorCheck ? 'black' : 'transparent'}
          transition="0.5s"
          onClick={() => setColorCheck(color)}
        />
        ))}
      </Grid>    
    </Box>
  )
}