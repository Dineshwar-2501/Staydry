import styles from './page.module.css'

import LinkCompo from './utilities/LinkCompo';
export default function Header() {
    return (
        <section className={`${styles.hero}  p-5`}>
            
            <h1 className={styles.headtitle}>Wake Up Dry, <br />Sleep Easy</h1>
            <div className='flex flex-col items-center '>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aut?</p>
                <LinkCompo href='/products'>Shop Now</LinkCompo>
            </div>

        </section>
    );
}