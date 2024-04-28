import {classNames} from 'shared/lib/classNames';
import {Link, type LinkProps} from 'react-router-dom';
import {type FC} from 'react';

type AppLinkProps = {
	className?: string;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
	const {to, className, children, ...others} = props;

	return (
		<Link
			to={to}
			className={classNames(className)}
			{...others}
		>
			{children}
		</Link>
	);
};

