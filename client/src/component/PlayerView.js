import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PlayerView extends Component {
  render() {
    return (
      <div>
      	<h2> PlayerView </h2>
        <div className="center-content">
          <div className="search-container">
            <input type="text" name="name" value="" placeholder="SEARCH" />
          </div>

          <div className="none">
            <table>
              <thead>
                <tr>
                  <td>Offense</td>
                  <td>Owner</td>
                  <td>GP*</td>
                  <td>% Owned</td>
                  <td>Proj</td>
                  <td>Actual</td>
                  <td>Yds</td>
                  <td>TD</td>
                  <td>Int</td>
                  <td>Att*</td>
                  <td>Yds</td>
                  <td>TD</td>
                  <td>Tgt*</td>
                  <td>Rec</td>
                  <td>TD</td>
                  <td>TD</td>
                  <td>2PT</td>
                  <td>Lost</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Hendry Key</td>
                  <td>22</td>
                  <td>33</td>
                  <td>44</td>
                  <td>55</td>
                  <td>66</td>
                  <td>77</td>
                  <td>554</td>
                  <td>5666</td>
                  <td>3333</td>
                  <td>545</td>
                  <td>5454</td>
                  <td>3</td>
                  <td>5</td>
                  <td>23</td>
                  <td>55</td>
                  <td>67</td>
                  <td>4232</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default PlayerView;
