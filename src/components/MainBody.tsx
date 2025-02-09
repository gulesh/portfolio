import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Timeline from "./Timeline";
import ContactMe from "./ContactMe";
import styles from "@styles/main.module.css";

export default function MainBody(){
	
	return(
		<div className={styles.main}>
			<AboutMe />
			<Experience />
			<Timeline />
			<ContactMe />
		</div>
	);
}
