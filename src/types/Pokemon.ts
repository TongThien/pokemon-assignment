export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface PokemonDetails {
  name: string;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: { front_default: string };
        };
      };
    };
  };
  types: { type: { name: string } }[];
  order: number;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface TypeListResponse {
  results: PokemonType[];
}

export interface PokemonGif {
  name: string;
  gifUrl: string;
  types: string[];
  number: number;
}

export interface TypeResponse {
  pokemon: { pokemon: { name: string; url: string } }[];
}
