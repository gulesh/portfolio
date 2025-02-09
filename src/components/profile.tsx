import smallbadgeimg from "@images/badgepicturesmall.jpg"
import profilepicture from "@images/badgepicture.jpg"
import styles from "@styles/aboutme.module.css"

export default function Profile(){
	return(
		<div className={styles.profile}>
			<picture>
				<source srcSet={profilepicture.src} media="(min-width: 48rem)" />
				<img src={smallbadgeimg.src} alt="Profile Picture"/>
			</picture>
			<div className={styles.nametag}>
				<h3> <span> Gulesh Shukla (He/Him/His) </span> </h3>
			</div>
		</div>
	);
}
