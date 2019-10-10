import React from 'react';
import { CXContext } from "./Datacontext";


export const ChartTemplate = props => {

  const context = React.useContext(CXContext);
  const [chart, updateChart] = React.useState(null);
  const ndx = context.ndx;
  const div = React.useRef(null);

  React.useEffect(() => {
    const newChart = props.chartFunction(div.current, ndx);

    newChart.render();
    updateChart(newChart);
  },1);

  return (
    <div ref={div}>
      <label>{props.title}</label>
    </div>
  )
}