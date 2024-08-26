// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Colors from "../Utilities/Colors.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";

function AppCard(props) {
  var match;
  match = props.app === "MyFin" ? [
      "/MyFinLogo.svg",
      "MyFin",
      "ABC Bank Account Balance",
      "text-[" + Colors.colors.finternetGreen + "]"
    ] : [
      "/MyPropLogo.svg",
      "MyProp",
      "ABC Bank Sanctioned Loan",
      "text-[" + Colors.colors.propertyBlue + "]"
    ];
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsxs("div", {
                    children: [
                      JsxRuntime.jsxs("div", {
                            children: [
                              JsxRuntime.jsxs("div", {
                                    children: [
                                      JsxRuntime.jsx("img", {
                                            src: match[0]
                                          }),
                                      JsxRuntime.jsx("div", {
                                            children: match[1],
                                            className: match[3] + " text-2xl font-medium"
                                          })
                                    ],
                                    className: " flex flex-row gap-2"
                                  }),
                              JsxRuntime.jsx("div", {
                                    children: ">"
                                  })
                            ],
                            className: "flex flex-row justify-between"
                          }),
                      JsxRuntime.jsxs("div", {
                            children: [
                              JsxRuntime.jsx("div", {
                                    children: match[2],
                                    className: "text-lg  text-white"
                                  }),
                              JsxRuntime.jsx("div", {
                                    children: props.amount,
                                    className: "font-bold text-white text-2xl"
                                  })
                            ],
                            className: "flex flex-col gap-1"
                          })
                    ],
                    className: "flex flex-col gap-4 "
                  }),
              className: "border border-gray-100 rounded-2xl p-5 "
            });
}

var make = AppCard;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
