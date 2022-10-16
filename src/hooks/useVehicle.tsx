import useSWR, { useSWRConfig } from 'swr';
import CarClient from '../client/client';

const fetcher = (url: string) => CarClient.get(url).then((res) => res.data);

const useVehicle = (id: any) => {
  const { cache } = useSWRConfig();

  const { data, error } = useSWR(
    id ? `opt.json?type=vdpopt&vehid=${id}` : null,
    fetcher,
    {
      onSuccess(data) {
        const { year, make, model } = data;
        window.location.assign(`#/vdp/${year}/${make}/${model}/${data.id}`);
        cache.set(`${data.id}`, data.id);
      },
    }
  );

  const isLoading = !data && !error;

  return { data, isLoading };
};

export default useVehicle;
