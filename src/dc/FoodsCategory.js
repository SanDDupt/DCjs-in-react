import React from 'react';
import * as dc from "dc";
import { ChartTemplate } from "./ChartTemplate";

const FoodsCategoryFunc = (divRef, ndx) => {

  const dimensionCategory = ndx.dimension(item => item.category);
  const quantityByCategory = dimensionCategory.group().reduceSum(item => item.quantity);  

  const FoodsCategory = dc.pieChart(divRef);
  FoodsCategory
    .width(200)
    .height(200)
    .innerRadius(25)
    .label(d => d.key + ': ' + d.value)
    .dimension(dimensionCategory)
    .group(quantityByCategory);

  return FoodsCategory;
}

export const FoodsCategory = props => {
  return (
    <ChartTemplate chartFunction={FoodsCategoryFunc} title="Foods Category" />
  )
}

