import { ReactNode } from "react";
import styles from "./container.module.scss";
import classNames from "classnames";

export interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={classNames(styles.component, className)}>{children}</div>
  );
};

Container.displayName = "Container";

export default Container;
