import React, { useEffect, useState } from "react";
import Row from "../grid/row/row";
import Column from "../grid/column/column";
import ItemCard from "../card/item-card";
import { useReadData } from "@/firebase/firbase-method";

interface ItemsListProps {
  className?: string;
}

const ItemsList = ({ className }: ItemsListProps) => {
  const menuItems = useReadData();

  return (
    <Row className={className}>
      {menuItems.map((menuItem, index) => (
        <Column key={`${menuItem}-${index}`} width={{ tablet: 4, laptop: 3 }}>
          <ItemCard {...menuItem} />
        </Column>
      ))}
    </Row>
  );
};

ItemsList.displayName = "ItemsList";

export default ItemsList;
