import React from "react";
import "./css/location.css";

  
  
// function Location() {
//   return (
//     <div> 
//       <header>
//         <h1>Plan Your Next Trip!</h1>
//       </header>
//       <main> 
//         <form>
//           <div className="form-floating">
//             <input
//               type="text"
//               className="form-control autocomplete"
//               id="floatingInput"
//               placeholder="e.g.Paris, Italy, Spain"
//             />
//             <label htmlFor="floatingInput"><strong>Where to?</strong></label>
//           </div>
//           <div className="row">
//             <div className="col">
//               <div className="form-floating">
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="floatingInputGrid"
//                   placeholder="date"
//                 />
//                 <label htmlFor="floatingInputGrid"><strong>Start Date</strong> (Optional)</label>
//               </div>
//             </div>
//             <div className="col">
//               <div className="form-floating">
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="floatingInputGrid2"
//                   placeholder="date"
//                 />
//                 <label htmlFor="floatingInputGrid2"><strong>End Date</strong> (Optional)</label>
//               </div>
//             </div>
//           </div>
//           <button type="button" id="startTripBtn">Start Planning</button>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default Location;

function Location() {
  return (
    <div> 
      <header>
        <h1>Plan Your Next Trip!</h1>
      </header>
      <main> 
        <form>
          <div className="form-floating">
            <input
              type="text"
              className="form-control autocomplete"
              id="floatingInput"
              placeholder="e.g.Paris, Italy, Spain"
            />
            <label htmlFor="floatingInput"><strong>Where to?</strong></label>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="date"
                />
                <label htmlFor="floatingInputGrid"><strong>Start Date</strong> (Optional)</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInputGrid2"
                  placeholder="date"
                />
                <label htmlFor="floatingInputGrid2"><strong>End Date</strong> (Optional)</label>
              </div>
            </div>
          </div>
          <button type="button" id="startTripBtn">Start Planning</button>
        </form>
      </main>
    </div>
  );
}

export default Location;