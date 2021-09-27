import MeetupDetail from "../../components/meetups/MeetupDetail";
import { db } from "../config/firebase";
import Head from "next/head";
import { useRouter } from "next/router";

function MeetupDetails(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Meetup {router.query.meetupId}</title>
        <meta
          name="description"
          content={`Meetup id: ${router.query.meetupId}`}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const response = db.collection("meetups");
  const data = await response.get();
  const meetups = data.docs.map((doc) => doc.id);
  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const response = db.collection("meetups").doc(meetupId);
  const get = await response.get();
  const data = get.data();
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: data.title,
        image: data.image,
        address: data.address,
        description: data.description,
      },
    },
  };
}

export default MeetupDetails;
