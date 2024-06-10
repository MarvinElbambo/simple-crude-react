import React, { useEffect, useState } from "react";
import Row from "../grid/row/row";
import Column from "../grid/column/column";
import ItemCard from "../card/item-card";
import { useReadData } from "@/firebase/firbase-method";
import Typography from "../typography/typography";
import styles from "./items-list.module.scss";
import classNames from "classnames";
import { useCreateFormModal } from "@/state/store";

interface ItemsListProps {
  className?: string;
}

const ItemsList = ({ className }: ItemsListProps) => {
  const menuItems = useReadData();
  const setIsOpenCreateFormModal = useCreateFormModal(
    (state) => state.setIsOpen
  );

  return (
    <Row className={classNames(styles.component, className)}>
      {menuItems.map((menuItem, index) => (
        <Column key={`${menuItem}-${index}`} width={{ tablet: 4, laptop: 3 }}>
          <ItemCard {...menuItem} />
        </Column>
      ))}

      {!menuItems.length && (
        <Column width={{ tablet: 4, laptop: 3 }}>
          <div
            className={styles.emptyItemCard}
            onClick={() => setIsOpenCreateFormModal(true)}
          >
            <Typography tagStyle="bodyMedium" text="Add New Item" />
          </div>
        </Column>
      )}
    </Row>
  );
};

ItemsList.displayName = "ItemsList";

export default ItemsList;
