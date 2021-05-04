import React, { useRef, useState } from "react";
import Ellipsis from "../../assets/Icons/Ellipsis.svg";
import { JustifyBetween } from "../../layout/Layout";
import useOutsideClick from "../useOutsideClick";
import ActionCard from "./ActionCard";
import ButtonAction from "./ButtonAction";
import ItemCard from "./ItemCard";
import ProgressBar from "./ProgressBar";
import TitleItems from "./TitleItems";

const Items = ({ title, progress }) => {
  const menu = useRef();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  useOutsideClick(menu, () => setOpen(false));
  return (
    <ItemCard>
      <TitleItems>{title}</TitleItems>
      <JustifyBetween width="100%">
        <ProgressBar value={progress} />
        <div className="relative">
          <ButtonAction onClick={toggleOpen} ref={menu}>
            <img src={Ellipsis} alt="Action Button" />
          </ButtonAction>
          <ActionCard open={open} />
        </div>
      </JustifyBetween>
    </ItemCard>
  );
};

export default Items;
