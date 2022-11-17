import Link from "components/Link";
import Head from "next/head";

const Custom404 = (): JSX.Element => (
  <>
    <Head>
      <title>404 | Samuel Kraft</title>
    </Head>
    <div className="flex flex-col gap-2">
      <h1>404 - Page not found</h1>
      <p className="text-secondary">
        Uh oh! This page does not exists, maybe you clicked an old link or
        misspelled. Please try again…
      </p>
      <div className="h-2" />
      <Link href="/" underline>
        Return home
      </Link>
    </div>
  </>
);

export default Custom404;
