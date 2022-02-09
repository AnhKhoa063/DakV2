import Head from "next/head";
import Styles from "./Interactive.module.css";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";

export default function Interactive() {
    return(
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div className={Styles.reaction}>
                <div className={Styles.reaction__like}>
                    <i className="fa-regular fa-heart"></i>
                    <span>Thích</span>
                    <label className={Styles.reaction__title}>10</label>
                </div>
                <div className={Styles.reaction__vote}>
                    <span>vote</span>
                    <label className={Styles.reaction__title}>10</label>
                </div>
                <div className={Styles.reaction__comment}>
                    <i className="fa-regular fa-message"></i>
                    <span>Bình luận</span>
                    <label className={Styles.reaction__title}>10</label>
                </div>
                <div className={Styles.reaction__share}>
                    <i className="fa-solid fa-share-nodes"></i>
                    <span>Chia sẻ</span>
                    <label className={Styles.reaction__title}>10</label>
                </div>
            </div>
            <div className={Styles.reaction__comment__post}>
                <div className={Styles.reaction__comment__avatar}>
                    <Image src={Logo} alt="Avatar"/>
                </div>
                <div className={Styles.reaction__comment__input}>
                    <textarea type="text" placeholder="Viết bình luận..."></textarea>
                    <i className="fa-regular fa-face-grin-wide"></i>
                </div>
            </div>
        </>
    );
}
