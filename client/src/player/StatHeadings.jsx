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
        <td className="table-category" colSpan="2">Fan Pts</td>
        <td className="table-category" colSpan="4">Passing</td>
        <td className="table-category" colSpan="2">Rushing</td>
        <td className="table-category" colSpan="3">Receiving</td>
        <td className="table-category" colSpan="3">Misc</td>
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
