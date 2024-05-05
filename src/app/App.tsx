import { useTheme } from 'app/providers/ThemeProviders';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';

export const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>fefe</Modal>
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

