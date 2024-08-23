// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as AccordionItem from "./AccordionItem.res.mjs";
import * as ExpandMoreIcon from "../Icons/ExpandMoreIcon.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function toJson(record) {
  var assetDict = Js_dict.fromArray([
        [
          "currency",
          record.asset.currency
        ],
        [
          "unit",
          record.asset.unit
        ],
        [
          "token_manager",
          record.asset.token_manager
        ]
      ]);
  return Js_dict.fromArray([
              [
                "sender",
                record.sender
              ],
              [
                "recipient",
                record.recipient
              ],
              [
                "asset",
                assetDict
              ],
              [
                "signature",
                record.signature
              ]
            ]);
}

function toJsonJwtBody(jwtBody) {
  var slMpcSetupDict = Js_dict.fromArray([[
          "keygen",
          {}
        ]]);
  var payloadDict = Js_dict.fromArray([
        [
          "slMpcSetup",
          slMpcSetupDict
        ],
        [
          "timeout",
          jwtBody.payload.timeout
        ],
        [
          "time",
          jwtBody.payload.time
        ]
      ]);
  return Js_dict.fromArray([
              [
                "token",
                jwtBody.token
              ],
              [
                "payload",
                payloadDict
              ],
              [
                "uuid",
                jwtBody.uuid
              ]
            ]);
}

function toJsonKeyGenResponse(stats) {
  return Js_dict.fromArray([
              [
                "public_key",
                stats.public_key
              ],
              [
                "total_send",
                stats.total_send
              ],
              [
                "total_recv",
                stats.total_recv
              ],
              [
                "total_wait",
                stats.total_wait
              ],
              [
                "total_time",
                stats.total_time
              ]
            ]);
}

