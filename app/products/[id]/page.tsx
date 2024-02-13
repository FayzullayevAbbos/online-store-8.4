"use client";
const singlePost = async (id: number) => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products/" + id);
  return res.json();
};

async function page({ params }: { params: { id: number } }) {
  const post = await singlePost(params.id);
 

  return (
    <div className="flex items-center justify-center max-w-7xl m-auto wrapper mt-4">
      <div className="relative flex lg:flex-row flex-col bg-zinc-100 dark:bg-grayshade-400 border border-grayshade-300 rounded-xl max-md:p-4 lg:p-10 ">
        <a
          className="absolute text-xs lg:text-base flex items-center dark:text-grayshade-50 text-grayshade-300 bg-zinc-200 dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 px-4 py-2 top-[1%] right-[2%] rounded-full"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="text-grayshade-400 dark:text-white mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
          </svg>{" "}
          Back
        </a>
        <div className="flex lg:flex-row flex-col-reverse justify-around items-center">
          <div className="flex flex-row lg:flex-col justify-around">
            <img
              className="lg:w-20 md:w-16 w-14 my-5 max-md:mx-2 max-lg:mx-5  rounded-xl cursor-pointer opacity-30"
              src={`${post.images[1]}`}
              alt=""
            ></img>
          </div>
          <img
            className="lg:w-4/6 max-sm:w-full rounded-xl object-cover"
            src={`${post.images[1]}`}
            alt=""
          ></img>
        </div>
        <div className="lg:p-8 max-md:p-0 flex flex-col justify-center">
          <p className="text-4xl max-sm:text-2xl font-semibold">post.title</p>
          <span className="lable w-max">Clothes</span>
          <p className="text-xl max-sm:text-base font-medium text-grayshade-50 my-10"></p>
          <div className="flex justify-between items-center">
            <div className=" flex  gap-3">
              <p className="text-grayshade-100 dark:text-grayshade-50 text-lg">
                Price
              </p>
              <p className="font-bold text-grayshade-100 text-2xl">
                ${post.price}
              </p>
            </div>
            <div className="flex rounded-lg  bg-[#703BF7] text-white justify-between items-center">
              <button className=" px-4 button"> Add To Cart </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
