import React from "react";
import { MoonLoader } from "react-spinners";

export default function Spinner({ visible }) {
  return <MoonLoader size={15} color={"#4875f1"} loading={visible} />;
}
