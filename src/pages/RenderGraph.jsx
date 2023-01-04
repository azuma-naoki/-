import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getGraph } from "../api";

export default function RenderGraph(props) {
  const [graph, setGraph] = useState(null)

  useEffect(()=>{
    getGraph(props.x, props.y).then((res)=>{
        setGraph(res)
    });
  }, [])

  return (
    <div>
      {graph == null ? (
        <p>loading</p>
      ) : (
        <div>
            <img src={`data:image/png;base64,${graph.value}`}  width="400" />
        </div>
      )}
    </div>
  );
}
