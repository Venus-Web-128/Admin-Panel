// import React from "react";
// import { createPortal } from "react-dom";

// const ModalsContainer = ({ children, isOpen, onClose, title, fullScreen }) => {
//   if (!isOpen) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div
//         className={`bg-white rounded-lg shadow-lg overflow-y-auto ${
//           fullScreen ? "w-full h-full" : "w-full max-w-3xl max-h-[90vh]"
//         }`}
//       >
//         {/* هدر */}
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h5 className="text-lg font-bold">{title}</h5>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             ✕
//           </button>
//         </div>

//         {/* بدنه */}
//         <div className="px-6 py-4">{children}</div>

//         {/* فوتر */}
//         <div className="flex justify-end gap-2 px-6 py-4 border-t">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
//           >
//             انصراف
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.getElementById("modals-root")
//   );
// };

// export default ModalsContainer;
