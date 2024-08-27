// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Colors from "../../Utilities/Colors.res.mjs";
import * as LoanOfferCard from "../../Components/LoanOfferCard.res.mjs";
import * as HeaderWithBack from "../../Components/HeaderWithBack.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../../Components/SecuredByFinterest.res.mjs";

function KeyFactSheet(props) {
  var handleNavigate = props.handleNavigate;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx(HeaderWithBack.make, {
                              title: "View Loan Offer",
                              backButtonStrokeColor: Colors.colors.propertyBlue
                            }),
                        JsxRuntime.jsx(LoanOfferCard.make, {})
                      ],
                      className: "flex flex-col gap-7"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("button", {
                              children: "Select Offer",
                              className: " bg-[" + Colors.colors.propertyBlue + "] text-white rounded-lg w-full h-10",
                              onClick: (function (param) {
                                  handleNavigate();
                                })
                            }),
                        JsxRuntime.jsx(SecuredByFinterest.make, {
                              color: Colors.colors.propertyBlue
                            })
                      ],
                      className: "flex flex-col gap-4"
                    })
              ],
              className: "flex flex-col h-full  justify-between"
            });
}

var make = KeyFactSheet;

export {
  make ,
}
/* LoanOfferCard Not a pure module */
