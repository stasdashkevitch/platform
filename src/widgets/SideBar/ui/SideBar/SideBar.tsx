import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import style from './SideBar.module.scss';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

type SideBarProps = {
  className?: string;
};

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapse] = useState(false);
  const handleOnToggleCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sideBar, { [style.collapsed]: collapsed }, [className])}>
      <button
        data-testid="sidebar-toggle"
        onClick={handleOnToggleCollapse}
      >
        Burger
      </button>
      <LanguageSwitcher />
    </div>
  );
};

