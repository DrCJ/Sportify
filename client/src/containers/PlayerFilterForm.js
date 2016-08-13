import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { filterPlayers } from '../actions';

class PlayerFilterForm extends Component {
  onSubmit(props) {
    const reqObj = {
      Team: this.props.fields.team.value,
      Week: this.props.fields.weekly.value,
      Position: this.props.fields.position.value,
    };
    this.props.filterPlayers(reqObj);
  }

  render() {
    const { fields: { team, position, weekly }, handleSubmit } = this.props;
    return (
      <form className="filter-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="filter-form-select">
          <label htmlFor="teamSelect"> TEAM </label>
          <select data="teamVal" id="teamSelect" {...team}>
            <option value="All">All</option>
            <option value="GB">GreenBay</option>
          </select>
        </div>
        <div className="filter-form-select">
          <label htmlFor="weekly"> WEEKLY </label>
          <select data="weeklyVal" id="weeklySelect" {...weekly}>
            <option value="">2015-2016</option>
            <option value="1">Week 1</option>
            <option value="2">Week 2</option>
            <option value="3">Week 3</option>
            <option value="4">Week 4</option>
            <option value="5">Week 5</option>
            <option value="6">Week 6</option>
            <option value="7">Week 7</option>
            <option value="8">Week 8</option>
            <option value="9">Week 9</option>
            <option value="10">Week 10</option>
            <option value="11">Week 11</option>
            <option value="12">Week 12</option>
            <option value="13">Week 13</option>
            <option value="14">Week 14</option>
            <option value="15">Week 15</option>
            <option value="16">Week 16</option>
            <option value="17">Week 17</option>
          </select>
        </div>
        <div className="filter-form-select">
          <label htmlFor="positionSelect"> POSITION </label>
          <select data="positionVal" id="positionSelect" {...position}>
            <option value="All">All</option>
            <option value="QB">QB</option>
            <option value="RB">RB</option>
            <option value="WR">WR</option>
            <option value="TE">TE</option>
            <option value="K">K</option>
            <option value="Def">Def</option>
          </select>
        </div>
        <input
          type="submit"
          className="button filter-form-select-button"
          value="Submit"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PlayerView',
  fields: ['team', 'position', 'weekly'],
}, null, { filterPlayers })(PlayerFilterForm);
