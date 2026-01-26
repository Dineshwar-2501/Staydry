import Link from 'next/link';
import styles from './Button.module.scss'
import { ReactNode } from 'react';
import clsx from 'clsx';
type LinkProps = { href: string; className?: string; children: ReactNode };

export default function LinkCompo({ children, className, href }: LinkProps) {
    return (
        <Link href={href} className={clsx(styles.button, className) } >{children}</Link>
    );
}