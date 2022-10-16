export const handleUrl: any = (filters: any) => {
  //hanling queries to url
  const normalizedFilters = objToString(filters);
  return `${normalizedFilters}`;
};

//change filter objects to string
function objToString(obj: any) {
  return Object.entries(obj).reduce((str: string, [p, val]) => {
    return `${str}${p === 'vehicleYear' ? 'year' : p}=${val}/`;
  }, '');
}
