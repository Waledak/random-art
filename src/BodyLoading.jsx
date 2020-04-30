import React from "react";
import { SemipolarLoading } from "react-loadingg";
const BodyLoading = (props) => (
  <article>
    <SemipolarLoading size={props.size} color={props.color} />
  </article>
);
export default BodyLoading;
