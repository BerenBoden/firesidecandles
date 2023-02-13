import React from "react";
React.useLayoutEffect = React.useEffect;
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../public/assets/css/tailwind.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";
import "metismenujs/dist/metismenujs.css";
import Layout from "../components/layout/layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  const router = useRouter();

  // const {
  //   isLoading,
  //   error,
  //   data: categoryData,
  // } = useQuery({
  //   queryFn: async () => {
  //     const allCategories = await Promise.all(
  //       content.map(async (item) => {
  //         const res = await axios.get(
  //           `${process.env.NEXT_PUBLIC_SERVER_API}/identifiers?start=0&limit=-1&content=${item}&identifier=categories`
  //         );
  //         const categories = await res.data;
  //         return { [item]: categories };
  //       })
  //     );
  //     return allCategories.reduce((acc, curr) => ({ ...acc, ...curr }), {});
  //   },
  // });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();

    const hasGridClass = document.querySelector(".grid-sizer");

    if (hasGridClass != null) {
      const xyz = require("masonry-layout");
      var msnry = new xyz(".grid", {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
      });
    }

    return () => {
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
