import styles from '../Styles/Footer.module.scss';

const Footer = ()=> {

    let year = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <p>All Rights Reserved © {year}.</p>
        </div>
    )
}

export default Footer;