import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'

export const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            accusamus porro dolor delectus assumenda deserunt maxime, placeat
            dignissimos sit dolores autem reprehenderit? Reiciendis incidunt
            ducimus voluptatem. Quod voluptas vel et.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            vitae tempora repellat veritatis explicabo quas tempore, quia
            reiciendis saepe nobis iste doloremque, esse qui corrupti id nihil
            eum obcaecati temporibus!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aut!
            Reiciendis nam iusto quae blanditiis.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore possimus ea voluptas quibusdam cumque, at numquam minus expedita atque tenetur nihil neque esse magnam incidunt eos excepturi rerum. Dolor, dolorum.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Conveniece:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore possimus ea voluptas quibusdam cumque, at numquam minus expedita atque tenetur nihil neque esse magnam incidunt eos excepturi rerum. Dolor, dolorum.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore possimus ea voluptas quibusdam cumque, at numquam minus expedita atque tenetur nihil neque esse magnam incidunt eos excepturi rerum. Dolor, dolorum.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
