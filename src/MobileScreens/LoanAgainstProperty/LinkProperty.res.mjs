// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../../Components/SecuredByFinterest.res.mjs";

function LinkProperty(props) {
  var onNavigateToLinkedHome = props.onNavigateToLinkedHome;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("img", {
                                      alt: "Description of image",
                                      src: "/BackIcon.svg"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: "Link Property",
                                      className: "font-bold text-base"
                                    })
                              ],
                              className: "flex flex-row gap-2"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: "Select corporation",
                                      className: "font-light text-[#797979] text-xs"
                                    }),
                                JsxRuntime.jsx("img", {
                                      alt: "Description of image",
                                      src: "/DropdownBBMPSelect.svg"
                                    })
                              ],
                              className: "flex flex-col gap-2"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: "Enter Property ID",
                                      className: " text-[#797979] text-xs"
                                    }),
                                JsxRuntime.jsx("input", {
                                      className: " p-3 border border-[#E6E6E6]  rounded-lg text-sm placeholder-text-sm",
                                      placeholder: "Enter property ID"
                                    })
                              ],
                              className: "flex flex-col gap-2"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: "Linking Status",
                                      className: "font-light text-[#797979] text-xs"
                                    }),
                                JsxRuntime.jsx("img", {
                                      alt: "Description of image",
                                      src: "/LinkingPropertyStepper.svg"
                                    })
                              ],
                              className: "flex flex-col gap-2"
                            })
                      ],
                      className: "flex flex-col gap-10"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("button", {
                              children: "Proceed",
                              className: " bg-[#00B76A] text-white rounded-lg w-full h-10",
                              onClick: (function (param) {
                                  onNavigateToLinkedHome();
                                })
                            }),
                        JsxRuntime.jsx(SecuredByFinterest.make, {})
                      ],
                      className: "flex flex-col gap-4"
                    })
              ],
              className: "flex flex-col h-full justify-between"
            });
}

var make = LinkProperty;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
