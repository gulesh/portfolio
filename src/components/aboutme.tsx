import Profile from "@components/Profile";
import styles from "@styles/aboutme.module.css"
import Introduction from "@components/Introduction";

export default function AboutMe(){
	return(
		<div className={styles.container}>
			<Profile />
			<Introduction />
		</div>
	);
}
