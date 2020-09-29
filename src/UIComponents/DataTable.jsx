/* React component displaying data in a dynamic table. */
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

class DataTable extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
  tableData: state.tableData
}))(DataTable);
