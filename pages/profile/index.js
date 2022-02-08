import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import Logo from "../../public/images/Logo.png";

export default function Profile() {
    return(
        <Layout>
            <Head>
                <title>Profile</title>
                <link rel="stylesheet" href="css/style.css"></link>
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
                        <div className="profile__nav-item">Bài viết</div>
                        <div className="profile__nav-item">Thư viện</div>
                        <div className="profile__nav-item">Thống kê</div>
                    </div>
                    <div className="profile__post">
                        <div className="profile__user-post">
                            <form action="" className="profile__form-control">
                                <div className="profile__user-post-top">
                                    <div className="profile__user-avatar">
                                        <Image src={Logo} alt="Avatar"/>
                                    </div>
                                    <textarea type="text" className="profile__user-input" placeholder="Hãy nhập nội dung"></textarea>
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="profile__user-post-bottom">
                                    <select className="profile__category-list" name="category">
                                        <option value="Danh mục">Danh mục</option>
                                        <option value="Thú Cưng">Thú Cưng</option>
                                        <option value="Phim hoạt hình">Phim hoạt hình</option>
                                        <option value="Nghệ thuật">Nghệ thuật</option>
                                        <option value="Ô tô">Ô tô</option>
                                        <option value="Làm đẹp">Làm đẹp</option>
                                        <option value="Giải trí">Giải trí</option>
                                        <option value="Phim">Phim</option>
                                    </select>
                                    <div className="profile__user-private">
                                        <i className="fas fa-unlock-alt"></i>
                                        Riêng tư
                                    </div>
                                    <button className="profile__user-btn">Đăng</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}