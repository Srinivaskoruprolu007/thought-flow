import { Link } from "react-router-dom";
import { ArrowUpLeftFromCircle } from "lucide-react";
import MainCategories from "../components/MainCategories";

const HomePage = () => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to={"/"} className="text-gray-500 hover:text-gray-600">
          Home
        </Link>
        <span>•</span>
        <span className="text-blue-800">Blog and Articles</span>
      </div>
      {/*Introduction */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div>
          <h1 className="text-lg font-bold text-gray-800 md:text-2xl lg:text-3xl">
            Welcome to ThoughtFlow – Where Ideas Find Their Voice
          </h1>
          <p className="mt-6 text-base md:text-lg">
            ThoughtFlow is your space to unleash creativity, share compelling
            stories, and connect with a community of thinkers and writers. Dive
            into an engaging world of blogs and let your thoughts flow
            seamlessly into words
          </p>
        </div>
        {/* Animated button */}
        <Link
          to="/write"
          className="hidden md:block relative animate-spin animatedButton"
        >
          <svg
            viewBox="0 0 200 200"
            width={"200"}
            height={"200"}
            className="cursor-pointer text-base tracking-wider"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset={"0%"}>
                Write user Story.
              </textPath>
              <textPath href="#circlePath" startOffset={"50%"}>
                Share your idea.
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 bottom-0 right-0 left-0 m-auto w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center ">
            <ArrowUpLeftFromCircle className="text-white" />
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
    </div>
  );
};

export default HomePage;
