import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import DefaultLayout from "@/modules/core/components/layouts/DefaultLayout";
import { AppRoute } from "@/router/types";

export const coreRoutes: AppRoute[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true, 
        element: <IndexPage />,
      },
      {
        path: "docs", 
        element: <DocsPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      
      // {
      //   path: "items/:itemId",
      //   element: <ItemDetailPage />,
      // },
    ],
  },

];