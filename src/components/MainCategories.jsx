import { Link } from "react-router-dom";
import { LucideSearch } from "lucide-react";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-xl xl:rounded-full p-2 shadow-md items-center justify-center gap-6">
      <div className="flex-1 flex items-center  justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-3 py-1.5"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=data-bases"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5"
        >
          Marketing
        </Link>
      </div>
      <span className="text-lg font-bold">|</span>
      <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
        <LucideSearch className="text-gray-300" />
        <input
          type="text"
          placeholder="Search a post"
          className="bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default MainCategories;
