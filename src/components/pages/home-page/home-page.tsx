import React, { useState } from "react";
import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import styles from "./home-page.module.scss";
import Button from "@/components/button/button";
import { Inter } from "next/font/google";
import Modal from "@/components/modal/modal";
import ItemsList from "@/components/items-list/items-list";
import { createData } from "@/firebase/firbase-method";
import Form from "@/components/form/form";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  const [isOpenCreateItem, setIsOpenCreateItem] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <Typography tagStyle="headlineSmall" text="Simple Crud React" />
        </Container>
      </header>

      <main className={inter.className}>
        <Container className={styles.titleContainer}>
          <Typography tag="h1" tagStyle="headlineLarge" text="Items" />

          <Button
            type="button"
            variant="success"
            text="Add new item"
            title="Add new item"
            onClick={() => setIsOpenCreateItem(true)}
          />

          <Modal
            isOpen={isOpenCreateItem}
            title="Create new item"
            onClose={() => setIsOpenCreateItem(false)}
          >
            <Form
              onFormSubmit={createData}
              button={{
                type: "submit",
                variant: "success",
                text: "Add",
                title: "Add item",
              }}
            />
          </Modal>
        </Container>

        <Container className={styles.tableContainer}>
          <ItemsList />
        </Container>
      </main>
    </>
  );
};

HomePage.displayname = "HomePage";

export default HomePage;
