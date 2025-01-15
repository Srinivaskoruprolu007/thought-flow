import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:bloxk">
        <Image src={"static_WdgC5FCz6"} className={"rounded-xl object-cover"} h={200} w={200}/>
      </div>
    </div>
  );
};

export default PostListItem;
