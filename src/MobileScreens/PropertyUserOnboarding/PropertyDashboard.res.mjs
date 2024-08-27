// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Colors from "../../Utilities/Colors.res.mjs";
import * as HeaderWithBack from "../../Components/HeaderWithBack.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../../Components/SecuredByFinterest.res.mjs";

function PropertyDashboard(props) {
  var handleNavigate = props.handleNavigate;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx(HeaderWithBack.make, {
                              title: "Home",
                              backButtonStrokeColor: Colors.colors.propertyBlue
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: "Your verified properties",
                                      className: "text-sm text-[" + Colors.colors.gray2 + "]"
                                    }),
                                JsxRuntime.jsxs("div", {
                                      children: [
                                        JsxRuntime.jsx("img", {
                                              className: "absolute right-0 z-0 -m-5",
                                              alt: "Background Image",
                                              src: "/BackgroundPurpleGradient.svg"
                                            }),
                                        JsxRuntime.jsx("img", {
                                              className: "z-10",
                                              alt: "Description of image",
                                              src: "/PropertyCardBlueForButton.svg"
                                            }),
                                        JsxRuntime.jsx("div", {
                                              children: "State Property Registrar",
                                              className: "text-xs font-light text-[" + Colors.colors.gray + "]"
                                            }),
                                        JsxRuntime.jsx("button", {
                                              children: "Request Loan",
                                              className: "bg-[" + Colors.colors.propertyBlue + "] text-xs  text-white rounded-lg p-2 ",
                                              onClick: (function (param) {
                                                  handleNavigate();
                                                })
                                            })
                                      ],
                                      className: "relative overflow-hidden flex flex-col border border-white shadow-md rounded-xl p-5 gap-5"
                                    })
                              ],
                              className: "flex flex-col gap-2"
                            }),
                        JsxRuntime.jsx("img", {
                              className: "scale-105",
                              alt: "Description of image",
                              src: "/EMICalculator.svg"
                            })
                      ],
                      className: "flex flex-col gap-5"
                    }),
                JsxRuntime.jsx(SecuredByFinterest.make, {
                      color: Colors.colors.propertyBlue
                    })
              ],
              className: " flex flex-col h-full justify-between"
            });
}

var make = PropertyDashboard;

export {
  make ,
}
/* HeaderWithBack Not a pure module */
