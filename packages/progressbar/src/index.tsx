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
    const [width, setWidth] = useState<number>(0);
    const [intervalID, setIntervalID] = useState<number>();

    //
    useImperativeHandle(
      ref,
      () => ({
        //
        activate: () => {
          const id = window.setInterval(() => {
            setWidth((width) => {
              width === 75 && clearInterval(id);
              return ++width;
            });
          }, frequency);
          setIntervalID(id);
        },

        //
        kill: () => {
          clearInterval(intervalID);
          setWidth(100);
          setTimeout(() => setWidth(0), 1000);
        },
      }),
      [frequency, intervalID]
    );

    //
    return (
      <div
        className={`tm-progressbar ${className}`}
        style={{
          transition: "1s width, 2s opacity",
          opacity: `${width === 0 || width === 100 ? 0 : 1}`,
          width: `${width}%`,
          height: height,
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "10",
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
