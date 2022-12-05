import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

const Model = ({ models }: any) => {
  console.log(models);
  const [data, setData] = useState();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data } = await axios.get(
  //         'https://stage55.datgate.com/api/json/vehicles/uq.json?type=counts&url=inventory'
  //       );
  //       setData(data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div>
      {JSON.stringify(models, undefined, 2)}
      {/* {data && JSON.stringify(data, undefined, 2)} */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  let url = `https://api.dealertower.com/mercedes-benz/model/${params?.name}`;
  const result = await axios.get(url);

  return {
    props: {
      models: result.data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let url = `https://api.dealertower.com/mercedes-benz/model`;
  const allModels = await axios.get(url);

  return {
    paths: allModels.data.data.map((model: any) => ({
      params: { name: model.name },
    })),
    fallback: false,
  };
};

export default Model;
