// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Input from "../../Components/Input.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";

function EnterAmount(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("img", {
                      className: "scale-105 border border-white",
                      alt: "Description of image",
                      src: "/EnterAmountTop.svg"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: "Amount",
                              className: "font-medium text-[#797979] text-sm"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsxs("div", {
                                      children: [
                                        JsxRuntime.jsx("img", {
                                              alt: "Description of image",
                                              src: "/IndiaFlag.svg"
                                            }),
                                        JsxRuntime.jsx("div", {
                                              children: "INR",
                                              className: "font-normal text-base"
                                            }),
                                        JsxRuntime.jsx("svg", {
                                              children: JsxRuntime.jsx("path", {
                                                    d: "M5.58917 7.03844C5.37032 7.03882 5.15357 6.99595 4.95135 6.91229C4.74913 6.82862 4.56544 6.70582 4.41083 6.55094L0 2.13927L1.17833 0.960938L5.58917 5.37177L10 0.960938L11.1783 2.13927L6.7675 6.5501C6.61296 6.70514 6.4293 6.82809 6.22708 6.9119C6.02486 6.99571 5.80807 7.03871 5.58917 7.03844Z",
                                                    fill: "#00B76A"
                                                  }),
                                              height: "8",
                                              width: "12",
                                              fill: "none",
                                              viewBox: "0 0 12 8",
                                              xmlns: "http://www.w3.org/2000/svg"
                                            })
                                      ],
                                      className: "flex flex-row  ml-2 gap-2 items-center "
                                    }),
                                JsxRuntime.jsx(Input.make, {
                                      placeholder: "Enter amount"
                                    })
                              ],
                              className: "flex flex-row border border-[#E6E6E6] rounded-lg"
                            })
                      ],
                      className: "flex flex-col gap-1"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: "Select Purpose",
                              className: "font-medium text-[#797979] text-sm"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: "Tickets",
                                      className: "font-normal text-base"
                                    }),
                                JsxRuntime.jsx("svg", {
                                      children: JsxRuntime.jsx("path", {
                                            d: "M5.58917 7.03844C5.37032 7.03882 5.15357 6.99595 4.95135 6.91229C4.74913 6.82862 4.56544 6.70582 4.41083 6.55094L0 2.13927L1.17833 0.960938L5.58917 5.37177L10 0.960938L11.1783 2.13927L6.7675 6.5501C6.61296 6.70514 6.4293 6.82809 6.22708 6.9119C6.02486 6.99571 5.80807 7.03871 5.58917 7.03844Z",
                                            fill: "#00B76A"
                                          }),
                                      height: "8",
                                      width: "12",
                                      fill: "none",
                                      viewBox: "0 0 12 8",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    })
                              ],
                              className: "flex flex-row gap-1 border border-[#E6E6E6] p-2 justify-between items-center rounded-lg"
                            })
                      ]
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("button", {
                              children: "Proceed",
                              className: " bg-[#00B76A] text-white rounded-lg w-full h-10",
                              onClick: props.handleNavigate
                            }),
                        JsxRuntime.jsx("img", {
                              className: "scale-105",
                              alt: "Description of image",
                              src: "/KeypadIphone.svg"
                            })
                      ],
                      className: "flex flex-col gap-4"
                    })
              ],
              className: "flex flex-col h-full justify-between"
            });
}

var make = EnterAmount;

export {
  make ,
}
/* Input Not a pure module */
