import CardWrapper from "./CardWrapper";
import CardContent from "./CardContent";

import styles from "./Card.module.css";

function Card({ recipe }) {
  return (
    <CardWrapper className={styles}>
      <CardContent recipe={recipe} />
    </CardWrapper>
  );
}

export default Card;
