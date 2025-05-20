interface Channels {
  hits: {
    hits: {
      _id: string;
      _source: {
        code: string;
        stream: string;
        title: string;
        subtitle: string;
        type: string;
      };
    }[];
  };
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { search } = getQuery(event);

  const data = await $fetch<Channels>(`${config.apiSearch}q=${search}`);
  console.log(data)

  return data;
});
