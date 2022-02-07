/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import { CONST_PAGES } from "../utils/contants";
import { ISidebarMenu } from "../components/sidebar/Sidebar";

//
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContextProvider>
      <Layout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
};

export default MyApp;

//
export const sidebarContents: Array<ISidebarMenu> = [
  {
    iconName: "double_arrow",
    title: "Breadcrumbs",

    items: [
      {
        title: "Examples",
        iconName: "view_list",
        itemKey: CONST_PAGES.BREADCRUMBS.KEY,
        pathname: CONST_PAGES.BREADCRUMBS.PATH,
      },
    ],
  },
  {
    iconName: "interests",
    title: "Google material icons",

    items: [
      {
        title: "Examples",
        iconName: "view_list",
        itemKey: CONST_PAGES.GOOGLE_MATERIAL_ICONS.KEY,
        pathname: CONST_PAGES.GOOGLE_MATERIAL_ICONS.PATH,
      },
    ],
  },
  {
    iconName: "sync",
    title: "Progressbar",

    items: [
      {
        title: "Examples",
        iconName: "view_list",
        itemKey: CONST_PAGES.PROGRESSBAR.KEY,
        pathname: CONST_PAGES.PROGRESSBAR.PATH,
      },
    ],
  },
  {
    iconName: "smart_button",
    title: "Theme-switcher",

    items: [
      {
        title: "Examples",
        iconName: "view_list",
        itemKey: CONST_PAGES.BUTTONS.KEY,
        pathname: CONST_PAGES.BUTTONS.PATH,
      },
    ],
  },
  {
    iconName: "smart_button",
    title: "Sidebar",

    items: [
      {
        title: "Examples",
        iconName: "view_list",
        itemKey: CONST_PAGES.SIDEBAR.KEY,
        pathname: CONST_PAGES.SIDEBAR.PATH,
      },
    ],
  },
];
