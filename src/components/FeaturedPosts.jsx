import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-4 flex flex-col lg:flex-row gap-4">
      {/* FirstPost */}
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        {/* Image */}
        <Image
          src={"featuredPost.jpg"}
          className={"rounded-lg object-cover"}
          h={400}
          w={400}
        />
        {/* details */}
        <div className="flex items-center gap-2">
          <h1 className="font-medium lg:text-xl">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design </Link>
          <span className="text-green-300">2 Days ago</span>
        </div>
        {/* title */}
        <Link
          to={"/test"}
          className="text-lg lg:text-xl font-medium lg:font-semibold"
        >
          Empowering the web with modern technologies, creative problem-solving,
          and a commitment to building intuitive, high-performance web
          applications.
        </Link>
      </div>
      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* 1 */}
        <div className="lg:h-1/3 flex justify-between gap-2">
          <Image
            src={"featuredPost1.jpeg"}
            className={"rounded-lg object-cover w-2/3 aspect-video"}
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h2 className="font-medium">02.</h2>
              <Link className="text-blue-800 font-medium">
                Science and Technology
              </Link>
              <span className="text-gray-500 text-sm">2 Days ago</span>
            </div>
            {/* title */}
            <Link
              to={"/test"}
              className="text-base lg:text-xl font-medium lg:font-semibold md:text-xl"
            >
              The future innovations of Science and technology will chnage the
              world entire for upcoming generations
            </Link>
          </div>
        </div>
        {/* 2 */}
        <div className="lg:h-1/3 flex justify-between gap-2">
          <Image
            src={"featuredPost3.png"}
            className={"rounded-lg object-cover w-2/3 aspect-video"}
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h2 className="font-medium">03.</h2>
              <Link className="text-blue-800 font-medium">
                Health and fitness
              </Link>
              <span className="text-gray-500 text-sm">2 Days ago</span>
            </div>
            {/* title */}
            <Link
              to={"/test"}
              className="text-base lg:text-xl font-medium lg:font-semibold md:text-xl"
            >
              The future innovations of Science and technology will chnage the
              world entire for upcoming generations
            </Link>
          </div>
        </div>
        {/* 3 */}
        <div className="lg:h-1/3 flex justify-between gap-2">
          <Image
            src={"featuredPost2.png"}
            className={"rounded-lg object-cover w-2/3 aspect-video"}
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h2 className="font-medium">04.</h2>
              <Link className="text-blue-800 font-medium">Web Design</Link>
              <span className="text-gray-500 text-sm">2 Days ago</span>
            </div>
            {/* title */}
            <Link
              to={"/test"}
              className="text-base lg:text-xl font-medium lg:font-semibold md:text-xl"
            >
              The future innovations of Science and technology will chnage the
              world entire for upcoming generations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
