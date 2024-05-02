import {useTheme} from 'app/providers/ThemeProviders';
import './styles/index.scss';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';
import { useEffect } from 'react';

export const App = () => {
	const {theme} = useTheme();
  useEffect(() => {
    throw new Error("Hoh")
  }, [])

	return (
		<div className={`app ${theme}`}>
			<NavBar />
			<div className="content-page">
				<SideBar />
				<AppRouter />
			</div>
		</div>
	);
};

