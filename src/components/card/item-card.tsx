import Button from "../button/button";
import Typography from "../typography/typography";
import styles from "./item-card.module.scss";

const ItemCard = () => {
  return (
    <div className={styles.component}>
      <Typography
        tag="h6"
        tagStyle="bodyLarge"
        variant="bold"
        text="Name: Fries"
      />

      <Typography tag="p" tagStyle="bodyMedium" text="Category: Side dish" />

      <Typography tag="p" tagStyle="bodyMedium" text="Size: Small" />

      <Typography tag="p" tagStyle="bodyMedium" text="Price: 60" />

      <Typography tag="p" tagStyle="bodyMedium" text="Cost: 50" />

      <Typography tag="p" tagStyle="bodyMedium" text="Stock: 85" />

      <hr className={styles.devider} />

      <div className={styles.buttonContainer}>
        <Button
          className={styles.actionButton}
          type="button"
          title="Edit Item"
          variant="success"
          text="Edit"
        />

        <Button
          className={styles.actionButton}
          type="button"
          title="Delete Item"
          variant="danger"
          text="Delete"
        />
      </div>
    </div>
  );
};

ItemCard.displayName = "ItemCard";

export default ItemCard;
