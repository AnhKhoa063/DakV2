import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Logo from "../../public/images/Logo.png";
import Layout from "../../components/Layout/Layout";

export default function Login() {
    return(
        <Layout>
            <Head>
                <title>DAK - Đăng nhập</title>
                <link rel="stylesheet" href="css/style.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div className="form__group">
                <div className="form__container">
                    <div className="form__group-heading">
                        <h2>DAKSHOW - Đăng nhập</h2>
                        <p>Chào mừng bạn đến với DAK!</p>
                        <span>Tham gia ngay để kết bạn mới, tạo nhóm, thêm ảnh và hơn thế nữa.</span>
                    </div>
                    <form action="" className="form__control">
                        <div className="form__control-left">
                            <input type="text" id="email" className="form__control-input" placeholder="Email"/>
                            <input type="password" id="password" className="form__control-input" placeholder="Mật khẩu"/>
                            <p className="form__control-forget">Quên mật khẩu</p>
                            <input type="submit" className="form__control-input" value="Đăng nhập"/>
                            <p className="form__control-create">
                                Chưa có tài khoản? 
                                <span>
                                    <Link href="/register">
                                        <a> Đăng ký</a>
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <div className="form__control-right">
                            <div className="form__control-item">
                                <i className="fab fa-google"></i>
                                Đăng nhập với Google
                            </div>
                            <div className="form__control-item">
                                <i className="fab fa-facebook-f"></i>
                                Đăng nhập với Facebook
                            </div>
                            <div className="form__control-item">
                                <i className="fab fa-twitter"></i>
                                Đăng nhập với Twitter
                            </div>
                            <div className="form__control-item">
                                <i className="fab fa-youtube"></i>
                                Đăng nhập với Youtube
                            </div>
                            <div className="form__control-item">
                                <i className="fab fa-tiktok"></i>
                                Đăng nhập với Tiktok
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}
