import Head from 'next/head';
import Link from 'next/link';
import Styles from './Layout.module.css';
import Logo from '../../public/images/Logo.png';
import Thumb from "../../public/images/javascript.jpg"
import Image from 'next/image';

export const siteTitle = "Home";

export default function Layout({children}) {
    return (
        <div className={Styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Build demo website version2"/>
                <meta name="og:title" content={siteTitle} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <section className={Styles.site__navbar}>
                <div className={Styles.navbar}>
                    <div className={Styles.navbar__left}>
                        <Link href="/">
                            <a className={Styles.navbar__left__logo}>
                                <Image src={Logo} alt="ImageLogo"/>
                            </a>
                        </Link>
                    </div>
                    <div className={Styles.social__box}>
                        <ul className={Styles.social__list}>
                            <li className={Styles.social__item}>
                                <Link href="/">
                                    <a className={Styles.social__link}><i className="fas fa-home"></i></a>
                                </Link>
                            </li>
                            <li className={Styles.social__item}>
                                <Link href="/">
                                    <a className={Styles.social__link}><i className="fab fa-facebook-f"></i></a>
                                </Link>
                            </li>
                            <li className={Styles.social__item}>
                                <Link href="/">
                                    <a className={Styles.social__link}><i className="fab fa-twitter"></i></a>
                                </Link>
                            </li>
                            <li className={Styles.social__item}>
                                <Link href="/">
                                    <a className={Styles.social__link}><i className="fab fa-tiktok"></i></a>
                                </Link>
                            </li>
                            <li className={Styles.social__item}>
                                <Link href="/">
                                    <a className={Styles.social__link}><i className="fab fa-youtube"></i></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.navbar__right}>
                        <ul className={Styles.navbar__right__list}>
                            <li className={Styles.navbar__right__item}>
                                <Link href="/home/notifi">
                                    <a className={Styles.navbar__right__link}><i className="fas fa-globe"></i></a>
                                </Link>
                            </li>
                            <li className={Styles.navbar__right__item}>
                                <i className="fab fa-facebook-messenger"></i>
                            </li>
                            <li className={Styles.navbar__right__item}>
                                <i className="fas fa-bell"></i>
                                <span className={`${Styles.navbar__right__notifi} ${Styles.active}`}></span>
                            </li>
                            <li className={Styles.navbar__right__item}>
                                <div className={Styles.navbar__right__theme}>
                                    <div className={Styles.navbar__right__avatar}>
                                        <Link href="/login">
                                            <a><Image src={Thumb} alt="Avatar" /></a>
                                        </Link>
                                    </div>
                                    <i className="fas fa-bars"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <main>{children}</main>
        </div>
    )
}