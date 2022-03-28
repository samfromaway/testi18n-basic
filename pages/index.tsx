import type { NextPage } from 'next';

export function getStaticProps({ locale }: any) {
  return { props: { locale }, revalidate: 10 };
}

const Home: NextPage = ({ locale }: any) => {
  return <div>Test Base Next App with Locale: {locale}</div>;
};

export default Home;
