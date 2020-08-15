export class MovieModel {

  adult: boolean;
  credits: {
    cast: [
      { name: string; profile_path: string; character: string; id: number }
    ];
    crew: [{ job: string; name: string }];
  };
  belongs_to_collection: { name: string; id: number; backdrop_path: string };
  budget: number;
  revenue: number;
  runtime: number;
  production_companies: [{ name: string; logo_path: string }];
  status: string;
  type: string;
  networks: [{ name: string; logo_path: string }];
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  last_air_date: string;
  media_type: string;
  tagline: string;
  name: string;
  origin_country: [string];
  original_name: string;
  videos: { results: [{ key: string }] };
  images: [];
  created_by: [];
}

