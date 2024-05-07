import { classNames } from "shared/lib/classNames";
import styles from "./Modal.module.scss"
import { KeyboardEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing
  }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearInterval(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, mods)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <button className={styles.cross} onClick={() => handleClose()}></button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

