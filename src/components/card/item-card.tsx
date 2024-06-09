import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import Typography from "../typography/typography";
import styles from "./item-card.module.scss";
import EditForm from "../forms/edit-form";

const ItemCard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
          onClick={() => setIsOpenModal(true)}
        />

        <Modal
          isOpen={isOpenModal}
          title="Update item"
          onClose={() => setIsOpenModal(false)}
        >
          <EditForm />
        </Modal>

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
