import Interactive from "../Interactive/Interactive";
import Logo from "../../public/images/Logo.png";
import ImagePost from "../../public/images/css.jpg";
import Styles from "./PostPicture.module.css";
import Image from "next/image";

export default function PostPicture1() {
    return(
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Image src={ImagePost} alt="Avatar"/>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostPicture2() {
    return(
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostPicture3() {
    return(
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                        <Image src={ImagePost} alt="Avatar"/>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}

export function PostPicture4() {
    return(
        <>
            <div className={Styles.profile__post__item}>
                <div className={Styles.profile__post__heading}>
                    <div className={Styles.profile__post__avatar}>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <div className={Styles.profile__post__info}>
                        <h2>Khoa Lê <span>Đã thay đổi ảnh hồ sơ.</span></h2>
                        <p>7 giờ trước</p>
                    </div>
                    <span>...</span>
                </div>
                <div className={Styles.profile__post__main}>
                    <div className={Styles.profile__post__content}>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                        <Image src={ImagePost} alt="Avatar"/>
                        <Image src={Logo} alt="Avatar"/>
                    </div>
                    <Interactive/>
                </div>
            </div>
        </>
    )
}