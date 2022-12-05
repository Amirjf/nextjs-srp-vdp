import axios from 'axios';
import React from 'react';

const Page = ({ pageContent: { data } }: any) => {
  console.log(data, 'data');
  return <div dangerouslySetInnerHTML={{ __html: data.page.content }}></div>;
};

export const getServerSideProps = async ({ res, params }: any) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=159'
  );

  let url = 'https://api.amir-jf.ir/graphql';
  const result = await axios.post(url, {
    query: `
      query NewQuery {
        page(id: "/${params.slug[0]}/", idType: URI) {
          id
          content
        }
      }
      `,
  });

  console.log(result, 'ssdssa');
  console.log(`"/${params.slug[0]}/"`, 'ssdssa');
  return {
    props: {
      pageContent: result.data,
    },
  };
};

export default Page;
