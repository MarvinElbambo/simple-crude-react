import { ReactNode } from "react";
import styles from "./column.module.scss";
import classNames from "classnames";

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnBreakpoints {
  mobile?: Column;
  tablet?: Column;
  laptop?: Column;
  desktop?: Column;
}

export interface ColumnProps {
  children?: ReactNode;
  className?: string;
  width?: ColumnBreakpoints;
}

const Column = ({
  children,
  className,
  width = {
    mobile: 12,
    tablet: 12,
    laptop: 12,
    desktop: 12,
  },
}: ColumnProps) => {
  return (
    <div
      className={classNames(
        styles.component,
        width.mobile && styles[`is-${width.mobile}-column-mobile`],
        width.tablet && styles[`is-${width.tablet}-column-tablet`],
        width.laptop && styles[`is-${width.laptop}-column-laptop`],
        width.desktop && styles[`is-${width.desktop}-column-desktop`],
        className
      )}
    >
      {children}
    </div>
  );
};

Column.displayName = "Column";

export default Column;
