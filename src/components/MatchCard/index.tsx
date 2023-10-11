import React, { useMemo, type FC } from "react";
import Image from "next/image";

import type { MatchStatus, MatchType } from "~/interfaces";

import { MatchCardSignals } from "./MatchCardSignals";

import imgUserPicture from "~/../public/images/userpicture.jpg";

export interface IMatchCardProps {
  item: MatchType;
  active: boolean;
  onClick: (item: MatchType) => void;
}

const getActiveSecondaryClass = (active: boolean) => {
  if (active) {
    return "text-white";
  }
  return "text-[#727272]";
};

const getActiveAndStatusClass = (active: boolean, status: MatchStatus) => {
  if (active) {
    return "bg-[#000480] text-white";
  }
  switch (status) {
    case "pending":
      return "bg-[#FFF] text-[#1A1A1A]";
    case "inprogress":
      return "bg-[#FFF] text-[#1A1A1A]";
    case "processed":
      return "bg-[#34D39917] text-[#1A1A1A]";
    default:
      return "bg-[#FFF] text-[#1A1A1A]";
  };
};

const getStatusIcon = (status: MatchStatus) => {
  switch (status) {
    case "pending":
    case "inprogress":
    case "processed":
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Email">
          <path id="Vector" d="M14.125 3H1.875C0.841125 3 0 3.84113 0 4.875V11.125C0 12.1589 0.841125 13 1.875 13H14.125C15.1589 13 16 12.1589 16 11.125V4.875C16 3.84113 15.1589 3 14.125 3ZM13.3388 4.25L9.03781 7.18197C8.407 7.60125 7.593 7.60125 6.96219 7.18197L2.66119 4.25H13.3388ZM14.75 11.125C14.75 11.4696 14.4696 11.75 14.125 11.75H1.875C1.53038 11.75 1.25 11.4696 1.25 11.125C1.25178 4.44581 1.24597 4.87728 1.25437 4.80378L6.26122 8.21694L6.26656 8.22053C6.79309 8.57153 7.39653 8.74706 8 8.74706C8.60347 8.74706 9.20694 8.57156 9.73344 8.22053L14.7456 4.80378C14.754 4.87716 14.7482 4.47 14.75 11.125Z" fill="#BDBDBD"/>
          </g>
        </svg>
      );
  };
};

export const MatchCard: FC<IMatchCardProps> = ({ item, active = false, onClick }) => {
  const computedMainClass = useMemo(
    () => {
      const mainClass = "flex w-[288px] h-[86px] rounded-lg items-center p-2 font-inter cursor-pointer shadow-sm hover:shadow-md";
      const activeClass = getActiveAndStatusClass(active, item.status);
      return [mainClass, activeClass].join(' ');
    },
    [active, item.status],
  );
  const computedSecondaryClass = useMemo(
    () => {
      const mainClass = "flex flex-row gap-1 text-sm font-inter";
      const activeClass = getActiveSecondaryClass(active);
      return [mainClass, activeClass].join(' ');
    },
    [active],
  );

  const handleClick = () => {
    onClick(item);
  };

  return (
    <div className={computedMainClass} onClick={handleClick}>
      <div className="flex items-center justify-center overflow-hidden px-4">
        <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center overflow-hidden">
          <Image src={imgUserPicture} alt="user image" width={52} height={52} />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="text-base font-semibold font-inter">{item.name}</div>
        <div className={computedSecondaryClass}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 1.33333C6.13624 1.33333 5.62753 1.54405 5.25246 1.91912C4.87739 2.29419 4.66667 2.8029 4.66667 3.33333V4H2.66667C1.5621 4 0.666672 4.89543 0.666672 6V12.6667C0.666672 13.7712 1.5621 14.6667 2.66667 14.6667H13.3333C14.4379 14.6667 15.3333 13.7712 15.3333 12.6667V6C15.3333 4.89543 14.4379 4 13.3333 4H11.3333V3.33333C11.3333 2.8029 11.1226 2.29419 10.7476 1.91912C10.3725 1.54405 9.86377 1.33333 9.33334 1.33333H6.66667ZM10 4V3.33333C10 3.15652 9.92977 2.98695 9.80474 2.86193C9.67972 2.7369 9.51015 2.66667 9.33334 2.66667H6.66667C6.48986 2.66667 6.32029 2.7369 6.19527 2.86193C6.07024 2.98695 6 3.15652 6 3.33333V4H10ZM6 5.33333H10V13.3333H6V5.33333ZM4.66667 5.33333H2.66667C2.29848 5.33333 2.00001 5.63181 2.00001 6V12.6667C2.00001 13.0349 2.29848 13.3333 2.66667 13.3333H4.66667V5.33333ZM11.3333 13.3333V5.33333H13.3333C13.7015 5.33333 14 5.63181 14 6V12.6667C14 13.0349 13.7015 13.3333 13.3333 13.3333H11.3333Z" fill="currentColor"/>
          </svg>
          <div className="align-bottom">
            {item.companyName}
          </div>
        </div>
        <MatchCardSignals signals={item.signals} active={active} />
      </div>
      <div className="flex flex-col items-end h-full justify-between">
        <div className="w-4 h-4">
          {getStatusIcon(item.status)}
        </div>
        <div className="text-[10px]">
          {item.stars}
        </div>
      </div>
    </div>
  );
};
