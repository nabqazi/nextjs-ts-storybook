import React from "react";
import styles from "./primaryButton.module.css";

interface PrimaryButtonProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryButton = (
  props: React.PropsWithChildren<PrimaryButtonProps>
) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={styles["storybook-button"]}
      {...props}
    >
      {props.children}
    </button>
  );
};
