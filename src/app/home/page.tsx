import FilterType from "@/components/FilterType";
import PaginationButton from "@/components/PaginationButton";
import PokemonCard from "@/components/PokemonCard";
import { getListPokemonByTypes } from "@/infra/apis/getListPokemonByTypes";
import { getPokemonTypes } from "@/infra/apis/getPokemonTypes";
import { getTotalPokemon } from "@/infra/apis/getTotalPokemon";
import { getListPokemonWithLogo } from "@/infra/services.ts/getListPokemonWithLogo";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const queryString = await searchParams;
  const page = Number(queryString.page) || 1;
  const filterTypes = queryString.type ? queryString.type.split(",") : [];

  const [total, typeList, list, filterList] = await Promise.all([
    getTotalPokemon(),
    getPokemonTypes({}),
    getListPokemonWithLogo({ page, filterTypes }),
    getListPokemonByTypes(page, filterTypes),
  ]);

  const pokemonData = filterTypes.length > 0 ? filterList : list;

  return (
    <div className="px-10">
      <h2 className=" text-center">Welcome to Pokemon world</h2>
      <div>Total count : {total}</div>
      <FilterType filterTypes={filterTypes} typeList={typeList} />
      <div className="grid grid-cols-6 gap-16 my-6">
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.number} pokemon={pokemon} />
        ))}
      </div>

      <PaginationButton
        page={Number(page)}
        totalFilter={pokemonData.length}
        queryString={queryString}
      />
    </div>
  );
}
