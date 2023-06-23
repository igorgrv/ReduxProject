import Header from "components/Header";
import styles from "./Home.module.scss";
import watch from "assets/inicial.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Button";
import { useEffect } from "react";
import { searchCategories } from "store/reducers/categories";
import { searchItems } from "store/reducers/items";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(searchCategories());
    dispatch(searchItems());
  }, [dispatch]);

  return (
    <div>
      <Header
        title="Tech Products"
        description="Buy different types of products on the best site in Brazil!"
        image={watch}
        className={styles.header}
      >
        <Button onClick={() => navigate("/advertise")}>
          Add your products
        </Button>
      </Header>
      <div className={styles.categories}>
        <div className={styles["categories-title"]}>
          <h1>Categories</h1>
        </div>
        <div className={styles["categories-container"]}>
          {categories.map((category, index) => {
            return (
              <div
                key={category.id}
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <img src={category.thumbnail} alt={category.title} />
                <h1>{category.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
