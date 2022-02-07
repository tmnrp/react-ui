/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import { CONST_PAGES } from "../utils/contants";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { IExplorerItem } from "./explorer-page";

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
export const EXPLORER_CONTENT: Array<IExplorerItem> = [
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Breadcrumbs",
    itemKey: CONST_PAGES.BREADCRUMBS.KEY,

    items: [
      {
        label: "Example 1",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.BREADCRUMBS.KEY,
      },
      {
        label: "Example 2",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.BREADCRUMBS.KEY,
      },
      {
        label: "Example 3",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.BREADCRUMBS.KEY,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="interests" />,
    label: "Google material icons",
    itemKey: CONST_PAGES.GOOGLE_MATERIAL_ICONS.KEY,

    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.GOOGLE_MATERIAL_ICONS.KEY,
        onClick: () => {
          alert("lolwa");
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="sync" />,
    label: "Progressbar",
    itemKey: CONST_PAGES.PROGRESSBAR.KEY,

    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.PROGRESSBAR.KEY,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Theme-switcher",
    itemKey: CONST_PAGES.BUTTONS.KEY,

    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.BUTTONS.KEY,
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Sidebar",
    itemKey: CONST_PAGES.SIDEBAR.KEY,

    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemKey: CONST_PAGES.SIDEBAR.KEY,
      },
    ],
  },
];
