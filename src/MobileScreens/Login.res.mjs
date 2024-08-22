// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Input from "../Components/Input.res.mjs";
import * as React from "react";
import * as Colors from "../Utilities/Colors.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../Components/SecuredByFinterest.res.mjs";
import * as LinkToFinternetModal from "../Components/LinkToFinternetModal.res.mjs";
import Checkbox from "@mui/material/Checkbox";

function Login(props) {
  var flow = props.flow;
  var handleNavigate = props.handleNavigate;
  var match = React.useState(function () {
        return false;
      });
  var setShowModal = match[1];
  var toggleModal = function () {
    setShowModal(function (prev) {
          return !prev;
        });
  };
  var match$1;
  switch (flow) {
    case "FinternetOnboarding" :
        match$1 = [
          "/BackgroundImage.svg",
          Colors.colors.black,
          "#292929",
          "#474747",
          "#666666",
          "#8F8F8F",
          "Hey!",
          "Welcome to Finternet",
          "Access all assets via a unified interface and unlock the potential of seamless global transactions",
          "absolute z-0 -m-4"
        ];
        break;
    case "PropertyOnboarding" :
        match$1 = [
          "BackgroundBlueGradient",
          "#0091FF",
          "#F0FFF9",
          "#EAFFF6",
          "#E6FFF4",
          "#DBFFF0",
          "MyProp",
          "Welcome to MyProp",
          "Access your property via a unified interface and unlock the power of seamless transactability.",
          ""
        ];
        break;
    case "MoneyTransferOnboarding" :
        match$1 = [
          "/BackgroundImage.svg",
          "#00B76A",
          "#F0FFF9",
          "#EAFFF6",
          "#E6FFF4",
          "#DBFFF0",
          "MyFin",
          "Welcome to MyFin",
          "Access transactiblity via a unified interface and unlock the potential of seamless global transactions",
          "absolute z-0 -m-4"
        ];
        break;
    
  }
  var color = match$1[1];
  var onButtonPress = function () {
    switch (flow) {
      case "FinternetOnboarding" :
          return handleNavigate();
      case "PropertyOnboarding" :
          return setShowModal(function (prev) {
                      return !prev;
                    });
      case "MoneyTransferOnboarding" :
          throw {
                RE_EXN_ID: "Match_failure",
                _1: [
                  "Login.res",
                  67,
                  4
                ],
                Error: new Error()
              };
      
    }
  };
  return JsxRuntime.jsxs("div", {
              children: [
                flow === "MoneyTransferOnboarding" ? JsxRuntime.jsx("div", {
                        children: JsxRuntime.jsxs("svg", {
                              children: [
                                JsxRuntime.jsxs("g", {
                                      children: [
                                        JsxRuntime.jsx("path", {
                                              d: "M442.469 -10.0171L239.271 -190L-97.8634 231.191L442.469 -10.0171Z",
                                              fill: match$1[2],
                                              fillOpacity: "0.6"
                                            }),
                                        JsxRuntime.jsx("path", {
                                              d: "M268.073 -12.3014L81.292 -132.288L-144.49 259.888L268.073 -12.3014Z",
                                              fill: match$1[3],
                                              fillOpacity: "0.6"
                                            }),
                                        JsxRuntime.jsx("path", {
                                              d: "M142.265 -12.5122L-74.1484 -62L-147.554 357.697L142.265 -12.5122Z",
                                              fill: match$1[4]
                                            }),
                                        JsxRuntime.jsx("path", {
                                              d: "M79 0H-143L-121 425.5L79 0Z",
                                              fill: match$1[5]
                                            })
                                      ],
                                      clipPath: "url(#clip0_1137_2884)"
                                    }),
                                JsxRuntime.jsx("defs", {
                                      children: JsxRuntime.jsx("clipPath", {
                                            children: JsxRuntime.jsx("rect", {
                                                  height: "178",
                                                  width: "390",
                                                  fill: "white"
                                                }),
                                            id: "clip0_1137_2884"
                                          })
                                    })
                              ],
                              height: "178",
                              width: "390",
                              fill: "none",
                              viewBox: "0 0 390 178",
                              xmlns: "http://www.w3.org/2000/svg"
                            }),
                        className: match$1[9]
                      }) : null,
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                flow === "FinternetOnboarding" ? JsxRuntime.jsx("img", {
                                        className: " h-6/12 w-3/12",
                                        alt: "Description of image",
                                        src: "/finternetLogo.png"
                                      }) : JsxRuntime.jsx("div", {
                                        children: match$1[6],
                                        className: "font-bold text-4xl text-[" + color + "]"
                                      }),
                                JsxRuntime.jsxs("div", {
                                      children: [
                                        JsxRuntime.jsx("div", {
                                              children: match$1[7],
                                              className: "font-bold " + (
                                                flow === "FinternetOnboarding" ? "text-2xl" : "text-xl"
                                              )
                                            }),
                                        JsxRuntime.jsx("div", {
                                              children: match$1[8],
                                              className: "font-light text-sm mt-4"
                                            })
                                      ],
                                      className: "mt-10 "
                                    })
                              ]
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: "Enter your mobile number",
                                      className: "font-medium text-base"
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
                                                      children: "+91",
                                                      className: "font-normal text-base"
                                                    }),
                                                JsxRuntime.jsx("svg", {
                                                      children: JsxRuntime.jsx("path", {
                                                            d: "M5.58917 7.03844C5.37032 7.03882 5.15357 6.99595 4.95135 6.91229C4.74913 6.82862 4.56544 6.70582 4.41083 6.55094L0 2.13927L1.17833 0.960938L5.58917 5.37177L10 0.960938L11.1783 2.13927L6.7675 6.5501C6.61296 6.70514 6.4293 6.82809 6.22708 6.9119C6.02486 6.99571 5.80807 7.03871 5.58917 7.03844Z",
                                                            fill: color
                                                          }),
                                                      height: "8",
                                                      width: "12",
                                                      fill: "none",
                                                      viewBox: "0 0 12 8",
                                                      xmlns: "http://www.w3.org/2000/svg"
                                                    })
                                              ],
                                              className: "flex flex-row ml-4 gap-2 items-center "
                                            }),
                                        JsxRuntime.jsx(Input.make, {
                                              placeholder: "Enter your mobile number"
                                            })
                                      ],
                                      className: "flex flex-row border border-[#E6E6E6] rounded-lg"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: "An OTP will be sent to the linked mobile number for verification",
                                      className: "font-light text-sm"
                                    })
                              ],
                              className: "mt-14 gap-4 flex flex-col"
                            })
                      ],
                      className: "z-10"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx(Checkbox, {
                                      style: {
                                        color: color
                                      },
                                      defaultChecked: true,
                                      size: "small"
                                    }),
                                JsxRuntime.jsxs("div", {
                                      children: [
                                        JsxRuntime.jsx("div", {
                                              children: "By registering, you accept our",
                                              className: "font-normal text-sm"
                                            }),
                                        JsxRuntime.jsx("div", {
                                              children: "Terms of Use",
                                              className: "font-normal text-sm text-[" + color + "]"
                                            }),
                                        JsxRuntime.jsx("div", {
                                              children: "&",
                                              className: "font-normal text-sm"
                                            }),
                                        JsxRuntime.jsx("div", {
                                              children: "Privacy Policy",
                                              className: "font-normal text-sm text-[" + color + "]"
                                            })
                                      ],
                                      className: "flex flew-row flex-wrap gap-1 "
                                    })
                              ],
                              className: "flex flew-row"
                            }),
                        JsxRuntime.jsx("button", {
                              children: "Proceed",
                              className: (
                                flow === "FinternetOnboarding" ? "bg-black" : "bg-[" + color + "]"
                              ) + " text-white rounded-lg w-full h-12",
                              onClick: (function (param) {
                                  onButtonPress();
                                })
                            }),
                        JsxRuntime.jsx(LinkToFinternetModal.make, {
                              showModal: match[0],
                              toggleModal: toggleModal,
                              handleNavigate: handleNavigate,
                              text: "Link your Finternet account with the the MyProp app",
                              buttonText: "Link"
                            }),
                        JsxRuntime.jsx(SecuredByFinterest.make, {
                              color: color
                            })
                      ],
                      className: "mt-14 gap-y-4 flex flex-col"
                    })
              ],
              className: "relative flex flex-col h-full justify-between"
            });
}

var make = Login;

export {
  make ,
}
/* Input Not a pure module */
