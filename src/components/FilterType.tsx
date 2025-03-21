import { buildQueryString } from "@/utils/buildQueryString";
import Link from "next/link";

interface IProps {
  filterTypes: string[];
  typeList: string[];
}

const FilterType = ({ filterTypes, typeList }: IProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <span>Types: </span>
      {typeList.map((renderType) => {
        const isSelected = filterTypes.includes(renderType);
        const updatedFilters = filterTypes.includes(renderType)
          ? filterTypes.filter((t) => t !== renderType)
          : [...filterTypes, renderType];
        return (
          <Link
            key={renderType}
            href={`/home?${buildQueryString({
              page: 1,
              type:
                updatedFilters.length > 0
                  ? updatedFilters.join(",")
                  : undefined,
            })}`}
          >
            <button
              className={`border p-4 cursor-pointer  ${
                isSelected ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {renderType}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default FilterType;
