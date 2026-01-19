import styles from './page.module.css'

import LinkCompo from '@/utilities/LinkCompo';
export default function Header() {
    return (
        <section className={`${styles.hero}  container mx-auto px-10`}>

            <div className="flex items-center flex-col justify-center gap-10 h-screen xl:h-fit xl:grid xl:grid-cols-6 xl:grid-rows-2 ">
                <div className=' col-span-3 row-start-2'>
                    <h1 className={styles.headtitle}>Wake Up Dry, <br />Sleep Easy</h1>
                </div>
                <div className='col-start-4 col-end-5 row-start-3 row-end-4'>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aut?</p>
                    <LinkCompo href='/products'>Shop Now</LinkCompo>
                </div>
            </div>

        </section>
    );
}