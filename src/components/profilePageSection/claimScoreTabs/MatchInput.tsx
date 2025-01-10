// import React from 'react';
// import { Field, useFormikContext } from 'formik';

// interface MatchInputProps { index: number; }

// const MatchInput: React.FC<MatchInputProps> = ({ index }) => {
//   const { setFieldValue, values } = useFormikContext();

//   return (
//     <div className="form-container">
//       <h3>Match {index + 1}</h3>
//       <div className="row">
//         <div className="col-md-6">
//           <label htmlFor={`tournament_name[${index}]`}>Tournament Name:</label>
//           <Field
//             id={`tournament_name[${index}]`}
//             name={`tournament_name[${index}]`}
//             type="text"
//             className={`input-box`}
//           />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor={`team_name[${index}]`}>Team Name:</label>
//           <Field
//             id={`team_name[${index}]`}
//             name={`team_name[${index}]`}
//             type="text"
//             className={`input-box`}
//           />
//         </div>
//         {/* Include BattingPerformance, BowlingPerformance and other components similarly */}
//       </div>
//     </div>
//   );
// };

// export default MatchInput;
import React from 'react'

const MatchInput = () => {
  return (
    <div>MatchInput</div>
  )
}

export default MatchInput
