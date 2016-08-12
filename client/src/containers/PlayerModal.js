import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PlayerModal extends Component {
  render() {
    return (
      <div className="modal">
      	<div className="modal-header"> This is going to be the Header </div>
        <div className="modal-player-info">
          <img src="http://img.wennermedia.com/article-leads-horizontal/jordan-rodgers-53420e9d-f112-4125-b967-ea77af834e76.jpg" height="100px" width="160px"/>
          <span> Name Position etc </span>
          <span> Season Stats </span>
        </div>
        <div className="modal-schedule-info">    
	        <div className="modal-schedule-container">
		        <table className="modal-table">
		          <thead>
		            <tr>
		              <td> GP </td>
		              <td> Proj </td>
		              <td> Opp </td>
		              <td> Yds </td>
		              <td> TD </td>
		            </tr>
		          </thead>
		          <tbody> 
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		            <tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr><tr>
		              <td> Week 1 </td>
		              <td> 2 </td>
		              <td> SEA </td>
		              <td> 200 </td>
		              <td> 2 </td>
		            </tr>
		          </tbody>
		        </table>
		      </div>
	        <div className="modal-player-notes-container">
	          <div className="modal-player-notes"> Player Notes </div>
	        </div>
        </div>
      </div>
    );
  }
}

export default PlayerModal;

// <div class="modal">
// 		<div class="modal-header"> This is going to be the Header </div>
//     <div class="modal-player-info">
//       <img src="http://img.wennermedia.com/article-leads-horizontal/jordan-rodgers-53420e9d-f112-4125-b967-ea77af834e76.jpg" height="100px" width="160px">
//       <span> Name Position etc </span>
//       <span> Season Stats </span>
//     </div>
//     <div class="modal-schedule-info">
      
//   <div class="modal-schedule-container">
//     <table class="modal-table">
//   <thead>
//         <tr>
//           <td> GP </td>
//           <td> Proj </td>
//           <td> Opp </td>
//           <td> Yds </td>
//           <td> TD </td>
//        </tr>
//     </thead>
//   <tbody>
      
//       <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr><tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr><tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr><tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>

// <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>


// <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>
//     <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>
//     <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>
//     <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>
//     <tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr><tr>
//         <td> Week 1 </td>
//         <td> 2 </td>
//         <td> SEA </td>
//         <td> 200 </td>
//         <td> 2 </td>
//       </tr>
//     </tbody>
//  </table>
// </div>
// <div class="modal-player-notes-container">
//   <div class="modal-player-notes"> Player Notes </div>
// </div>
//   </div>