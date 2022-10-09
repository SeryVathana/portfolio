import React from "react";
import Card from "./components/Card";
import TopicGenre from "./components/TopicGenre";
import { dataBlog, blogTopic } from "./data/data";
import NAV from "./Nav";
export default function Blogs() {
  return (
    <div>
      <NAV />
      <div className="bgTextbg-gray-800 absolute w-full h-full z-0"></div>
      <div className="px-20 w-full">
        <section className="grid grid-cols-2 gap-10 mb-10">
          <div className="bg-gray-800 text-gray-200 p-10 h-96 rounded-md shadow-lg">
            1
          </div>
          <div className="bg-gray-800 text-gray-200 p-10 rounded-md shadow-lg">
            2
          </div>
        </section>
        <h1 className="text-3xl font-bold">Insight Topic</h1>
        <section className="flex my-5 gap-4">
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
        <section className="grid"></section>
        <h1 className="text-3xl font-bold mt-5">Blogs</h1>
        <section className="grid grid-cols-3 gap-10 my-5">
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
