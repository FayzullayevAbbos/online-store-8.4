"use client";

import Link from "next/link";

function Cards({ post }: any) {
  let imgUrl = "";

  return post.images[2] ? (
    <div className="md:p-4 lg:p-7 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center pb-6">
      <Link href={`products/` + post.id}>
        <img
          className="w-full rounded-lg self-stretch h-72 min-h-56 mb-7 object-cover"
          src={`${post.images[1]}`}
          alt=""
        />
      </Link>
      <div>
        <p className="font-semibold text-xl mb-2 h-auto">{post.title}</p>
        <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
          {`${post.description.substr(0, 12)} ...`}
          <Link
            className="font-semibold text-grayshade-100  text-xs ml-1"
            href={`products/` + post.id}
          >
            Read More
          </Link>
        </p>
        <span className="lable ">{post.category.name}</span>
      </div>
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
            {post.price}
          </p>
          <p className="font-semibold text-grayshade-300  text-lg">$ 1,200</p>
        </div>
        <div className="flex  justify-between items-center ">
          <button className="h-8 px-4 button bg-[#703BF7] text-white rounded-lg ">
            {" "}
            Add To Cart{" "}
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Cards;
