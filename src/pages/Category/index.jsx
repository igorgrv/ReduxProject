import Button from "components/Button";
import Header from "components/Header";
import Item from "components/Item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadCategory } from "store/reducers/categories";
import styles from "./Category.module.scss";

export default function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryName } = useParams("categoryName");

  const { category, items } = useSelector((state) => {
    const search = new RegExp(state.search, "i");
    return {
      category: state.categories.find(
        (category) => category.id === categoryName
      ) || {},
      items: state.items.filter(
        (item) => item.category === categoryName && item.title.match(search)
      ),
    };
  });

  useEffect(() => {
    dispatch(loadCategory(categoryName));
  }, [dispatch, categoryName]);

  return (
    <div>
      <Header
        title={category.title}
        description={category.description}
        image={category.header}
      >
        <Button onClick={() => navigate(`/advertise/${categoryName}`)}>
          Add your products
        </Button>
      </Header>
      <div className={styles.items}>
        {items?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
