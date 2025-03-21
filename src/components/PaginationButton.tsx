import { buildQueryString } from "@/utils/buildQueryString";
import Link from "next/link";

interface IProps {
  page: number;
  queryString: Record<string, string | undefined>;
  totalFilter: number;
}

const PaginationButton = ({ page, queryString, totalFilter }: IProps) => {
  return (
    <div className="text-center w-full">
      {Number(page) > 1 && (
        <Link
          href={`/home?${buildQueryString({
            ...queryString,
            page: Number(page) - 1,
          })}`}
        >
          <button className="border rounded cursor-pointer p-2 bg-blue-500 text-white mx-auto">
            Previous
          </button>
        </Link>
      )}
      {totalFilter === 24 && (
        <Link
          href={`/home?${buildQueryString({
            ...queryString,
            page: Number(page) + 1,
          })}`}
        >
          <button className="border rounded cursor-pointer p-2 bg-blue-500 text-white mx-auto">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default PaginationButton;
