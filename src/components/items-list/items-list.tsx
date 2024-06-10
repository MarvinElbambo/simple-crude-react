import React, { useEffect, useState } from "react";
import Row from "../grid/row/row";
import Column from "../grid/column/column";
import ItemCard from "../card/item-card";
import { Item, readData } from "@/firebase/firbase-method";

interface ItemsListProps {
  className?: string;
}

const ItemsList = ({ className }: ItemsListProps) => {
  const [menuItems, setMenuItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await readData();
        // console.log(response);

        setMenuItems(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //   console.log(menuItems);

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
