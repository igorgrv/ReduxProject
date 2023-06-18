import classNames from "classnames";
import Button from "components/Button";
import Header from "components/Header";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "store/reducers/items";
import styles from "./Advertise.module.scss";

export default function Advertise() {
  const { categoryName = "" } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) =>
    state.categories.map(({ title, id }) => ({ title, id }))
  );

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      category: categoryName,
    },
  });

  const { errors } = formState;

  function addProduct(data) {
    dispatch(addItem(data));
  }

  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.form} onSubmit={handleSubmit(addProduct)}>
        <input
          className={classNames({
            [styles["input-error"]]: errors.title,
          })}
          {...register("title", { required: true })}
          placeholder="Product Name"
          alt="Product Name"
        />
        <input
          className={classNames({
            [styles["input-error"]]: errors.description,
          })}
          {...register("description", { required: true })}
          placeholder="Product description"
          alt="Product description"
        />
        <input
          className={classNames({
            [styles["input-error"]]: errors.picture,
          })}
          {...register("picture", { required: true })}
          placeholder="Image URL"
          alt="Image URL"
        />
        <select
          className={classNames({
            [styles["input-error"]]: errors.category,
          })}
          {...register("category", { required: true })}
          disabled={categoryName}
        >
          <option value=""> Select a category </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          className={classNames({
            [styles["input-error"]]: errors.price,
          })}
          {...register("price", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="Price"
        />
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
}
