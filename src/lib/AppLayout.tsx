import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface LayoutProps {
  component: React.ComponentType<any>;
  props: any;
}

export const AppLayout = ({ component, props }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.locale === "default") {
      router.replace(router.asPath, router.asPath, { locale: "nb" });
    }
  }, [router]);

  const Component = component;
  return <Component {...props} />;
};
