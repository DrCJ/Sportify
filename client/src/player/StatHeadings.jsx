import React from 'react';
import ClickableHeading from './ClickableHeading.jsx';
import abbreviations from '../helpers/mapStatToAbbreviation';
import { connect } from 'react-redux';

const StatHeadings = (props) => {
  const mapHeadings = props.headings.map((val, i) => (<ClickableHeading key={i} {...val} />));
  return (
    <thead>
      <tr>
        <td colSpan="4" />
        <td colSpan="2">Fan Pts</td>
        <td colSpan="4">Passing</td>
        <td colSpan="2">Rushing</td>
        <td colSpan="3">Receiving</td>
        <td colSpan="3">Misc</td>
      </tr>
      <tr>
        {mapHeadings}
      </tr>
    </thead>
  );
};

function mapStateToProps(state) {
  return {
    headings: state.search.headings.map(val => {
      return {
        fieldName: val,
        name: abbreviations[val],
      };
    }),
  };
}

export default connect(mapStateToProps)(StatHeadings);
