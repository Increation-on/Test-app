import styles from '../Styles/About.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.about_header}>This is About Page</h1>
            {/* <div className={styles.cards_container}>
                <div className={styles.content_card}><img src="https://go64.ru/upload/quickly/cat-2143332_1280.jpg" alt="cat1" /></div>
                <div className={styles.content_card}><img src="https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg" alt="cat2" /></div>
                <div className={styles.content_card}><img src="https://bipbap.ru/wp-content/uploads/2017/08/4-35.jpg" alt="cat3" /></div>
                <div className={styles.content_card}><img src="https://bipbap.ru/wp-content/uploads/2017/08/kitten-cat-wallpaper-10.jpg" alt="cat1" /></div>
                <div className={styles.content_card}><img src="https://bipbap.ru/wp-content/uploads/2017/08/persidskaya.jpg " alt="cat4" /></div>
            </div> */}
            <div className={styles.cards_container}>
                <div className={styles.content_card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor volutpat, elementum mauris ut, vehicula mi.
                Etiam pulvinar ipsum in arcu imperdiet, id feugiat turpis luctus. Nullam id tortor posuere massa finibus tristique in id justo.
                In non ex erat. Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien.</div>
                <div className={styles.content_card}> Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien. Ut mattis, odio nec vehicula tempus, sapien lectus elementum purus, at elementum enim erat eget nisl.
                Donec ac accumsan quam, nec condimentum lacus. Aliquam tempor felis id sagittis tempor.
                Sed sollicitudin purus neque, vitae porttitor dolor congue et. Aenean porttitor euismod urna id viverra.
                Etiam condimentum risus at est ultricies laoreet.</div>
                <div className={styles.content_card}> Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien. Ut mattis, odio nec vehicula tempus, sapien lectus elementum purus, at elementum enim erat eget nisl.
                Donec ac accumsan quam, nec condimentum lacus. Aliquam tempor felis id sagittis tempor.
                Sed sollicitudin purus neque, vitae porttitor dolor congue et. Aenean porttitor euismod urna id viverra.
                Etiam condimentum risus at est ultricies laoreet.</div>
                <div className={styles.content_card}> Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien. Ut mattis, odio nec vehicula tempus, sapien lectus elementum purus, at elementum enim erat eget nisl.
                Donec ac accumsan quam, nec condimentum lacus. Aliquam tempor felis id sagittis tempor.
                Sed sollicitudin purus neque, vitae porttitor dolor congue et. Aenean porttitor euismod urna id viverra.
                Etiam condimentum risus at est ultricies laoreet.</div>
                <div className={styles.content_card}> Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien. Ut mattis, odio nec vehicula tempus, sapien lectus elementum purus, at elementum enim erat eget nisl.
                Donec ac accumsan quam, nec condimentum lacus. Aliquam tempor felis id sagittis tempor.
                Sed sollicitudin purus neque, vitae porttitor dolor congue et. Aenean porttitor euismod urna id viverra.
                Etiam condimentum risus at est ultricies laoreet.</div>
            </div>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor volutpat, elementum mauris ut, vehicula mi.
                Etiam pulvinar ipsum in arcu imperdiet, id feugiat turpis luctus. Nullam id tortor posuere massa finibus tristique in id justo.
                In non ex erat. Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien. Ut mattis, odio nec vehicula tempus, sapien lectus elementum purus, at elementum enim erat eget nisl.
                Donec ac accumsan quam, nec condimentum lacus. Aliquam tempor felis id sagittis tempor.
                Sed sollicitudin purus neque, vitae porttitor dolor congue et. Aenean porttitor euismod urna id viverra.
                Etiam condimentum risus at est ultricies laoreet.
            </p>
            <p className={styles.description_addition}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor volutpat, elementum mauris ut, vehicula mi.
                Etiam pulvinar ipsum in arcu imperdiet, id feugiat turpis luctus. Nullam id tortor posuere massa finibus tristique in id justo.
                In non ex erat. Donec finibus a lectus vitae sollicitudin. Suspendisse in sodales sapien. Ut mattis, odio nec vehicula tempus, sapien lectus elementum purus, at elementum enim erat eget nisl.
                Donec ac accumsan quam, nec condimentum lacus. Aliquam tempor felis id sagittis tempor.
                Sed sollicitudin purus neque, vitae porttitor dolor congue et. Aenean porttitor euismod urna id viverra.
                Etiam condimentum risus at est ultricies laoreet.
            </p>
        </div>
    )
}

export default About;