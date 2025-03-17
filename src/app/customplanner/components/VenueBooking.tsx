// import { useState } from "react";

// export default function VenueBooking() {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const options = [
//     { id: 1, name: "Standard Package", price: 500 },
//     { id: 2, name: "VIP Package", price: 1000 },
//     { id: 3, name: "Custom Decorations", price: 300 },
//   ];

//   const handleSelect = (option) => {
//     setSelectedOptions((prevSelectedOptions) => {
//       const isSelected = prevSelectedOptions.includes(option.id);
//       setTotalPrice((prevTotalPrice) =>
//         isSelected ? prevTotalPrice - option.price : prevTotalPrice + option.price
//       );
//       return isSelected
//         ? prevSelectedOptions.filter((id) => id !== option.id)
//         : [...prevSelectedOptions, option.id];
//     });
//   };
  
//   return (
//     <div className="flex p-6 gap-6">
//       {/* Options Section */}
//       <div className="w-2/3 bg-gray-100 p-6 rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Select Your Options</h2>
//         <div className="space-y-4">
//           {options.map((option) => (
//             <div key={option.id} className="flex justify-between items-center p-4 border rounded-lg">
//               <span>{option.name}</span>
//               <span>${option.price}</span>
//               <button
//                 onClick={() => handleSelect(option)}
//                 className={`px-4 py-2 rounded-lg text-white ${
//                   selectedOptions.includes(option.id) ? "bg-red-500" : "bg-blue-500"
//                 }`}
//               >
//                 {selectedOptions.includes(option.id) ? "Remove" : "Select"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Summary Section */}
//       <div className="w-1/3 bg-white p-6 shadow-lg rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Summary</h2>
//         <p className="text-lg">Total Price: ${totalPrice}</p>
//       </div>
//     </div>
//   );
// }