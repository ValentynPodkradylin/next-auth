import { getSession } from "next-auth/react";
// import type {GetServerSideProps} from 'next'

function Blog(post) {
  const { data } = post;

  console.log(data);
  return <h1>Blog page</h1>;
}

export default Blog;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
      permanent: false,
    };
  }

  return {
    props: {
      session,
      data: session ? "list of 100 post" : null,
    },
  };
};
