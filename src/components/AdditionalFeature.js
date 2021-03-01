import React from 'react';
import { addFeature } from '../actions/carActions';
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature()} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}
const mapDispatchToProps = {
  addFeature,
}
export default  connect(mapStateToProps,mapDispatchToProps) (AdditionalFeature);
