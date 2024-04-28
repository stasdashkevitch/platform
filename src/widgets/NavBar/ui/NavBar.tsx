import {classNames} from 'shared/lib/classNames';
import style from './NavBar.module.scss';
import {AppLink} from 'shared/ui/AppLink';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import logo from '../../../shared/assets/logo/bee.png';
import {useTranslation} from 'react-i18next';

type NavBarProps = {
	className?: string;
};

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation();
	return (
		<div className={classNames(style.navbar)}>
			<div className={style.logo}>
				<img src={logo} />
				<p>Bee Mind</p>
			</div>
			<AppLink to={'/'}>{t('Главная')}</AppLink>
			<AppLink to={'/about'}>{t('О сайте')}</AppLink>
			<ThemeSwitcher className={style.themeSwitcher} />
		</div>
	);
};

