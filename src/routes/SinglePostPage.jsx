import { Link } from "react-router-dom";
import Image from "../components/Image";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            fuga.
          </h1>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Written by</span>
            <Link className="text-blue-800">John Abraham</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            accusantium, similique aliquam voluptatibus modi aliquid laborum
            quos minima eius eligendi sapiente expedita. Odit distinctio porro
            optio, tempore magni minima eligendi.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src={"featuredPost.jpg"}
            className={"h-400 rounded-xl object-contain"}
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut
            dolorum nostrum temporibus corrupti minus sunt in, iure id sint
            natus vero eaque fugiat quis dicta odio repellendus ipsum! Ratione
            officiis delectus nostrum nihil velit? Neque, fuga? Quam ratione
            error quis dicta, autem, doloremque repellendus ipsa laboriosam
            velit quisquam officiis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            saepe debitis, quam at neque provident assumenda cupiditate,
            laudantium beatae amet, dicta culpa distinctio nesciunt! Saepe,
            ipsum officia officiis cumque nihil autem corrupti ea numquam vero
            quisquam aut a corporis rerum magnam quae accusantium quia in et
            impedit velit laboriosam obcaecati!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            saepe debitis, quam at neque provident assumenda cupiditate,
            laudantium beatae amet, dicta culpa distinctio nesciunt! Saepe,
            ipsum officia officiis cumque nihil autem corrupti ea numquam vero
            quisquam aut a corporis rerum magnam quae accusantium quia in et
            impedit velit laboriosam obcaecati!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src={"default-image.jpg"}
              className={"w-12 h-12 rounded-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