function Accordion$1(props) {
  var attestation = props.attestation;
  var registerStartResponse = props.registerStartResponse;
  var transactionResult = props.transactionResult;
  var transactionsHistory = props.transactionsHistory;
  var userAssets = props.userAssets;
  var userData = props.userData;
  var jwtBody_payload = {
    slMpcSetup: {
      keygen: {}
    },
    timeout: 60,
    time: "2024-08-09T18:06:07.581Z"
  };
  var jwtBody = {
    token: "[TOKEN_PLACEHOLDER]",
    payload: jwtBody_payload,
    uuid: "[USER_EMAIL_PLACEHOLDER]"
  };
  var bodyJson = toJson({
        sender: "nandan@finternet",
        recipient: "ales@ledger",
        asset: {
          currency: "USD",
          unit: 200,
          token_manager: "tokenManagerAddress"
        },
        signature: "signature"
      });
  var jwtBodyJson = toJsonJwtBody(jwtBody);
  var keygenResponseJson0 = toJsonKeyGenResponse({
        public_key: "03823d089f3612a3d4a22223d15283475c20526475cbdca733f9228a11495b9694",
        total_send: 108435,
        total_recv: 108864,
        total_wait: 1752,
        total_time: 2505
      });
  var keygenResponseJson1 = toJsonKeyGenResponse({
        public_key: "03823d089f3612a3d4a22223d15283475c20526475cbdca733f9228a11495b9694",
        total_send: 108371,
        total_recv: 108928,
        total_wait: 1135,
        total_time: 1906
      });
  var keygenResponseJson2 = toJsonKeyGenResponse({
        public_key: "03823d089f3612a3d4a22223d15283475c20526475cbdca733f9228a11495b9694",
        total_send: 108403,
        total_recv: 108896,
        total_wait: 208,
        total_time: 921
      });
  var prettyJson = JSON.stringify(userData, undefined, 2);
  var prettyTransactionsHistory = JSON.stringify(transactionsHistory, undefined, 2);
  var prettyAssets = JSON.stringify(userAssets, undefined, 2);
  var prettyTransactionResult = JSON.stringify(transactionResult, undefined, 2);
  var prettyPostBody = JSON.stringify(bodyJson, undefined, 2);
  var prettyRegisterStartResponse = JSON.stringify(registerStartResponse, undefined, 2);
  var prettyAttestation = JSON.stringify(attestation, undefined, 2);
  var prettyJwtBody = JSON.stringify(jwtBodyJson, undefined, 2);
  var prettyKeyGenResponse0 = JSON.stringify(keygenResponseJson0, undefined, 2);
  var prettyKeyGenResponse1 = JSON.stringify(keygenResponseJson1, undefined, 2);
  var prettyKeyGenResponse2 = JSON.stringify(keygenResponseJson2, undefined, 2);
  var accordionContent;
  switch (props.flowType) {
    case "Domestic Money Transfer" :
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
                                      summary: "POST https://finternet-app-api.shuttleapp.rs/v1/users/exampleUserId/assets/123/asset:transfer",
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyPostBody,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    }),
                                summaryClassName: ""
                              }) : null,
                        Caml_obj.notequal(transactionResult, null) ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "GET Transaction Details",
                                detailsContent: JsxRuntime.jsx("pre", {
                                      children: prettyTransactionResult,
                                      className: "whitespace-pre-wrap"
                                    }),
                                detailsClassName: "text-sm overflow-auto"
                              }) : null
                      ]
                    })
            });
        break;
    case "Finternet Onboarding" :
        accordionContent = JsxRuntime.jsx("div", {
              children: Caml_obj.equal(registerStartResponse, null) && Caml_obj.equal(attestation, null) ? JsxRuntime.jsx("div", {
                      children: "Start onboarding to view activity logs",
                      className: "text-sm text-gray-500"
                    }) : JsxRuntime.jsxs("div", {
                      children: [
                        Caml_obj.notequal(registerStartResponse, null) ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "User Register",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: JsxRuntime.jsxs("div", {
                                            children: [
                                              "POST https://selfnode.codecrane.com/auth-0/registerStart",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-1/registerStart",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-2/registerStart"
                                            ]
                                          }),
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyRegisterStartResponse,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    })
                              }) : null,
                        Caml_obj.notequal(attestation, null) ? JsxRuntime.jsxs("div", {
                                children: [
                                  JsxRuntime.jsx(AccordionItem.make, {
                                        summary: "User Register Finish",
                                        detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                              summary: JsxRuntime.jsxs("div", {
                                                    children: [
                                                      "POST https://selfnode.codecrane.com/auth-0/registerFinish",
                                                      JsxRuntime.jsx("br", {}),
                                                      "POST https://selfnode.codecrane.com/auth-1/registerFinish",
                                                      JsxRuntime.jsx("br", {}),
                                                      "POST https://selfnode.codecrane.com/auth-2/registerFinish"
                                                    ]
                                                  }),
                                              detailsContent: JsxRuntime.jsx("pre", {
                                                    children: prettyAttestation,
                                                    className: "whitespace-pre-wrap"
                                                  }),
                                              detailsClassName: "text-sm overflow-auto"
                                            })
                                      }),
                                  JsxRuntime.jsx(AccordionItem.make, {
                                        summary: "Verify JWT",
                                        detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                              summary: "POST https://selfnode.codecrane.com/auth-0/verify_google_jwt",
                                              detailsContent: JsxRuntime.jsx("pre", {
                                                    children: prettyJwtBody,
                                                    className: "whitespace-pre-wrap"
                                                  }),
                                              detailsClassName: "text-sm overflow-auto"
                                            })
                                      }),
                                  JsxRuntime.jsx(AccordionItem.make, {
                                        summary: "Generate Public Key",
                                        detailsContent: JsxRuntime.jsxs("div", {
                                              children: [
                                                "Keygen response from party-0:",
                                                JsxRuntime.jsx("pre", {
                                                      children: prettyKeyGenResponse0,
                                                      className: "whitespace-pre-wrap"
                                                    }),
                                                JsxRuntime.jsx("br", {}),
                                                "Keygen response from party-1:",
                                                JsxRuntime.jsx("pre", {
                                                      children: prettyKeyGenResponse1,
                                                      className: "whitespace-pre-wrap"
                                                    }),
                                                JsxRuntime.jsx("br", {}),
                                                "Keygen response from party-2:",
                                                JsxRuntime.jsx("pre", {
                                                      children: prettyKeyGenResponse2,
                                                      className: "whitespace-pre-wrap"
                                                    })
                                              ]
                                            }),
                                        detailsClassName: "text-sm overflow-auto"
                                      })
                                ]
                              }) : null
                      ]
                    })
            });
        break;
    default:
      accordionContent = null;
  }
  return JsxRuntime.jsx("div", {
              children: accordionContent
            });
}

var make = Accordion$1;

export {
  toJson ,
  toJsonJwtBody ,
  toJsonKeyGenResponse ,
  make ,
}
/* AccordionItem Not a pure module */
