import Button from "../button/button";
import Typography from "../typography/typography";
import styles from "./item-card.module.scss";
import { ItemData, deleteData, updateData } from "@/firebase/firbase-method";
import { useEditFormModal } from "@/state/store";

interface ItemCard extends ItemData {}

const ItemCard = (props: ItemCard) => {
  const setIsOpenEditFormModal = useEditFormModal((state) => state.setIsOpen);
  const seteditFormModal = useEditFormModal((state) => state.setItemData);

  const handleEditButtonClick = () => {
    setIsOpenEditFormModal(true);
    seteditFormModal(props);
  };

  return (
    <div className={styles.component}>
      <div className={styles.content}>
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

        <Typography
          tag="p"
          tagStyle="bodyMedium"
          text={`Cost: ${props.cost}`}
        />

        <Typography
          tag="p"
          tagStyle="bodyMedium"
          text={`Stock: ${props.stock}`}
        />
      </div>

      <hr className={styles.devider} />

      <div className={styles.buttonContainer}>
        <Button
          className={styles.actionButton}
          type="button"
          title="Edit Item"
          variant="success"
          text="Edit"
          onClick={handleEditButtonClick}
        />

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
