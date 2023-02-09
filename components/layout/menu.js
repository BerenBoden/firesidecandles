import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import NavMenu from "./nav";
import useCategories from "../../hooks/useCategories";

const content = ["article", "product"];

const Menu = () => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const [size, setSize] = useState(0);
  const router = useRouter();
  const categories = useCategories(content);

  const toggleTrueFalse = () => setToggled(!isToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
        <div className="container align-self-center position-relative">
          <div className="main-nav float-left ">
            <nav>
              <ul className="main-menu d-none d-lg-inline font-small">
                <li>
                  <Link href="/">
                    <a>
                      <i className="elegant-icon icon_house_alt mr-5 "></i>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="has-mega-menu">
                  <Link href="/articles">
                    <a>Articles</a>
                  </Link>
                  <ul className="mega-menu grid grid-cols-5 gap-4 p-4">
                    {categories.article &&
                      categories.article.data.map(
                        ({ attributes, id }, index) => {
                          return (
                            <Link
                              href={`/articles/categories/${attributes.slug}`}
                              key={id}
                            >
                              <li className="sub-mega-menu col-span-1 cursor-pointer">
                                <div className="">
                                  <p className="font-bold capitalize">
                                    {attributes.name}
                                  </p>

                                  <p className="text-xs capitalize">
                                    {attributes.meta_description}
                                  </p>
                                </div>
                              </li>
                            </Link>
                          );
                        }
                      )}
                  </ul>
                </li>
                <li className="has-mega-menu">
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                  <ul className="mega-menu grid grid-cols-5 gap-4 p-4">
                    {categories.product &&
                      categories.product.data.map(({ attributes, id }) => {
                        return (
                          <Link
                            href={`/products/categories/${attributes.slug}`}
                            key={id}
                          >
                            <li className="sub-mega-menu col-span-1 cursor-pointer">
                              <div className="">
                                <p className="font-bold capitalize">
                                  {attributes.name}
                                </p>

                                <p className="text-xs capitalize">
                                  {attributes.meta_description}
                                </p>
                              </div>
                            </li>
                          </Link>
                        );
                      })}
                  </ul>
                </li>
                <li
                  className={
                    router.pathname === "/courses" ? "current-item" : ""
                  }
                >
                  <Link href="/courses">
                    <a>Courses</a>
                  </Link>
                </li>
                <li
                  className={router.pathname === "/about" ? "current-item" : ""}
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </ul>

              <div className={`cursor-pointer ${size < 991 ? "d-block d-lg-none" : "d-none"}`}>
                <button onClick={toggleTrueFalse} className={`cursor-pointer`}>
                  <i className="elegant-icon icon_menu text-3xl"></i>
                </button>
                <NavMenu isToggled={isToggled} />
              </div>
            </nav>
          </div>
          <div className="float-right header-tools text-muted font-small">
            <ul className="header-social-network d-inline-block list-inline mr-15">
              <li className="list-inline-item">
                <Link href="/#">
                  <a className="" target="_blank" href="#">
                    <i className="elegant-icon icon_heart"></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/#">
                  <a className="" target="_blank" href="#">
                    <i className="elegant-icon icon_cart"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
