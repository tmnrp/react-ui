/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { NextRouter } from "next/router";
import { CONST_PAGES } from "../utils/contants";
import { IExplorerItem } from "@tmnrp/react-explorer";

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
export const getExplorerContent = ({
  router,
}: {
  router: NextRouter;
}): Array<IExplorerItem> => [
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Breadcrumbs",
    items: [
      {
        label: "Example 1",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.BREADCRUMBS.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="interests" />,
    label: "Google material icons",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.GOOGLE_MATERIAL_ICONS.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="sync" />,
    label: "Progressbar",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.PROGRESSBAR.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Theme-switcher",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.THEME_SWITCHER.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Sidebar",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.SIDEBAR.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Explorer",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.EXPLORER.PATH),
        },
      },
    ],
  },
];
