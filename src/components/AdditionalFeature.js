import React from 'react';
import { addFeature } from './../actions/AdditionalFeaturesActions';
import { connect } from 'react-redux';

const handleAdd = () => {
  this.props.addFeature(this.state.additionalFeatures)
}

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAdd} className="button">Add</button>
      {props.feature.name} ({props.feature.price})
    </li>
  );
};


const mapStateToProps = state => {
  // console.log("additionalFeature", state);
  return({
    additionalFeatures: state.additionalFeatures
  })
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
