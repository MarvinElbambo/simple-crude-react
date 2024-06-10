import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import Typography from "../typography/typography";
import styles from "./item-card.module.scss";
import Form from "../form/form";
import { Item } from "@/firebase/firbase-method";

interface ItemCard extends Item {}

const ItemCard = ({
  category,
  cost,
  name,
  price,
  stock,
  variant,
}: ItemCard) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.component}>
      <Typography
        tag="h6"
        tagStyle="bodyLarge"
        variant="bold"
        text={`Name: ${name}`}
      />

      <Typography
        tag="p"
        tagStyle="bodyMedium"
        text={`Category: ${category}`}
      />

      {variant && (
        <Typography
          tag="p"
          tagStyle="bodyMedium"
          text={`Varaint: ${variant}`}
        />
      )}

      <Typography tag="p" tagStyle="bodyMedium" text={`Price: ${price}`} />

      <Typography tag="p" tagStyle="bodyMedium" text={`Cost: ${cost}`} />

      <Typography tag="p" tagStyle="bodyMedium" text={`Stock: ${stock}`} />

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
          <Form
            onFormSubmit={() => console}
            button={{
              type: "submit",
              variant: "success",
              text: "Update",
              title: "Update item",
            }}
          />
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
