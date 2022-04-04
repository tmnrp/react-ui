/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { CONST_PAGES } from "../utils/contants";
import { IExplorerItem } from "@tmnrp/react-explorer";
//import { IExplorerItem } from "../packages/explorer/src";

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
export const getExplorerContent = (): Array<IExplorerItem> => [
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Breadcrumbs",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        label: "Example",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        url: CONST_PAGES.BREADCRUMBS.PATH,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="interests" />,
    label: "Google material icons",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        url: CONST_PAGES.GOOGLE_MATERIAL_ICONS.PATH,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="sync" />,
    label: "Progressbar",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        url: CONST_PAGES.PROGRESSBAR.PATH,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="format_paint" />,
    label: "Theme-switcher",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        url: CONST_PAGES.THEME_SWITCHER.PATH,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="view_sidebar" />,
    label: "Sidebar",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        url: CONST_PAGES.SIDEBAR.PATH,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="account_tree" />,
    label: "Explorer",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        url: CONST_PAGES.EXPLORER.PATH,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="account_tree" />,
    label: "Testing",
    props: { className: "flex space-x-2 mb-1" },
    items: [
      {
        icon: <GoogleMaterialIcons iconName="account_tree" />,
        label: "1",
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
        url: "https://www.google.com/",
      },
      {
        icon: <GoogleMaterialIcons iconName="account_tree" />,
        label: "2",
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
      },
      {
        icon: <GoogleMaterialIcons iconName="account_tree" />,
        label: "3",
        props: { className: "flex space-x-2 pl-4 mb-1 hover:text-primary" },
      },
    ],
  },
];
