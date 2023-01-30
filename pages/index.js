import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello,I'm Jeffrey Sanchez Tabao. You can call me Jep, I'm a software
          engineering intern at
          <a href="https://www.twistresources.com/"> TwistResources </a>.
        </p>
        <p>
          (This is a sample blog website on learning Next.js with{" "}
          <span className={utilStyles.redLink}>Sir Robert Velasco</span>
          .)
        </p>
      </section>
    </Layout>
  );
}
