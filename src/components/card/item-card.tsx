import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import Typography from "../typography/typography";
import styles from "./item-card.module.scss";
import Form from "../form/form";
import { ItemData, deleteData, updateData } from "@/firebase/firbase-method";

interface ItemCard extends ItemData {}

const ItemCard = (props: ItemCard) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.component}>
      <Typography
        tag="h6"
        tagStyle="bodyLarge"
        variant="bold"
        text={`Name: ${props.name}`}
      />

      <Typography
        tag="p"
        tagStyle="bodyMedium"
        text={`Category: ${props.category}`}
      />

      {props.variant && (
        <Typography
          tag="p"
          tagStyle="bodyMedium"
          text={`Varaint: ${props.variant}`}
        />
      )}

      <Typography
        tag="p"
        tagStyle="bodyMedium"
        text={`Price: ${props.price}`}
      />

      <Typography tag="p" tagStyle="bodyMedium" text={`Cost: ${props.cost}`} />

      <Typography
        tag="p"
        tagStyle="bodyMedium"
        text={`Stock: ${props.stock}`}
      />

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
            onFormSubmit={updateData}
            button={{
              type: "submit",
              variant: "success",
              text: "Update",
              title: "Update item",
            }}
            item={props}
          />
        </Modal>

        <Button
          className={styles.actionButton}
          type="button"
          title="Delete Item"
          variant="danger"
          text="Delete"
          onClick={() => deleteData(props.id)}
        />
      </div>
    </div>
  );
};

ItemCard.displayName = "ItemCard";

export default ItemCard;
