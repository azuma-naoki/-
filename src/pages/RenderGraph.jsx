import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getGraph } from "../api";
import { useSelector } from "react-redux";

export default function RenderGraph(props) {
  const [graph, setGraph] = useState(null)
  const graphData = useSelector(state => state.graphData);

  useEffect(()=>{
    getGraph(graphData).then((res)=>{
        setGraph(res)
    });
  }, [])

  return (
    <>
      <p>RenderGraph</p>
      {graph == null ? (
        <p>loading</p>
      ) : (
        <img src={`data:image/png;base64,${graph.value}`}  width="400" />
      )}
    </>
  );
}
