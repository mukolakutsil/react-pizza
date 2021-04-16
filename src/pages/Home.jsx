import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory } from "../redux/actions/filters";

const categoriesItem = [
  "Всі",
  "Мясні",
  "Вегетеріанська",
  "Гриль",
  "Острі",
  "Закриті",
];
const popupItem = [
  { name: "популярності", type: "popular" },
  { name: "ціні", type: "price" },
  { name: "алфавіту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} arr={categoriesItem} />
        <SortPopup items={popupItem} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {items &&
          items.map((item) => {
            return <PizzaBlock key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
