import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import styles from "./home-page.module.scss";
import Button from "@/components/button/button";
import { Inter } from "next/font/google";
import Modal from "@/components/modal/modal";
import ItemsList from "@/components/items-list/items-list";
import { createData, updateData } from "@/firebase/firbase-method";
import Form from "@/components/form/form";
import { useCreateFormModal, useEditFormModal } from "@/state/store";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  const isOpenCreateFormModal = useCreateFormModal((state) => state.isOpen);
  const isOpenEditFormModal = useEditFormModal((state) => state.isOpen);
  const editFormModalItem = useEditFormModal((state) => state.item);
  const setIsOpenCreateFormModal = useCreateFormModal(
    (state) => state.setIsOpen
  );
  const setIsOpenEditFormModal = useEditFormModal((state) => state.setIsOpen);

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
            onClick={() => setIsOpenCreateFormModal(true)}
          />
        </Container>

        <Container className={styles.tableContainer}>
          <ItemsList />
        </Container>

        <Modal
          isOpen={isOpenCreateFormModal}
          title="Create new item"
          onClose={() => setIsOpenCreateFormModal(false)}
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

        <Modal
          isOpen={isOpenEditFormModal}
          title="Update item"
          onClose={() => setIsOpenEditFormModal(false)}
        >
          <Form
            key={editFormModalItem?.id}
            onFormSubmit={updateData}
            button={{
              type: "submit",
              variant: "success",
              text: "Update",
              title: "Update item",
            }}
            item={editFormModalItem}
          />
        </Modal>
      </main>
    </>
  );
};

HomePage.displayname = "HomePage";

export default HomePage;
