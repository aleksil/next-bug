import { AppLayout } from "./AppLayout";

export const withApp = <Props,>(component: React.ComponentType<Props>) => {
  // eslint-disable-next-line react/display-name
  return (props: Props) => {
    return <AppLayout component={component} props={props}></AppLayout>;
  };
};
