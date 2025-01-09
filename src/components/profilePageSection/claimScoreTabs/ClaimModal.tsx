// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Spinner from "../../common/spinner/Spinner";
// import { useParams } from "react-router-dom";

// const token = localStorage.getItem("token");
// const ClaimModal = () => {
//   const [claimDetails, setClaimDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams<{ id: string }>();

//   useEffect(() => {
//     const fetchClaimDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://my.tc.popopower.com/api/get-claim-score/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setClaimDetails(response.data.message.data);
//         console.log("dataforModal", response.data.message.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching claim details:", error);
//         setLoading(false);
//       }
//     };

//     fetchClaimDetails();
//   });

//   if (loading) return <Spinner />;

//   return (
//     <div>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora
//       dignissimos facilis ipsum quia vero sequi! Ab necessitatibus vel harum?
//     </div>
//   );
// };

// export default ClaimModal;
import React from 'react'

const ClaimModal = () => {
  return (
    <div>ClaimModal</div>
  )
}

export default ClaimModal
