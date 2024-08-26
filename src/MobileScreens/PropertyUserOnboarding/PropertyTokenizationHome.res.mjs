// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Colors from "../../Utilities/Colors.res.mjs";
import * as BlueHeader from "../../Components/BlueHeader.res.mjs";
import * as AccountCard from "../../Components/AccountCard.res.mjs";
import * as CardWithButton from "../../Components/CardWithButton.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../../Components/SecuredByFinterest.res.mjs";

function PropertyTokenizationHome(props) {
  var handleNavigate = props.handleNavigate;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx(BlueHeader.make, {}),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx(AccountCard.make, {
                                      id: "siddharth@finternet",
                                      iconColor: Colors.colors.propertyBlue
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: "Financial Services",
                                      className: " text-[#595959] text-xs"
                                    }),
                                JsxRuntime.jsx(CardWithButton.make, {
                                      title: "Link your property",
                                      description: "Link your property to apply for credit with collateral",
                                      buttonColor: "primaryBlue",
                                      onClick: (function (param) {
                                          handleNavigate();
                                        })
                                    }),
                                JsxRuntime.jsx(CardWithButton.make, {
                                      title: "Apply for loan?",
                                      description: "Access quick financing by leveraging your property today!",
                                      buttonColor: "disabledGray",
                                      onClick: (function (param) {
                                          handleNavigate();
                                        })
                                    })
                              ],
                              className: "flex flex-col gap-4 z-10"
                            })
                      ],
                      className: "flex flex-col gap-10 z-10"
                    }),
                JsxRuntime.jsx(SecuredByFinterest.make, {
                      color: Colors.colors.propertyBlue
                    })
              ],
              className: " flex flex-col h-full justify-between "
            });
}

var make = PropertyTokenizationHome;

export {
  make ,
}
/* BlueHeader Not a pure module */
