import { ReactNode } from "react";
import styles from "./typography.module.scss";
import classNames from "classnames";
import { toUpperCase } from "lib/functions/string-functions";

type Tags =
  | "a"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "small"
  | "label";

type TagStyles =
  | "bodySmall"
  | "bodyMedium"
  | "bodyLarge"
  | "headlineXSmall"
  | "headlineSmall"
  | "headlineMedium"
  | "headlineLarge"
  | "headlineXLarge"
  | "headlineXXLarge";

export interface TypographyProps {
  children?: ReactNode;
  className?: string;
  text?: string;
  tag?: Tags;
  tagStyle?: TagStyles;
  variant?: "light" | "regular" | "medium" | "bold";
}

const Typography = ({
  children,
  className,
  text,
  tag = "span",
  tagStyle,
  variant,
}: TypographyProps) => {
  const Tag = tag;

  return (
    <Tag
      className={classNames(
        styles.component,
        tagStyle && styles[`is${toUpperCase(tagStyle, "first")}`],
        variant && styles[`is${toUpperCase(variant, "first")}`],
        className
      )}
    >
      {text ? text : children}
    </Tag>
  );
};

Typography.displayName = "Typography";

export default Typography;
