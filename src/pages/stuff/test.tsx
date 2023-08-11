import { withApp } from "@/lib/withApp";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

export const Test: React.FC = (props) => {
  return (
    <div className="p-2">
      <p>
        <Link href="/">Go back</Link>
      </p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  console.log(ctx.locale)
  return {
    props: { locale: ctx.locale },
  };
};

export default withApp(Test);
