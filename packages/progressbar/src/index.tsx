/* eslint-disable react/display-name */
import React, { forwardRef, Ref, useImperativeHandle, useState } from "react";

//
export const Progressbar = forwardRef(
  (
    {
      className = "",
      frequency = 100,
      height = 10,
      style,
      ...props
    }: IProgressbar,
    ref: Ref<IProgressbarMethods>
  ) => {
    //
    const [width, setWidth] = useState<number>(0);
    const [intervalID, setIntervalID] = useState<number>();

    //
    useImperativeHandle(ref, () => ({
      //
      activate: () => {
        let w: number = 0;
        const id = window.setInterval(() => {
          if (w <= 80) {
            w = w + 1;
            setWidth(w);
          } else {
            clearInterval(id);
          }
        }, frequency);
        setIntervalID(id);
      },

      //
      kill: () => {
        clearInterval(intervalID);
        setWidth(100);
      },
    }));

    //
    return (
      <div
        key={width}
        className={`tm-progressbar ${className}`}
        style={{
          height: `${height}px`,
          width: `${width}%`,
          transitionDelay: "5s",
          transition: "opacity ease-in-out 2s",
          opacity: width === 100 ? 0 : 1,
          ...style,
        }}
        {...props}
      />
    );
  }
);

//
export interface IProgressbar
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  frequency?: number;
  height?: number;
}

//
export interface IProgressbarMethods {
  activate: () => void;
  kill: () => void;
}
