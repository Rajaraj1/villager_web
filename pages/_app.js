import "../styles/index.css";
import "../styles/globals.css";
import Facebook from "../components/Facebook";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6898963328156558"
      ></script>
      <Component {...pageProps} />
      <Facebook />
    </>
  );
}

export default MyApp;
