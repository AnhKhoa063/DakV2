import Head from "next/head";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import Layout from "../../../components/Layout/Layout";
import Logo from "../../../public/images/Logo.png";
import Thumb from "../../../public/images/javascript.jpg";
import Link from "next/link";
import { useState } from 'react';

export default function Library() {

    const [active, setActive] = useState(1);

    const filters = [
        'Bài viết',
        'Thư viện',
        'Thống kê'
    ]

    const [activeLink, setActiveLink] = useState(0);
    return(
        <Layout>
            <Head>
                <title>DAK - Profile</title>
                <link rel="stylesheet" href="css/style.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <section className="profile">
                <div className="profile__left">
                    <div className="profile__info">
                        <div className="profile__avatar">
                            <Image src={Logo} alt="Avatar"/>
                        </div>
                        <h2 className="profile__name">
                            Nguyễn Thiên Phúc
                            <i className="fas fa-check"></i>
                            <i className="fas fa-edit"></i>
                        </h2>
                        <p className="profile__des">Phúc ngu thứ 2 không ai thứ nhất<i className="fas fa-edit"></i></p>
                        <button className="profile__btn">Đăng xuất</button>
                    </div>
                    <div className="profile__statistic-list">
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Vote</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">NFT</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Bài viết</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Đã theo dõi</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Đang theo dõi</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                    </div>
                </div>
                <div className="profile__right">
                    <div className="profile__nav-list">
                        {filters.map((filter, index) => 
                            (<div className={`${"profile__nav-item"} ${(active === index) ? 'active' : null}`}  onClick={(e) => {setActive(index); e.preventDefault}} key={index}><Link href={index === 0 ? "/profile" : (index === 1 ? "/profile/library" : "/profile") }><a>{filter}</a></Link></div>)
                        )}
                    </div>
                    <div className="profile__library">
                        <div className="profile__library-heading">
                            <h2 className="profile__library-heading-title">Mục đã lưu</h2>
                            <ul className="profile__library-nav">
                                
                                <li className={`${"profile__library-nav-item"} ${activeLink === 0 ? 'active' : ''}`} onCLick={() => setActiveLink(1)}><Link href="/profile/library"><a>Tất cả</a></Link></li>
                                <li className={`${"profile__library-nav-item"} ${activeLink === 1 ? 'active' : ''}`} onCLick={() => setActiveLink(2)}><Link href="/profile/library_list"><a>Thư viện</a></Link></li>
                            </ul>
                            <button className="profile__library-heading-btn">Thêm thư viện</button>
                        </div>
                        <ul className="profile__library-all-list">
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">Chuyện  cũ xưa: Nên dùng === hay == để so sánh trong Javascript? Sự khác biệt của hai toán tử so sánh bằng === (bằng bằng bằng) và == (bằng bằng) trong Javascript.</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                            <li className="profile__library-all-item">
                                <div className="profile__library-all-thumb">
                                    <Image src={Thumb} alt="Thumb"/>
                                </div>
                                <div className="profile__library-all-title">
                                    <Link href="/">
                                        <a className="profile__library-all-link">9 thủ thật javascript mà các lập trình viên cần phải biết</a>
                                    </Link>
                                    <p className="profile__library-all-subtitle">
                                        Bài viết -
                                        <span>Để xem sau</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        {/* <ul className="profile__library-list">
                            <li className="profile__library-item">
                                <div className="profile__library-img">
                                    <Image src={Logo} alt="Avatar"/>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <p className="profile__library-title">Javascript Basic</p>
                                <p className="profile__library-subtitle">Để xem sau</p>
                                <span className="profile__library-quantity">30 Mục</span>
                            </li>
                            <li className="profile__library-item">
                                <div className="profile__library-img">
                                    <Image src={Logo} alt="Avatar"/>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <p className="profile__library-title">Javascript Basic</p>
                                <p className="profile__library-subtitle">Để xem sau</p>
                                <span className="profile__library-quantity">30 Mục</span>
                            </li>
                            <li className="profile__library-item">
                                <div className="profile__library-img">
                                    <Image src={Logo} alt="Avatar"/>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <p className="profile__library-title">Javascript Basic</p>
                                <p className="profile__library-subtitle">Để xem sau</p>
                                <span className="profile__library-quantity">30 Mục</span>
                            </li>
                            <li className="profile__library-item">
                                <div className="profile__library-img">
                                    <Image src={Thumb} alt="Avatar"/>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <p className="profile__library-title">Javascript Basic</p>
                                <p className="profile__library-subtitle">Để xem sau</p>
                                <span className="profile__library-quantity">30 Mục</span>
                            </li>
                            <li className="profile__library-item">
                                <div className="profile__library-img">
                                    <Image src={Thumb} alt="Avatar"/>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <p className="profile__library-title">Javascript Basic</p>
                                <p className="profile__library-subtitle">Để xem sau</p>
                                <span className="profile__library-quantity">30 Mục</span>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}