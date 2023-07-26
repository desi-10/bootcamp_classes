import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { FcGraduationCap } from "react-icons/fc";
import { TbBulb } from "react-icons/tb";
import { PiBookOpenThin } from "react-icons/pi";
import { CiGps } from "react-icons/ci";
import Connect from "./components/connect/Connect";
import Courses from "./components/courses/Courses";

export default function Home() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="p-7 flex flex-1 w-[90%] lg:w-[900px] mx-auto pt-14">
          <section className="w-full">
            <div className="mb-3 text-red-500 flex">
              <span className="mr-3">
                <FcGraduationCap />
              </span>
              <small>Best Learning platform</small>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold my-5 text-black">
              Getting Best <br />
              Quality education <br />
              Is Now More
              <RoughNotation type="underline" show={true} color="red">
                <span className="text-4xl md:text-5xl ml-3 rough">Easier</span>
              </RoughNotation>
            </h1>

            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisi
            </p>

            <a
              href="/assets/Bootcamp_Application_Letter_123036.pdf"
              download="Bootcamp_Application_Letter"
              className="bg-red-500 px-5 py-3 rounded-full mb-5 text-white"
            >
              Enroll Now
            </a>
          </section>

          <div className="hidden md:flex w-[50%]">
            <Image
              src="/assets/3d-business-young-women-standing-and-smiling.png"
              alt="image"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 mb-20">
        <ul className="flex flex-col md:flex-row  w-[90%] lg:w-[900px] mx-auto justify-between items-center text-black font-bold p-10">
          <li className="text-red-400 text-center mb-5 md:mb-0">
            <p className="text-3xl md:text-4xl text-center">8K+</p>
            <small>students</small>
          </li>
          <li className="text-red-400 text-center mb-5 md:mb-0">
            <p className="text-3xl md:text-4xl text-center">20+</p>
            <small>Quality courses</small>
          </li>
          <li className="text-red-400 text-center mb-5 md:mb-0">
            <p className="text-3xl md:text-4xl text-center">10+</p>
            <small>Experience mentors</small>
          </li>
        </ul>
      </section>

      <section className="bg-white w-[90%] lg:w-[1000px] mx-auto p-5 mb-20">
        <h3 className="text-4xl text-center text-black font-bold">
          What we do
        </h3>
        <p className="text-center text-xs mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <section className="border rounded-lg p-5">
            <div className="flex items-center mb-5">
              <i className="mr-3 text-xl">
                <PiBookOpenThin />
              </i>
              <p className="text-xl font-bold">Mission</p>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit
            dolorum nemo adipisci id voluptatem corrupti dignissimos. Debitis
            iure, dolorum minima officiis, laborum animi impedit sit, eaque nisi
            quaerat amet.
          </section>
          <section className="border rounded-lg p-5">
            <div className="flex items-center mb-5">
              <i className="mr-3 text-xl">
                <TbBulb />
              </i>
              <p className="text-xl font-bold">Vision</p>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit
            dolorum nemo adipisci id voluptatem corrupti dignissimos. Debitis
            iure, dolorum minima officiis, laborum animi impedit sit, eaque nisi
            quaerat amet.
          </section>
          <section className="border rounded-lg p-5">
            <div className="flex items-center mb-5">
              <i className="mr-3 text-xl">
                <CiGps />
              </i>
              <p className="text-xl font-bold">Target</p>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit
            dolorum nemo adipisci id voluptatem corrupti dignissimos. Debitis
            iure, dolorum minima officiis, laborum animi impedit sit, eaque nisi
            quaerat amet.
          </section>
        </div>
      </section>

      <Courses />
      <Connect />
    </>
  );
}