import React from 'react';
import * as dc from "dc";
import * as d3 from "d3";

import { ChartTemplate } from "./ChartTemplate";

const OutOfDateQuantityFunc = (divRef, ndx) => {

  const countryCategory = ndx.dimension(item => item.country);
  const outOfDateByCountry = countryCategory.group().reduceSum(item => item.outOfDateQuantity);

  const OutOfDateQuantity = dc.barChart(divRef);
  OutOfDateQuantity
    .width(200)
    .height(200)
    .x(d3.scaleOrdinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Country")
    .yAxisLabel("Out of date quantity")
    .elasticY(true)
    .dimension(countryCategory)
    .group(outOfDateByCountry);

  return OutOfDateQuantity;
}

export const OutOfDateQuantity = props => {
  return (
    <ChartTemplate chartFunction={OutOfDateQuantityFunc} title="Out of Date items" />
  )
}




