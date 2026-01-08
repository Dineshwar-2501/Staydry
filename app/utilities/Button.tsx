import styles from './Button.module.scss'
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {className?:string};

export default function Button({ children, className ,...props }: ButtonProps) {
    return (
        <button className={` ${styles.button} ${className ?? ""} `} {...props}>{children}</button>
    );
}