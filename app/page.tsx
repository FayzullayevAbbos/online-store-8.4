"use client";
import { Suspense } from "react";
import Cards from "./components/Cards";
import FormEl from "./components/FormEl";
import CardSkliton from "./components/CardSkliton";

interface Products {
  id: number;
  title: string;
  price: string;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

const getData: any = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products/");
  return res.json();
};

export default async function Home() {
  const posts = await getData();

  return (
    <div className="wrapper ">
      <div className="lg:w-12/12 md:w-11/12">
        <FormEl posts={posts} />
      </div>

      <div className="w-full flex lg:flex-row flex-col-reverse">
        <div className="lg:w-full md:px-24 px-4  md:w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-6 m-auto">
          {posts.map((post: Products) => {
            return (
              <Suspense fallback={<CardSkliton />}>
                <Cards post={post} />
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
}
