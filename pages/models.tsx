import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

const models = ({ models }: any) => {
  return (
    <ul>
      {models.map((model: any) => (
        <li>
          <Link href={`/models/${model.name}`}>
            <a href={`/models/${model.name}`}>{model.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default models;

// export const getServerSideProps = async (router: any) => {
//   let url = `https://api.dealertower.com/mercedes-benz/model`;
//   const result = await axios.get(url);

//   return {
//     props: {
//       models: result.data.data,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let url = `https://api.dealertower.com/mercedes-benz/model`;
  const result = await axios.get(url);

  return {
    props: {
      models: result.data.data,
    },
  };
};
