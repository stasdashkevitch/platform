import { classNames } from "shared/lib/classNames"
import { Link, LinkProps } from "react-router-dom"
import { FC } from "react";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const { to, className, children, ...others } = props

  return (
    <Link
      to={to}
      className={classNames(className)}
      {...others}
    >
      {children}
    </Link>
  )
}

