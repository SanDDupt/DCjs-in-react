import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { DataContext } from './Datacontext';
import { FoodsCategory } from './FoodsCategory';
import { FoodsCategoryAndOrigin } from './FoodsCategoryAndOrigin';
import { OutOfDateQuantity } from './OutOfDateQuantity';
import  Map   from './Map';


class DashBoard extends React.Component {
  
  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6} >
                <h1>DC-REACT-TEST</h1>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <DataContext>
          <Row>
            <Col md={6}>
              <FoodsCategory />
            </Col>
            <Col md={6}>
              <FoodsCategoryAndOrigin />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <OutOfDateQuantity />
            </Col>
            <Col md={6}>
              <Map />
            </Col>
          </Row>
        </DataContext>
      </div>
    )
  }
}

export default DashBoard
