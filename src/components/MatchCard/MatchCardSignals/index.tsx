import React, { useMemo, type FC } from "react";

import type { Signal } from "~/interfaces";

export interface IMatchCardSignalsProps {
  signals: Signal[];
  active: boolean;
}

const getActiveClass = (active: boolean) => {
  if (active) {
    return "text-white";
  } 
  return "text-[#000480CC]";
};

const getActiveTagClass = (active: boolean) => {
  if (active) {
    return "bg-[#FFFFFF80]";
  } 
  return "bg-[#0004800D]";
};

export const MatchCardSignals: FC<IMatchCardSignalsProps> = ({ signals, active }) => {
  const mainClass = useMemo(() => {
    const mainDefaultClass = "flex flex-row items-baseline gap-1";
    const activeClass = getActiveClass(active);
    return [mainDefaultClass, activeClass].join(' ');
  }, [active]);

  const mainTagClass = useMemo(() => {
    const defaultTagClass = "rounded-md bg-opacity-50 py-0.5 px-2 text-[10px] align-baseline";
    const activeClass = getActiveTagClass(active);
    return [defaultTagClass, activeClass].join(' ');
  }, [active]);

  if (signals.length === 0) return null;

  const signalsRestCount = signals.length > 1 ? signals.length - 1 : 0;

  return (
    <div className={mainClass}>
      <div className={mainTagClass}>
        {signals[0]}
      </div>
      {signalsRestCount > 0 && (
        <div className="text-[10px] align-baseline">
          +{signalsRestCount}
        </div>
      )}
    </div>
  );
};
