import React, { memo, useState } from "react";

const Categories = memo(({ arr, onClickItem }) => {
  const [indexElem, setIndex] = useState(0);

  const onSelectItem = (index) => {
    setIndex(index);
    onClickItem(index);
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
});

export default Categories;
