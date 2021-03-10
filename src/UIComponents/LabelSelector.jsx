/* React component to handle selecting % of data to use for training. */
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeatures, setLabelColumn } from "../redux";
import { styles } from "../constants";

class LabelSelector extends Component {
  static propTypes = {
    labelColumn: PropTypes.string,
    setLabelColumn: PropTypes.func,
    columns: PropTypes.array
  };

  getStyle = key => {
    let style;
    if (key === this.props.labelColumn) {
      style = styles.dataDisplayHeaderLabelSelected;
    } else {
      styles.dataDisplayHeaderLabelUnselected;
    }
    return {...style, ...styles.dataDisplayHeader, ...{float: 'left', border: '1px solid black', padding: 5} };
  }

  render() {

    return (
      <div>
        <div style={styles.largeText}>
          Predict
        </div>
        {this.props.columns.map((column, index) => {
          return (
            <div
            style={this.getStyle(column)}
            key={index}
            onClick={() => this.props.setLabelColumn(column)}
            >
              {column}
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    labelColumn: state.labelColumn,
    columns: getFeatures(state)
  }),
  (dispatch) => ({
    setLabelColumn(labelColumn) {
      dispatch(setLabelColumn(labelColumn));
    },
  })
)(LabelSelector);
