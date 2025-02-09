import styles from "@styles/main.module.css";

export default function NavBar(){
	return(
		<div className={styles.navContainer}>
			<ul className={styles.navbar}>
				<li className={styles.navtab} > <a href="#">About </a> </li>
				<li className={styles.navtab} > <a href="#">Experience </a> </li>
				<li className={styles.navtab} > <a href="#">Timeline </a> </li>
				<li className={styles.navtab} > <a href="#">Contact </a> </li>
			</ul>
		</div>
	);
}


