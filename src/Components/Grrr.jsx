import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicCard from "./BasicCard";
import histgram from "../images/histgram.png";
import pie from "../images/pie.png";
import line from "../images/line.png";
import bar from "../images/bar.png";
import band from "../images/band.png";
import boxplot from "../images/boxplot.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BasicCard name="棒グラフ" photo={bar} />
        </Grid>
        <Grid item xs={4}>
          <BasicCard name="折れ線グラフ" photo={line} />
        </Grid>
        <Grid item xs={4}>
          <BasicCard name="円グラフ" photo={pie} />
        </Grid>
        <Grid item xs={4}>
          <BasicCard name="ヒストグラム" photo={histgram} />
        </Grid>
        <Grid item xs={4}>
          <BasicCard name="帯グラフ" photo={band} />
        </Grid>
        <Grid item xs={4}>
          <BasicCard name="箱ひげ図" photo={boxplot} />
        </Grid>
      </Grid>
    </Box>
  );
}
