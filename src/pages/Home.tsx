import Services from "../Services";
import Materials from "../Materials";
import Banner from "../Banner";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Banner />
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <Materials />
      </ScrollAnimation>
    </>
  );
}
