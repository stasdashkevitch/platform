import { classNames } from 'shared/lib/classNames';
import { useCallback, useState } from 'react';
import style from './SideBar.module.scss';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';

type SideBarProps = {
  className?: string;
};

export const SideBar = ({ className }: SideBarProps) => {
  const {t} = useTranslation('sidebar')
  const [collapsed, setCollapse] = useState(false);
  const handleOnToggleCollapse = () => {
    setCollapse(!collapsed);
  };

  const [isAuthModal, setIsAuthModal] = useState(false)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sideBar, { [style.collapsed]: collapsed }, [className])}>
      <button
        data-testid="sidebar-toggle"
        onClick={handleOnToggleCollapse}
        className={style.burger}
      />
      <button
        onClick={onShowModal}
      >{t('Войти')}</button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
      <LanguageSwitcher />
    </div>
  );
};

