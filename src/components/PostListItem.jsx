import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src={"static_WdgC5FCz6"}
          className={"rounded-xl object-cover w-full"}
          w={735}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={"/test"} className="text-4xl font-semibold">
          Web design is the process of creating visually appealing and
          user-friendly
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Abraham</Link>
          <span>on</span>
          <Link className="text-blue-800">Web design</Link>
          <span>2 days agos</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          atque fugit praesentium tempore libero, porro quisquam esse sequi
          repellendus tempora! Deleniti, beatae quam. Quam voluptatibus labore
          itaque laborum ab ducimus?
        </p>
        <Link to={"/test"} className="text-blue-500">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
