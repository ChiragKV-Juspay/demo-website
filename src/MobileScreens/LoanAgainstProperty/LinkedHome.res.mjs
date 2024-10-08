// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Header from "../../Components/Header.res.mjs";
import * as CardWithButton from "../../Components/CardWithButton.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../../Components/SecuredByFinterest.res.mjs";

function LinkedHome(props) {
  var handleNavigate = props.handleNavigate;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx(Header.make, {}),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("img", {
                                      alt: "Description of image",
                                      src: "/nandanAccountCard.svg"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: "Linked Property",
                                      className: " text-[#595959] text-xs px-2"
                                    }),
                                JsxRuntime.jsx("img", {
                                      alt: "Description of image",
                                      src: "/PropertyCard.svg"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: "Financial Services",
                                      className: " text-[#595959] text-xs px-2"
                                    }),
                                JsxRuntime.jsx(CardWithButton.make, {
                                      title: "Apply for loan?",
                                      description: "Access quick financing by leveraging your property today!",
                                      buttonColor: "#00B76A",
                                      onClick: (function (param) {
                                          handleNavigate();
                                        })
                                    })
                              ],
                              className: "flex flex-col gap-4 "
                            })
                      ],
                      className: "flex flex-col gap-10"
                    }),
                JsxRuntime.jsx(SecuredByFinterest.make, {})
              ],
              className: "flex flex-col h-full justify-between "
            });
}

var make = LinkedHome;

export {
  make ,
}
/* Header Not a pure module */
