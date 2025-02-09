import Image from "next/image";
import Navbar from "@components/NavBar";
import Mainbody from "@components/MainBody";
import Text from "./Text";

export default function Home() {
  return (
	  <div>
		   <Navbar />
		   <Mainbody />
		   <Text />
		  
	   </div>

  
  );
}
