import { useState } from "react";
import ReacDOM from "react-dom";

// const Checkbox = ({ label, checked }) => {
//   const defaultChecked = checked ? checked : false;
// //   const [isChecked, setIsChecked] = useState(defaultChecked);
// const [checked, setChecked] = useState([]);

// const handleClick = event => {
//     if(event.target.style.textDecoration)
//     {
//         event.target.style.removeProperty('text-decoration'); 
//     }
//     else
//     {
//         event.target.style.setProperty('text-decoration', 'line-through');
//     }
// };
// const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

// Return classes based on whether item is checked
// const isChecked = (item) =>
// checked.includes(item) ? "checked-item" : "not-checked-item";
// const checkList = ["Class1", "Class2", "Class3"]
//   return (
//     <div className="checkbox-wrapper">
//       {/*<label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={() => setIsChecked((prev) => !prev)}
//           className={isChecked ? "checked" : ""}
//           {...props}
//         />
//         <span>{label}</span>
//       </label>
//       <p onClick = {handleClick}> Task2</p> */}
//       <input value = {item} type = "checkbox" onChange ={handleCheck}/>
//       <div className = "list-container"> 
//         {checkList.map((item, index) => (
//             <div key = {index}> 
//                 <span> {item} </span>
//             </div> 
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Checkbox;

const Checkbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? "checked" : ""}
          {...props}
        />
        <span>{label}</span>
      </label>
      <p>{isChecked ? "Selected" : "Unchecked"}</p>
    </div>
  );
};
export default Checkbox;

