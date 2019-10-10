import React from 'react';
import * as dc from "dc";
import { ChartTemplate } from "./ChartTemplate";

const FoodsCategoryAndOriginFunc = (divRef, ndx) => {

  const dimensionCountryAndCategory = ndx.dimension(item => item.country + '_' + item.category);
  const quantityByCountryAndCategory = dimensionCountryAndCategory.group().reduceSum(item => item.quantity);

  const FoodsCategoryAndOrigin = dc.pieChart(divRef);
  FoodsCategoryAndOrigin
    .width(200)
    .height(200)
    .innerRadius(25)
    .dimension(dimensionCountryAndCategory)
    .group(quantityByCountryAndCategory);

  return FoodsCategoryAndOrigin;
}

export const FoodsCategoryAndOrigin = props => {
  return (
    <ChartTemplate chartFunction={FoodsCategoryAndOriginFunc} title="Foods Category and Origin" />
  )
}


