// import React, { useState } from "react";
// import Modal from "../../components/Modal";
// import { Link } from "react-router-dom";
// import "../../assets/styles/calendar.css";
// import "../../utils/logic.js";
// import "../../utils/calendar.js";

// const Calendar = () => {
//   return (
//     <div className="page-container px-6 py-3">
//       <div class="columns  is-centered mt-5">
//         <div class="column is-8 is-narrow box m-3" id="cframe">
//           {/*Calendar area*/}
//           <div id="calendar" class="mx-6 is-has-text-text">
//             <div id="calendarHeader" class="is-flex gap-4 pb-5"></div>
//             <div
//               id="calendarBody"
//               class="is-flex is-flex-wrap-wrap pt-4 md"
//             ></div>
//           </div>
//         </div>
//         <div>{Modal()}</div>

//         <div
//           id="sidebar"
//           class="column box m-3 has-text-text is-flex is-flex-direction-column is-flex-wrap-nowrap is-justify-content-space-between"
//         >
//           <div class="box has-text-centered p-6">
//             <h3>
//               <a class="has-text-info" href="./index.html">
//                 Monthly Expense Memo
//               </a>
//             </h3>
//             <h4 class="is-size-5 has-text-info">
//               Understanding Your Lifestyle
//             </h4>
//           </div>
//           <div class="box px-6">
//             <p>
//               <b>Monthly Summary</b>
//             </p>

//             <i class="fa-solid fa-utensils "></i>
//             <p class="js-food-sum"> </p>

//             <i class="fa-solid fa-fire-flame-simple"> </i>
//             <p class="js-utilities-sum"> </p>

//             <i class="fas fa-house-user"></i>
//             <p class="js-housing-sum"> </p>

//             <i class="fa-solid fa-car"> </i>
//             <p class="js-travel-sum"> </p>

//             <i class="fa-solid fa-tv"></i>
//             <p class="js-entertainment-sum"> </p>

//             <i class="fa-sharp fa-solid fa-basket-shopping"></i>
//             <p class="js-grocery-sum"> </p>

//             <i class="fa-solid fa-shirt"></i>
//             <p class="js-other-sum"> </p>

//             <div class="daily-total"></div>

//             <p class="total js-total">
//               {" "}
//               <b> </b>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
