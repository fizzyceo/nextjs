"use client";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [test, setTest] = useState("");
  return (
    <div>
      Image:
      <Image
        src={
          "https://img.redbull.com/images/c_crop,x_140,y_0,h_717,w_1075/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2019/03/22/e8f08713-04ff-4d2a-87cd-33aeb9ed13a7/teemo-league-of-legends-champion"
        }
        alt="Apache Guaco"
        width={500}
        height={500}
      />
    </div>
  );
};

export default About;
