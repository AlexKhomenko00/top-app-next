import { AdvantagesProps } from "./Advantages.props";
import s from "./Advantages.module.css";
import React from "react";

import CheckIcon from "./check.svg";

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div>
      {advantages.map((advantage) => (
        <div className={s.advantage} key={advantage._id}>
          <CheckIcon />
          <div className={s.title}>{advantage.title}</div>
          <hr className={s.vline} />
          <div className="">{advantage.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
