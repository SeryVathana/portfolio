import React from "react";
import Card from "./components/Card";
import TopicGenre from "./components/TopicGenre";
import { dataBlog, blogTopic } from "./data/data";
import NAV from "./Nav";
export default function Blogs() {
  return (
    <div>
      <NAV />
      <div className="text-gray-200 absolute w-full h-full z-0"></div>
      <div className="px-10 lg:px-20 w-full">
        <section className="grid grid-cols-2 gap-10 mb-10 text-gray-300">
          <div className="bg-blue-300 p-10 h-40 md:h-56 lg:h-96 rounded-md shadow-lg col-span-2 md:col-span-1">
            1
          </div>
          <div className="bg-blue-300 p-10 h-40 md:h-56 lg:h-96 rounded-md shadow-lg col-span-2 md:col-span-1">
            2
          </div>
        </section>
        <h1 className="text-xl md:text-3xl font-bold text-gray-300">
          Insight Topic
        </h1>
        <section className="flex flex-wrap mt-2 md:mt-5 mb-10 md:mb-20 gap-2 text-gray-300">
          {blogTopic.map((val, ind) => {
            return (
              <>
                <div key={ind}>
                  <TopicGenre title={val.title} />
                </div>
              </>
            );
          })}
        </section>
        <h1 className="text-xl md:text-3xl font-bold text-gray-300">Blogs</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-5 mb-20 text-gray-300">
          {dataBlog.map((val, ind) => {
            return (
              <>
                <div key={ind}>
                  <Card image={val.image} title={val.title} des={val.des} />
                </div>
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
}
