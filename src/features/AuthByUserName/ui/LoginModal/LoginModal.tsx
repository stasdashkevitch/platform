import { Modal } from "shared/ui/Modal/Modal"
import { LoginForm } from "../LoginForm/LoginForm";
import { classNames } from "shared/lib/classNames";
import styles from "./LoginModal.module.scss"

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      lazy
      className={classNames(styles.loginModal)}
      onClose={onClose}
      isOpen={isOpen}
    >
      <LoginForm />
    </Modal>
  )
}

