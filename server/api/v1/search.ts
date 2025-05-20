interface Stations {
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

  const data = await $fetch<Stations>(`${config.apiSearch}q=${search}`);

  if (data) {
    const dataFilter = data.hits.hits.filter(
      (x) => x._source.type.toLowerCase() == "channel"
    );

    return { hits: dataFilter };
  }

  return null;
});
