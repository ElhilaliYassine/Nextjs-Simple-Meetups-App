import MeetupList from "../components/meetups/MeetupList";
import { db } from "./config/firebase";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Meetups app" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const response = db.collection("meetups");
  const data = await response.get();
  return {
    props: {
      meetups: data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }),
      revalidate: 1,
    },
  };
}

export default HomePage;
