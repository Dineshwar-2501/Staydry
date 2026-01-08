import Link from 'next/link';
import styles from './Button.module.scss'
import { ReactNode } from 'react';
type LinkProps =  {href:string;className?:string ;children:ReactNode};

export default function LinkCompo({ children, className,href}: LinkProps) {
    return (
        <Link href={`${href}`} className={` ${styles.button} ${className ?? ""} `}>{children}</Link>
    );
}