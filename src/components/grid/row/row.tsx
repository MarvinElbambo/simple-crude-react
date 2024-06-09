import { ReactNode } from "react";
import styles from "./row.module.scss";
import classNames from "classnames";

export interface RowProps {
  children?: ReactNode;
  className?: string;
}

const Row = ({ children, className }: RowProps) => {
  return (
    <div className={classNames(styles.component, className)}>{children}</div>
  );
};

Row.displayName = "Row";

export default Row;
