import styles from "./Header.module.scss";
import HeaderWithImage from "./HeaderWithImage";
import HeaderWithoutImage from "./HeaderWithoutImage";

export default function Header({
  title,
  description,
  image,
  className = "",
  children,
}) {
  return (
    <header className={styles.header}>
      {image && (
        <HeaderWithImage
          title={title}
          description={description}
          image={image}
          className={className}
        >
          {children}
        </HeaderWithImage>
      )}
      {!image && (
        <HeaderWithoutImage title={title} description={description}>
          {children}
        </HeaderWithoutImage>
      )}
    </header>
  );
}
