import React, { useState } from "react";

const Categories = ({ arr }) => {
  const [indexElem, setIndex] = useState(0);

  const onSelectItem = (index) => {
    setIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {arr &&
          arr.map((name, index) => {
            return (
              <li
                className={indexElem === index ? "active" : ""}
                onClick={() => onSelectItem(index)}
                key={`${name}_${indexElem}`}
              >
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

// class Categories extends Component {
//   state = {
//     activeItem: 0,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { arr } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           {arr.map((name, index) => {
//             return (
//               <li
//                 className={this.state.activeItem === index ? "active" : ""}
//                 onClick={() => this.onSelectItem(index)}
//                 key={`${name}_${index}`}
//               >
//                 {name}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
