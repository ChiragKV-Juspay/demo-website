// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Utils from "../../Utilities/Utils.res.mjs";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as AccordionItem from "../AccordionItem.res.mjs";
import * as ExpandMoreIcon from "../../Icons/ExpandMoreIcon.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function DomesticMoneyTransferAccordion(props) {
  var transactionResult = props.transactionResult;
  var transactionsHistory = props.transactionsHistory;
  var userAssets = props.userAssets;
  var userData = props.userData;
  var tokenizePropertybody_property_details = {
    property_id: "1234",
    property_registrar: "Some Registrar"
  };
  var tokenizePropertybody_attestations = [
    {
      certificate: "NOC"
    },
    {
      certificate: "Ownership"
    },
    {
      certificate: "Value"
    }
  ];
  var tokenizePropertybody = {
    asset_type: "Property",
    property_details: tokenizePropertybody_property_details,
    attestations: tokenizePropertybody_attestations
  };
  Utils.toJson({
        sender: "siddharth@finternet",
        recipient: "nandan@finternet",
        asset: {
          currency: "INR",
          unit: 2000,
          token_manager: "ABC Bank"
        },
        signature: "AWoqX7bTaHtIyGQzgs9_c8jYdhN7sC2ascAE9hsC"
      });
  Utils.tokenizedBodyToJson({
        token_manager: "ABC Bank",
        asset_type: "Money",
        currency: "INR",
        account_details: {
          account_number: "1234 1234 1234 1234"
        }
      });
  Utils.tokenizedPropertyBodyToJson(tokenizePropertybody);
  var prettyJson = JSON.stringify(userData, undefined, 2);
  var prettyAssets = JSON.stringify(userAssets, undefined, 2);
  var prettyTransactionsHistory = JSON.stringify(transactionsHistory, undefined, 2);
  var prettyTransactionResult = JSON.stringify(transactionResult, undefined, 2);
  var accordionContent;
  if (props.flowType === "Domestic Money Transfer") {
    accordionContent = JsxRuntime.jsx("div", {
          children: Caml_obj.equal(userData, null) && Caml_obj.equal(userAssets, null) && Caml_obj.equal(transactionsHistory, null) ? JsxRuntime.jsx("div", {
                  children: "Initiate transaction to view activity logs",
                  className: "text-sm text-gray-500"
                }) : JsxRuntime.jsxs("div", {
                  children: [
                    JsxRuntime.jsxs(Accordion, {
                          children: [
                            JsxRuntime.jsx(AccordionSummary, {
                                  "aria-controls": "panel1-content",
                                  id: "panel1-header",
                                  children: "Fetch User Details",
                                  expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                }),
                            JsxRuntime.jsxs(AccordionDetails, {
                                  children: [
                                    Caml_obj.notequal(userData, null) ? JsxRuntime.jsxs(Accordion, {
                                            className: "w-11/12 ",
                                            children: [
                                              JsxRuntime.jsx(AccordionSummary, {
                                                    "aria-controls": "panel2-content",
                                                    id: "panel2-header",
                                                    children: "GET user",
                                                    expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                  }),
                                              JsxRuntime.jsx(AccordionDetails, {
                                                    className: "text-sm overflow-auto",
                                                    children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                              children: prettyJson,
                                                              className: "whitespace-pre-wrap"
                                                            }))
                                                  })
                                            ]
                                          }) : null,
                                    Caml_obj.notequal(userAssets, null) ? JsxRuntime.jsxs(Accordion, {
                                            className: "w-11/12 ",
                                            children: [
                                              JsxRuntime.jsx(AccordionSummary, {
                                                    "aria-controls": "panel2-content",
                                                    id: "panel2-header",
                                                    children: "GET assets",
                                                    expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                  }),
                                              JsxRuntime.jsx(AccordionDetails, {
                                                    className: "text-sm overflow-auto",
                                                    children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                              children: prettyAssets,
                                                              className: "whitespace-pre-wrap"
                                                            }))
                                                  })
                                            ]
                                          }) : null,
                                    Caml_obj.notequal(transactionsHistory, null) ? JsxRuntime.jsxs(Accordion, {
                                            className: "w-11/12 ",
                                            children: [
                                              JsxRuntime.jsx(AccordionSummary, {
                                                    "aria-controls": "panel2-content",
                                                    id: "panel2-header",
                                                    children: "GET transactionsList",
                                                    expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                  }),
                                              JsxRuntime.jsx(AccordionDetails, {
                                                    className: "text-sm overflow-auto",
                                                    children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                              children: prettyTransactionsHistory,
                                                              className: "whitespace-pre-wrap"
                                                            }))
                                                  })
                                            ]
                                          }) : null
                                  ]
                                })
                          ]
                        }),
                    props.showAuthInitiated ? JsxRuntime.jsx(AccordionItem.make, {
                            summary: "Auth Initiated (Wallet)",
                            detailsContent: "Transaction signed through the wallet",
                            summaryClassName: "",
                            detailsClassName: "text-sm overflow-auto"
                          }) : null,
                    props.showTransactionConfirm ? JsxRuntime.jsx(AccordionItem.make, {
                            summary: "Confirm Transaction",
                            detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                  summary: "POST https://finternet-app-api.shuttleapp.rs/v1/users/ascWqX7bTaHtIyG/assets/123/asset:transfer",
                                  detailsContent: JsxRuntime.jsx("pre", {
                                        className: "whitespace-pre-wrap"
                                      }),
                                  detailsClassName: "text-sm overflow-auto"
                                }),
                            summaryClassName: ""
                          }) : null,
                    Caml_obj.notequal(transactionResult, null) ? JsxRuntime.jsx(AccordionItem.make, {
                            summary: "GET Transaction Details",
                            detailsContent: JsxRuntime.jsxs("div", {
                                  children: [
                                    JsxRuntime.jsx("pre", {
                                          children: prettyTransactionResult,
                                          className: "whitespace-pre-wrap"
                                        }),
                                    JsxRuntime.jsx("a", {
                                          children: "View in Solana",
                                          className: "flex items-center text-blue-500  hover:text-blue-700 transition duration-300",
                                          rel: "noopener noreferrer",
                                          target: "_blank"
                                        })
                                  ],
                                  className: "text-sm overflow-auto"
                                }),
                            detailsClassName: "text-sm overflow-auto"
                          }) : null
                  ]
                })
        });
  } else {
    throw {
          RE_EXN_ID: "Match_failure",
          _1: [
            "DomesticMoneyTransferAccordion.res",
            60,
            25
          ],
          Error: new Error()
        };
  }
  return JsxRuntime.jsx("div", {
              children: accordionContent
            });
}

var make = DomesticMoneyTransferAccordion;

export {
  make ,
}
/* AccordionItem Not a pure module */
