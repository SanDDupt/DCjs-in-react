import React from "react";
import * as crossfilter from "crossfilter2";

export const CXContext = React.createContext("CXContext");

export class DataContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supermarketItems : [
        { name: "banana", category: "fruit", country: "Italia", city: "Roma", latitude: 41.902783, longitude: 12.496365, outOfDateQuantity: 3, quantity: 12 },
        { name: "peach", category: "fruit", country: "Italia", city: "Roma", latitude: 41.902783, longitude: 12.496365, outOfDateQuantity: 3, quantity: 12 },
        { name: "apple", category: "fruit", country: "Spain", city: "Barcelona", latitude: 41.385064, longitude: 2.173403, outOfDateQuantity: 7, quantity: 9 },         
        { name: "kiwi", category: "fruit", country: "Spain", city: "Barcelona", latitude: 41.385064, longitude: 2.173403, outOfDateQuantity: 7, quantity: 9 },
        { name: "cuncumber", category: "vegetable", country: "Spain", city: "Seville", latitude: 37.389092, longitude: -5.984459, outOfDateQuantity: 2, quantity: 25 },       
        { name: "garden pies", category: "vegetable", country: "France", city: "Dijon", latitude: 47.322047, longitude: 5.041480, outOfDateQuantity: 2, quantity: 25 }
      ]
    }
  }
  
  render() {
    const ndx = crossfilter(this.state.supermarketItems)
    return (
      <CXContext.Provider value={{ ndx: ndx }}>
        <div ref={this.parent}>
          {this.props.children}
        </div>
      </CXContext.Provider>
    );
  }
}