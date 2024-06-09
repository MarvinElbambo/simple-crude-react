import React from "react";
import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import styles from "./home-page.module.scss";
import Button from "@/components/button/button";
import { Inter } from "next/font/google";
import Row from "@/components/grid/row/row";
import Column from "@/components/grid/column/column";
import ItemCard from "@/components/card/item-card";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
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

          <Button type="button" variant="success" text="Add new item" />
        </Container>

        <Container className={styles.tableContainer}>
          <Row>
            <Column width={{ tablet: 4, laptop: 3 }}>
              <ItemCard />
            </Column>
            <Column width={{ tablet: 4, laptop: 3 }}>
              <ItemCard />
            </Column>
            <Column width={{ tablet: 4, laptop: 3 }}>
              <ItemCard />
            </Column>
            <Column width={{ tablet: 4, laptop: 3 }}>
              <ItemCard />
            </Column>
            <Column width={{ tablet: 4, laptop: 3 }}>
              <ItemCard />
            </Column>
            <Column width={{ tablet: 4, laptop: 3 }}>
              <ItemCard />
            </Column>
          </Row>
        </Container>
      </main>
    </>
  );
};

HomePage.displayname = "HomePage";

export default HomePage;
