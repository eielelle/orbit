interface GeoLocation {
  eu: boolean;
  country_code: string;
  region_code: string;
  latitude: number;
  longitude: number;
  city: string;
}

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

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const geo = await $fetch<GeoLocation>(config.apiGeo as string);

  if (geo) {
    const ph = await $fetch<Stations>(`${config.apiSearch}q=${"philippines"}`);

    if (ph) {
      const phFilter = ph.hits.hits.filter(
        (x) => x._source.type.toLowerCase() == "channel"
      );

      return { hits: phFilter };
    }

    return ph;
  }

  return null;
});
