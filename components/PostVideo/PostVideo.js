import Image from "next/image";
import Interactive from "../Interactive/Interactive";
import Styles from "./PostVideo.module.css";
import Logo from "../../public/images/Logo.png";

export default function PostVideo1() {
    return (
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã đăng video mới</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <iframe src="https://www.youtube.com/embed/kFdKxWo9Rjw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostVideo2() {
    return (
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã đăng video mới</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <iframe src="https://www.youtube.com/embed/UVbv-PJXm14" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/9Fgs5jmlQwM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}