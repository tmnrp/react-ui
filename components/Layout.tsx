import { useRouter } from "next/router";
import { CONST_PAGES, CONST_CONFIG } from "../utils/contants";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Aside } from "./sidebar/Sidebar";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";

//
export const Layout = ({ children }: { children: React.ReactNode }) => {
  //
  return (
    <div
      className={`
        flex flex-col 
        text-default bg-default
        h-screen
      `}
    >
      <Header
        className={`sticky top-0 z-10 flex justify-between py-4 pl-4 pr-2 border-b dark:border-gray-700`}
      />

      <section className="flex flex-1 overflow-auto">
        <Aside className="flex flex-col overflow-x-hidden overflow-y-auto border-r dark:border-secondary-dark" />
        <main className="flex-1 overflow-hidden">{children}</main>
      </section>

      <Footer className="flex justify-between px-2.5 py-2 shadow-inner-default" />
    </div>
  );
};

//
const Header = ({ className }: { className: string }) => (
  <header className={className}>
    <Logo />

    <div className="flex">
      <ThemeSwitcher />
    </div>
  </header>
);

//
const Logo = () => {
  const router = useRouter();

  //
  return (
    <div
      className={`
        text-xl font-extrabold tracking-widest cursor-pointer dark:text-gray-300
        ${
          router.pathname === CONST_PAGES.LANDING.PATH ? "text-emerald-600" : ""
        }
      `}
      onClick={() => router.push(CONST_PAGES.LANDING.PATH)}
    >
      {CONST_CONFIG.LOGO.TEXT}
    </div>
  );
};

//
const Footer = ({ className }: { className: string }) => (
  <footer className={className}>
    <div className="flex space-x-3">
      <div className="flex space-x-2 cursor-pointer text-default-hover">
        <GoogleMaterialIcons iconName="email" />
        <div
          className="hidden md:block whitespace-nowrap"
          onClick={() => window.open("mailto:harsh.harish1@gmail.com")}
        >
          harsh.harish1@gmail.com
        </div>
      </div>

      <div className="flex space-x-2 cursor-pointer text-default-hover">
        <GoogleMaterialIcons iconName="phone" />
        <div
          className="hidden md:block whitespace-nowrap"
          onClick={() => window.open("tel:+917208463103")}
        >
          +91-7208463103
        </div>
      </div>

      <div className="flex space-x-2 cursor-pointer text-default-hover">
        <GoogleMaterialIcons iconName="place" />
        <div
          className="hidden md:block whitespace-nowrap"
          onClick={() =>
            window.open("https://goo.gl/maps/yxYCV2Pt45uzAVUs5", "_blank")
          }
        >
          Dombivli
        </div>
      </div>
    </div>

    <div className="flex space-x-3">
      <GoogleMaterialIcons
        className="cursor-pointer text-default-hover"
        iconName="work"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/harsh-parammal-0a831a50/",
            "_blank"
          )
        }
      />
      <GoogleMaterialIcons
        className="cursor-pointer text-default-hover"
        iconName="developer_mode"
        onClick={() => window.open("https://github.com/tmnrp", "_blank")}
      />
    </div>
  </footer>
);
