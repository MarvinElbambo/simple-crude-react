import styles from "./icon-svg.module.scss";
import * as Icons from "@/assets/icons/index";
import classNames from "classnames";

export type IconNames = keyof typeof Icons;

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  name: IconNames;
}

const Icon = ({ className, name, ...props }: IconProps) => {
  const IconComponent = Icons[name];

  return (
    <figure {...props} className={classNames(styles.component, className)}>
      <IconComponent />
    </figure>
  );
};

Icon.displayName = "Icon";

export default Icon;
