# PiePay Backend Assignment

This is a backend service built with **Node.js (Express)** and **MongoDB** that ingests offers from Flipkart's payment page and calculates the highest discount applicable for a given transaction.

##  Setup Instructions

### 1. Prerequisites
* Node.js (v14 or higher)
* MongoDB Atlas connection string (or local MongoDB)

### 2. Installation
1. Clone the repository:
   git clone [https://github.com/sudheerdonthula/22EEB0B10.git](https://github.com/sudheerdonthula/22EEB0B10.git)
   cd 22EEB0B10

2. Install dependencies:
    npm install

3. Configuration

Create a .env file in the root directory and add your MongoDB connection string:

That should be in the format of 

MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster0.mongodb.net/piepay?retryWrites=true&w=majority

4. Running the Server
    node server.js

##  API Endpoints

first u have to invoke the post api first as there would b e no data to query on ,u can use the example one if u dont have any other flipkart offer api data use the sample one given below.

### 1. Ingest Offers (POST)
Endpoint: POST /offer Description: Receives the raw JSON payload from Flipkart's window.__INITIAL_STATE__ and stores structured offers in the database. 

Body:
{
  "flipkartOfferApiResponse": { ...paste JSON here... }
}

The json will look something like this 

{
    "flipkartOfferApiResponse": {
                "pageData": {
                    "asyncStatus": "SSR_LOADED",
                    "theme": "flipkart",
                    "pageTitle": {
                        "title": "Payments",
                        "superTitle": "Step 3 of 3",
                        "callout": {
                            "title": "100% Secure",
                            "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/lock-icon.svg",
                            "displayType": "BOTTOM_SHEET",
                            "content": {
                                "type": "SECURE_INFO_BOTTOMSHEET",
                                "header": {
                                    "title": "100% safe and secure payments"
                                },
                                "information": {
                                    "secureImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/secure-shield-icon-31082023.svg",
                                    "description": "Flipkart payment system is complaint with the Payment Card Industry Data Security Standards (PCI DSS) and uses SSL 256 bit encryption while saving your card information on our highly secure systems. Read our Privacy Policy to learn more.",
                                    "footerImages": ["/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/pci-complaint-logo-31082023.svg", "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/ssl-encryption-logo-31082023.svg"]
                                }
                            }
                        }
                    },
                    "viewTracking": {
                        "disabledPaymentOptions": [],
                        "isM3Flow": true,
                        "isPartPayment": true,
                        "offersAvailable": {
                            "offerCount": 13,
                            "offerSummary": [{
                                "id": "FPO2512041835171GNZ7",
                                "type": "CASHBACK_ON_CARD",
                                "value": 1000
                            }, {
                                "id": "FPO251128153220CWNA9",
                                "type": "CASHBACK_ON_CARD",
                                "value": 1500
                            }, {
                                "id": "FPO251128181820XE8LC",
                                "type": "CASHBACK_ON_CARD",
                                "value": 5000
                            }, {
                                "id": "FPO251202175034FIUEG",
                                "type": "INSTANT_DISCOUNT",
                                "value": 100000
                            }, {
                                "id": "FPO2511211836048EAOQ",
                                "type": "INSTANT_DISCOUNT",
                                "value": 150000
                            }, {
                                "id": "FPO2510032323329BAXV",
                                "type": "INSTANT_DISCOUNT",
                                "value": 5000
                            }, {
                                "id": "FPO2511291527071FZ4Q",
                                "type": "INSTANT_DISCOUNT",
                                "value": 125000
                            }, {
                                "id": "FPO251202142455KPD9T",
                                "type": "CASHBACK_ON_CARD",
                                "value": 75000
                            }, {
                                "id": "FPO251203185744V522D",
                                "type": "INSTANT_DISCOUNT",
                                "value": 100000
                            }, {
                                "id": "FPO251003233042PW3P9",
                                "type": "INSTANT_DISCOUNT",
                                "value": 10000
                            }, {
                                "id": "FPO2509161258586WXGR",
                                "type": "CASHBACK_ON_CARD",
                                "value": 400000
                            }, {
                                "id": "FPO251103123615YLG67",
                                "type": "CASHBACK_IN_BANK",
                                "value": 400000
                            }, {
                                "id": "FPO2512021824073COXW",
                                "type": "INSTANT_DISCOUNT",
                                "value": 100000
                            }]
                        },
                        "isCODApplicable": true,
                        "isRiskBasedFPLAvailable": false,
                        "isCODAdvance": false,
                        "isSplitPayment": false,
                        "isNCEMIAvailable": false,
                        "giftCardUsed": false,
                        "paymentOptionsSaved": [],
                        "paymentOptionsRegular": {
                            "paymentOptions": [{
                                "paymentOption": "UPI"
                            }, {
                                "paymentOption": "CREDIT"
                            }, {
                                "paymentOption": "EMI_OPTIONS"
                            }, {
                                "paymentOption": "NET_OPTIONS"
                            }, {
                                "paymentOption": "COD"
                            }],
                            "count": 5
                        },
                        "EGVWalletUsed": false,
                        "checkouttype": "normalcheckout"
                    },
                    "responseType": "PAYMENT_OPTIONS",
                    "responseStatus": "SUCCESS",
                    "priceSummaryDetails": {
                        "expanded": false,
                        "clickTracking": {}
                    },
                    "basePriceSummary": {
                        "finalPrice": {
                            "label": "Total Amount",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "1459800",
                                "dlsToken": "primary-500 font-l-semibold"
                            }],
                            "dlsToken": "primary-500"
                        },
                        "finalPriceBreakup": [{
                            "label": "Total Amount",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "1459800",
                                "dlsToken": "primary-500 font-l-semibold"
                            }],
                            "dlsToken": "primary-500"
                        }],
                        "breakup": [{
                            "label": "Price (1 item)",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "1449900"
                            }],
                            "breakupType": "BASE_PRICE_SINGLE_ITEM",
                            "priceAttributeList": []
                        }, {
                            "label": "Protect Promise Fee",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "9900"
                            }],
                            "breakupType": "PROTECT_PROMISE_FEE",
                            "priceAttributeList": []
                        }],
                        "messages": []
                    },
                    "finalPriceSummary": {
                        "finalPrice": {
                            "label": "Total Amount",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "1459800",
                                "dlsToken": "primary-500 font-l-semibold"
                            }],
                            "dlsToken": "primary-500"
                        },
                        "finalPriceBreakup": [{
                            "label": "Total Amount",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "1459800",
                                "dlsToken": "primary-500 font-l-semibold"
                            }],
                            "dlsToken": "primary-500"
                        }],
                        "breakup": [{
                            "label": "Price (1 item)",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "1449900"
                            }],
                            "breakupType": "BASE_PRICE_SINGLE_ITEM",
                            "priceAttributeList": []
                        }, {
                            "label": "Protect Promise Fee",
                            "prices": [{
                                "priceType": "PRICE",
                                "currency": "INR",
                                "value": "9900"
                            }],
                            "breakupType": "PROTECT_PROMISE_FEE",
                            "priceAttributeList": []
                        }],
                        "messages": []
                    },
                    "error": null,
                    "failureStatusDetail": null,
                    "errorToast": null,
                    "isDiffShownToUser": false,
                    "triggerDiffPopupPrimaryAction": false,
                    "pageType": "Home",
                    "fallbackBottomSheet": null,
                    "fallbackOption": null,
                    "trustCalloutDetails": {
                        "title": "100% Secure",
                        "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/lock-icon.svg",
                        "displayType": "BOTTOM_SHEET",
                        "content": {
                            "type": "SECURE_INFO_BOTTOMSHEET",
                            "header": {
                                "title": "100% safe and secure payments"
                            },
                            "information": {
                                "secureImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/secure-shield-icon-31082023.svg",
                                "description": "Flipkart payment system is complaint with the Payment Card Industry Data Security Standards (PCI DSS) and uses SSL 256 bit encryption while saving your card information on our highly secure systems. Read our Privacy Policy to learn more.",
                                "footerImages": ["/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/pci-complaint-logo-31082023.svg", "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/ssl-encryption-logo-31082023.svg"]
                            }
                        }
                    }
                },
                "paymentOptions": {
                    "items": [{
                        "type": "OFFER_LIST",
                        "data": {
                            "offerSummary": {
                                "title": "10% instant discount",
                                "subTitle": "Claim now with payment offers",
                                "iconsInfo": {
                                    "remainingOffersCount": 3,
                                    "icons": ["https://static-assets-web.flixcart.com/apex-static/images/payments/upi/paytm-logo.svg", "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/generic_bank.svg"]
                                }
                            },
                            "offers": {
                                "headerTitle": "Offers on online payment",
                                "offerList": [{
                                    "provider": [],
                                    "logo": "https://static-assets-web.flixcart.com/apex-static/images/payments/upi/paytm-logo.svg",
                                    "offerText": {
                                        "text": "Get ₹10 cashback"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO2512041835171GNZ7",
                                        "text": "Flat ₹10 Cashback on Paytm UPI payments. Min Order Value ₹99. Valid once per Paytm account"
                                    }
                                }, {
                                    "provider": [],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/generic_bank.svg",
                                    "offerText": {
                                        "text": "Get ₹15 cashback"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251128153220CWNA9",
                                        "text": "Flat ₹15 Cashback on MobiKwik UPI Transaction. Min Order Value ₹499. Offer Valid Once Per User"
                                    }
                                }, {
                                    "provider": [],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/green-offer-tag.svg",
                                    "offerText": {
                                        "text": "Get ₹50 cashback"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251128181820XE8LC",
                                        "text": "Up To ₹50 Cashback on BHIM Payments App. Min Order Value ₹199. Offer Valid Once Per User"
                                    }
                                }, {
                                    "provider": ["SBI", "FLIPKARTSBI"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/green-offer-tag.svg",
                                    "offerText": {
                                        "text": "Save ₹1,000"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251202175034FIUEG",
                                        "text": "10% off up to ₹1000 on SBI Credit Card EMI Transactions of ₹4,990 and above"
                                    }
                                }, {
                                    "provider": ["ICICI"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg",
                                    "offerText": {
                                        "text": "Save ₹1,500"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO2511211836048EAOQ",
                                        "text": "10% off on ICICI Credit Card EMI Transactions, up to ₹1500 on orders of ₹9,990 and above"
                                    }
                                }, {
                                    "provider": ["FLIPKARTBAJAJFINSERV"],
                                    "logo": "/FK_STATIC_ASSET/apex-static/images/payments/banks/BFL_V3.svg",
                                    "offerText": {
                                        "text": "Save ₹50"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO2510032323329BAXV",
                                        "text": "Flat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500"
                                    }
                                }, {
                                    "provider": ["HDFC"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg",
                                    "offerText": {
                                        "text": "Save ₹1,250"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO2511291527071FZ4Q",
                                        "text": "10% Off Up to ₹1250 on HDFC Bank Credit Card EMI on 6 months and above tenure . Min.Txn Value: ₹4990"
                                    }
                                }, {
                                    "provider": ["FLIPKARTAXISBANK"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/AXIS.svg",
                                    "offerText": {
                                        "text": "Get 5% cashback"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251202142455KPD9T",
                                        "text": "5% cashback on Axis Bank Flipkart Debit Card up to ₹750"
                                    }
                                }, {
                                    "provider": ["SBI"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "offerText": {
                                        "text": "Save ₹1,000"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251203185744V522D",
                                        "text": "10% off up to ₹1,000 on SBI Credit Card Transactions of ₹4,990 and above"
                                    }
                                }, {
                                    "provider": ["FLIPKARTBAJAJFINSERV"],
                                    "logo": "/FK_STATIC_ASSET/apex-static/images/payments/banks/BFL_V3.svg",
                                    "offerText": {
                                        "text": "Save ₹100"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251003233042PW3P9",
                                        "text": "Flat ₹100 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹7,500"
                                    }
                                }, {
                                    "provider": ["FLIPKARTAXISBANK"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/AXIS.svg",
                                    "offerText": {
                                        "text": "Get 5% cashback"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO2509161258586WXGR",
                                        "text": "5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter"
                                    }
                                }, {
                                    "provider": ["FLIPKARTSBI"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "offerText": {
                                        "text": "Get 5% cashback"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO251103123615YLG67",
                                        "text": "5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter"
                                    }
                                }, {
                                    "provider": ["FLIPKARTSBI"],
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "offerText": {
                                        "text": "Save ₹1,000"
                                    },
                                    "offerDescription": {
                                        "type": "tenure.detail.offer.terms.conditions",
                                        "tncText": "Terms and conditions",
                                        "id": "FPO2512021824073COXW",
                                        "text": "5% off up to ₹1000 on Flipkart SBI Credit Card Transactions of ₹4,990 and above"
                                    }
                                }],
                                "filterList": [{
                                    "title": "All Offers",
                                    "type": "provider",
                                    "value": "ALL"
                                }, {
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "title": "State Bank of India",
                                    "type": "provider",
                                    "value": "SBI"
                                }, {
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "title": " Flipkart SBI Credit Card",
                                    "type": "provider",
                                    "value": "FLIPKARTSBI"
                                }, {
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg",
                                    "title": "ICICI Bank",
                                    "type": "provider",
                                    "value": "ICICI"
                                }, {
                                    "logo": "/FK_STATIC_ASSET/apex-static/images/payments/banks/BFL_V3.svg",
                                    "title": "Flipkart Bajaj Finserv",
                                    "type": "provider",
                                    "value": "FLIPKARTBAJAJFINSERV"
                                }, {
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg",
                                    "title": "HDFC Bank",
                                    "type": "provider",
                                    "value": "HDFC"
                                }, {
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/AXIS.svg",
                                    "title": "Flipkart Axis Bank",
                                    "type": "provider",
                                    "value": "FLIPKARTAXISBANK"
                                }]
                            }
                        },
                        "section": "RIGHT",
                        "subSection": null,
                        "stickOnlyOnDesktop": true
                    }, {
                        "type": "PAYMENT_OPTION",
                        "expanded": true,
                        "clickTracking": {
                            "amountPayable": 1459800,
                            "section": "generic",
                            "checkouttype": "normalcheckout"
                        },
                        "data": {
                            "instrumentType": "UPI",
                            "applicable": true,
                            "header": {
                                "title": "UPI",
                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/upi.svg",
                                "messages": [{
                                    "text": "Pay by any UPI app"
                                }],
                                "subtext": [{
                                    "text": "Get upto ₹50 cashback",
                                    "dlsToken": "success-500"
                                }, {
                                    "text": "4 offers available",
                                    "dlsToken": "success-500"
                                }]
                            },
                            "content": {
                                "options": [],
                                "newUpi": {
                                    "title": "Add new UPI ID",
                                    "applicable": true,
                                    "selected": true,
                                    "instrumentCheckRequired": false,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": true,
                                        "amount": 1459800
                                    },
                                    "provider": "PAYTM",
                                    "paymentInstrument": "UPI_COLLECT",
                                    "callout": {
                                        "title": "How to find?",
                                        "image": "",
                                        "displayType": "BOTTOM_SHEET",
                                        "content": {
                                            "type": "PROVIDER_INFO_BOTTOMSHEET",
                                            "header": {
                                                "title": "Steps to find your UPI ID",
                                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/upi.svg"
                                            },
                                            "information": {
                                                "providers": [{
                                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/phonepe.svg",
                                                    "title": "Phonepe",
                                                    "description": ["Open PhonePe App", "Tap on your Profile Picture on top left corner of the screen", "Tap on UPI ID settings to find your UPI ID"]
                                                }, {
                                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/gpay.svg",
                                                    "title": "Google Pay",
                                                    "description": ["Open Google Pay App", "Tap on your Profile Picture on top right corner of the screen", "You will find your UPI ID below your name and phone number"]
                                                }, {
                                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/paytm-logo.svg",
                                                    "title": "Paytm",
                                                    "description": ["Open Paytm App", "Tap on your Profile Picture on top left corner of the screen", "You will find your UPI ID below your name"]
                                                }, {
                                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/bhim.svg",
                                                    "title": "Bhim",
                                                    "description": ["Open BHIM App", "Tap on your Profile Picture on top left corner of the screen"]
                                                }],
                                                "buttonText": "Okay"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "section": "LEFT",
                        "subSection": "CENTER"
                    }, {
                        "type": "PAYMENT_OPTION",
                        "expanded": false,
                        "clickTracking": {
                            "amountPayable": 1459800,
                            "section": "generic",
                            "checkouttype": "normalcheckout"
                        },
                        "data": {
                            "instrumentType": "CREDIT",
                            "applicable": true,
                            "header": {
                                "title": "Credit / Debit / ATM Card",
                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/card.svg",
                                "messages": [{
                                    "text": "Add and secure cards as per RBI guidelines"
                                }],
                                "subtext": [{
                                    "text": "Save upto ₹1,000",
                                    "dlsToken": "success-500"
                                }, {
                                    "text": "4 offers available",
                                    "dlsToken": "success-500"
                                }]
                            },
                            "content": {
                                "options": [{
                                    "applicable": false,
                                    "selected": false,
                                    "instrumentCheckRequired": false,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "type": "NEW_CARD",
                                    "networkLogo": {
                                        "DISCOVER": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/DISCOVER.svg",
                                        "DINERS": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/DINERS.svg",
                                        "RUPAY": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/RUPAY.svg",
                                        "AMEX": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/AMEX.svg",
                                        "MASTERCARD": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/MASTERCARD.svg",
                                        "MAESTRO": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/MAESTRO.svg",
                                        "JCB": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/JCB.svg",
                                        "VISA": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/network-logos/VISA-080823.svg"
                                    },
                                    "headerInformation": {
                                        "formatText": "**Note:** Please ensure your card can be used for online transactions. [Learn More](loadMoreLink)",
                                        "actionMap": {
                                            "loadMoreLink": {
                                                "displayType": "BOTTOM_SHEET",
                                                "action": {
                                                    "url": "/fkpay/v5/payments/faq/emi/FLIPKARTAXISBANK",
                                                    "type": "AJAX",
                                                    "method": "GET"
                                                }
                                            }
                                        }
                                    },
                                    "cvvCallout": {
                                        "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/help-icon-black.svg",
                                        "displayType": "BOTTOM_SHEET",
                                        "content": {
                                            "type": "EDUCATIONAL_BOTTOMSHEET",
                                            "information": [{
                                                "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/cvv_banner.svg",
                                                "headerTitle": "What is CVV?",
                                                "description": "The CVV number is the last three digits on the back of your card"
                                            }]
                                        }
                                    }
                                }]
                            }
                        },
                        "section": "LEFT",
                        "subSection": "CENTER"
                    }, {
                        "type": "PAYMENT_OPTION",
                        "expanded": false,
                        "clickTracking": {
                            "checkouttype": "normalcheckout"
                        },
                        "data": {
                            "instrumentType": "EMI_OPTIONS",
                            "applicable": true,
                            "header": {
                                "title": "EMI",
                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/emi-header-08092023.svg",
                                "messages": [{
                                    "text": "Get Debit and Cardless EMIs on HDFC Bank"
                                }]
                            },
                            "content": {
                                "guidingSteps": {
                                    "title": "Get EMI in 3 easy steps",
                                    "steps": [{
                                        "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/card.svg",
                                        "text": "Choose bank"
                                    }, {
                                        "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/calender-blank.svg",
                                        "text": "Choose Plan"
                                    }, {
                                        "image": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/black-tick.svg",
                                        "text": "Confirm & Pay"
                                    }]
                                },
                                "options": [{
                                    "title": "SBI",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "applicable": true,
                                    "selected": true,
                                    "aggregatedOffer": {
                                        "selectedText": "1 offer applicable",
                                        "defaultText": "1 offer applicable",
                                        "selectedImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/offer-unselected.svg",
                                        "defaultImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/offer-unselected.svg",
                                        "dlsToken": "",
                                        "callout": {
                                            "title": "Details",
                                            "displayType": "BOTTOM_SHEET",
                                            "content": {
                                                "type": "OFFER_LIST",
                                                "header": {
                                                    "title": "Offer Details"
                                                },
                                                "information": {
                                                    "offers": [{
                                                        "offerHeader": {
                                                            "title": "10% off up to ₹1000 on SBI Credit Card EMI Transactions of ₹4,990 and above",
                                                            "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/green-offer-tag.svg"
                                                        },
                                                        "offerDescription": [{
                                                            "key": "Min. order value",
                                                            "value": "₹4,990",
                                                            "token": ""
                                                        }, {
                                                            "key": "Max Order Value",
                                                            "value": "₹10,00,000",
                                                            "token": ""
                                                        }, {
                                                            "key": "Max. discount",
                                                            "value": "₹1,000",
                                                            "token": ""
                                                        }, {
                                                            "key": "You get",
                                                            "value": "₹1,000",
                                                            "token": "success-500"
                                                        }],
                                                        "offerFooter": {
                                                            "tncInfo": {
                                                                "id": "FPO251202175034FIUEG",
                                                                "text": "Read offer T&C"
                                                            }
                                                        }
                                                    }]
                                                }
                                            }
                                        }
                                    },
                                    "instrumentCheckRequired": false,
                                    "emiType": "credit-card",
                                    "bankCode": "SBI",
                                    "buttonText": "See Plans",
                                    "inlineOfferMessage": [[{
                                        "text": "EMI  ",
                                        "dlsToken": "",
                                        "type": "TEXT"
                                    }, {
                                        "text": "₹712/m",
                                        "type": "TEXT"
                                    }]],
                                    "messages": [],
                                    "clickTracking": {
                                        "amountPayable": 1459800
                                    }
                                }, {
                                    "title": "Flipkart SBI Credit Card",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "aggregatedOffer": {
                                        "selectedText": "1 offer applicable",
                                        "defaultText": "1 offer applicable",
                                        "selectedImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/offer-unselected.svg",
                                        "defaultImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/offer-unselected.svg",
                                        "dlsToken": "",
                                        "callout": {
                                            "title": "Details",
                                            "displayType": "BOTTOM_SHEET",
                                            "content": {
                                                "type": "OFFER_LIST",
                                                "header": {
                                                    "title": "Offer Details"
                                                },
                                                "information": {
                                                    "offers": [{
                                                        "offerHeader": {
                                                            "title": "10% off up to ₹1000 on SBI Credit Card EMI Transactions of ₹4,990 and above",
                                                            "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/green-offer-tag.svg"
                                                        },
                                                        "offerDescription": [{
                                                            "key": "Min. order value",
                                                            "value": "₹4,990",
                                                            "token": ""
                                                        }, {
                                                            "key": "Max Order Value",
                                                            "value": "₹10,00,000",
                                                            "token": ""
                                                        }, {
                                                            "key": "Max. discount",
                                                            "value": "₹1,000",
                                                            "token": ""
                                                        }, {
                                                            "key": "You get",
                                                            "value": "₹1,000",
                                                            "token": "success-500"
                                                        }],
                                                        "offerFooter": {
                                                            "tncInfo": {
                                                                "id": "FPO251202175034FIUEG",
                                                                "text": "Read offer T&C"
                                                            }
                                                        }
                                                    }]
                                                }
                                            }
                                        }
                                    },
                                    "instrumentCheckRequired": false,
                                    "emiType": "credit-card",
                                    "bankCode": "FLIPKARTSBI",
                                    "buttonText": "See Plans",
                                    "inlineOfferMessage": [[{
                                        "text": "EMI  ",
                                        "dlsToken": "",
                                        "type": "TEXT"
                                    }, {
                                        "text": "₹712/m",
                                        "type": "TEXT"
                                    }]],
                                    "messages": [],
                                    "clickTracking": {
                                        "amountPayable": 1459800
                                    }
                                }, {
                                    "title": "HDFC Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "aggregatedOffer": {
                                        "selectedText": "1 offer applicable",
                                        "defaultText": "1 offer applicable",
                                        "selectedImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/offer-unselected.svg",
                                        "defaultImage": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/offer-unselected.svg",
                                        "dlsToken": "",
                                        "callout": {
                                            "title": "Details",
                                            "displayType": "BOTTOM_SHEET",
                                            "content": {
                                                "type": "OFFER_LIST",
                                                "header": {
                                                    "title": "Offer Details"
                                                },
                                                "information": {
                                                    "offers": [{
                                                        "offerHeader": {
                                                            "title": "10% Off Up to ₹1250 on HDFC Bank Credit Card EMI on 6 months and above tenure . Min.Txn Value: ₹4990",
                                                            "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/green-offer-tag.svg"
                                                        },
                                                        "offerDescription": [{
                                                            "key": "Min. order value",
                                                            "value": "₹4,990",
                                                            "token": ""
                                                        }, {
                                                            "key": "Max Order Value",
                                                            "value": "₹10,00,000",
                                                            "token": ""
                                                        }, {
                                                            "key": "Max. discount",
                                                            "value": "₹1,250",
                                                            "token": ""
                                                        }, {
                                                            "key": "You get",
                                                            "value": "₹1,250",
                                                            "token": "success-500"
                                                        }],
                                                        "offerFooter": {
                                                            "tncInfo": {
                                                                "id": "FPO2511291527071FZ4Q",
                                                                "text": "Read offer T&C"
                                                            }
                                                        }
                                                    }]
                                                }
                                            }
                                        }
                                    },
                                    "instrumentCheckRequired": false,
                                    "emiType": "credit-card",
                                    "bankCode": "HDFC",
                                    "buttonText": "See Plans",
                                    "inlineOfferMessage": [[{
                                        "text": "EMI  ",
                                        "dlsToken": "",
                                        "type": "TEXT"
                                    }, {
                                        "text": "₹715/m",
                                        "type": "TEXT"
                                    }]],
                                    "messages": [],
                                    "clickTracking": {
                                        "amountPayable": 1459800
                                    }
                                }],
                                "disableAllEmiOptionsButton": false
                            }
                        },
                        "section": "LEFT",
                        "subSection": "CENTER"
                    }, {
                        "type": "PAYMENT_OPTION",
                        "expanded": false,
                        "clickTracking": {
                            "instrumentType": "Top Banks",
                            "section": "generic",
                            "checkouttype": "normalcheckout"
                        },
                        "data": {
                            "instrumentType": "NET_OPTIONS",
                            "applicable": true,
                            "header": {
                                "title": "Net Banking",
                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/net-banking-08092023.svg"
                            },
                            "content": {
                                "options": [{
                                    "title": "State Bank of India",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
                                    "applicable": true,
                                    "selected": true,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "SBI",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "HDFC Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "HDFC",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "ICICI Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "ICICI",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "Kotak Mahindra Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/KOTAK.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "KOTAK",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "Axis Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/AXIS.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "AXIS",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "Federal Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/FEDERAL.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "FEDERALBANK",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "Indian Overseas Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/IOB.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "IOB",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }, {
                                    "title": "Indian Bank",
                                    "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/banks/INB.svg",
                                    "applicable": true,
                                    "selected": false,
                                    "instrumentCheckRequired": true,
                                    "payButtonDetails": {
                                        "irisKey": "payAmount",
                                        "disablePayButton": false,
                                        "amount": 1459800
                                    },
                                    "bankCode": "INDIANBANK",
                                    "paymentInstrument": "NET_OPTIONS",
                                    "messages": []
                                }],
                                "disableAllOtherBanksButton": false
                            }
                        },
                        "section": "LEFT",
                        "subSection": "CENTER"
                    }, {
                        "type": "PAYMENT_OPTION",
                        "expanded": false,
                        "clickTracking": {
                            "isOfferApplied": false,
                            "amountPayable": 1459800,
                            "discount": 0,
                            "section": "generic",
                            "checkouttype": "normalcheckout"
                        },
                        "data": {
                            "instrumentType": "COD",
                            "applicable": true,
                            "header": {
                                "title": "Cash on Delivery",
                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/cash-icon.svg"
                            },
                            "content": {
                                "options": [{
                                    "applicable": true,
                                    "selected": true,
                                    "instrumentCheckRequired": false,
                                    "payButtonDetails": {
                                        "irisKey": "placeOrder",
                                        "disablePayButton": false,
                                        "buttonAction": {
                                            "displayType": "BOTTOM_SHEET",
                                            "content": {
                                                "type": "COD_CONFIRMATION_BOTTOMSHEET",
                                                "header": {
                                                    "title": "Confirm Cash on Delivery Order"
                                                },
                                                "information": {
                                                    "image": "/FK_STATIC_ASSET/apex-static/images/payments/cod/confirmation-banners/en.svg",
                                                    "primaryBtn": "Confirm order",
                                                    "secBtn": "Cancel"
                                                }
                                            }
                                        }
                                    },
                                    "instrumentDetails": {
                                        "disablePayButton": false,
                                        "disablePayTimeout": 0,
                                        "paymentInstrument": "COD",
                                        "pageDiff": {
                                            "priceSummary": {
                                                "breakupOrderingList": ["REMAINING_AMOUNT_SINGLE_ITEM", "REMAINING_AMOUNT_MULTIPLE_ITEM", "BASE_PRICE_SINGLE_ITEM", "BASE_PRICE_MULTIPLE_ITEMS", "TOTAL_LOAN_AMOUNT", "ADVANCE_BASE_PRICE", "DELIVERY_CHARGE", "PICKUP_CHARGE", "PACKAGING_CHARGE", "SALE_FEE", "PLATFORM_FEE", "CONVENIENCE_FEE", "PROTECT_PROMISE_FEE", "RAIN_FEE", "SELLER_HANDLING_FEE", "HANDLING_FEE", "EGV", "EGV_WALLET", "INTEREST_BY_BANK", "NC_EMI_DISCOUNT", "FK_PAYLATER_CREDIT", "FK_PAYLATER_EMI_CREDIT", "FK_PAYLATER_DISCOUNT", "PAY_AT_DELIVERY", "AMOUNT_PAYABLE", "APPROVED_EMI_AMOUNT"],
                                                "finalPriceBreakupOrderingList": ["AMOUNT_PAYABLE"],
                                                "finalPrice": {
                                                    "label": "Total Amount",
                                                    "prices": [{
                                                        "priceType": "PRICE",
                                                        "currency": "INR",
                                                        "value": "1459800",
                                                        "dlsToken": "primary-500 font-l-semibold"
                                                    }],
                                                    "dlsToken": "primary-500",
                                                    "breakupType": "AMOUNT_PAYABLE"
                                                },
                                                "finalPriceBreakup": [{
                                                    "label": "Total Amount",
                                                    "prices": [{
                                                        "priceType": "PRICE",
                                                        "currency": "INR",
                                                        "value": "1459800",
                                                        "dlsToken": "primary-500 font-l-semibold"
                                                    }],
                                                    "dlsToken": "primary-500",
                                                    "breakupType": "AMOUNT_PAYABLE"
                                                }],
                                                "breakup": []
                                            }
                                        },
                                        "infoMessages": []
                                    },
                                    "message": "40,181 people used online payment options in the last hour. Pay online now for safe and contactless delivery.",
                                    "nudgeInfo": {
                                        "logo": "",
                                        "title": "₹50 discount on online payments",
                                        "description": "use UPI to avail"
                                    },
                                    "advancePaymentApplicable": false
                                }]
                            }
                        },
                        "section": "LEFT",
                        "subSection": "CENTER"
                    }, {
                        "type": "EGV",
                        "expanded": false,
                        "clickTracking": {
                            "amountPayable": 1459800,
                            "section": "generic",
                            "checkouttype": "normalcheckout"
                        },
                        "data": {
                            "instrumentType": "EGV",
                            "applicable": true,
                            "header": {
                                "title": "Have a Flipkart Gift Card?",
                                "logo": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/gift-card-logo-09082023.svg",
                                "disableAddBtn": false,
                                "addBtnText": "Add"
                            }
                        },
                        "section": "LEFT",
                        "subSection": "CENTER"
                    }, {
                        "type": "DYNAMIC_BANNER",
                        "data": {
                            "text": "35 Crore happy customers and counting!",
                            "icon": "/FK_STATIC_ASSET/fk-p-linchpin-web/fk-gringotts/images/smiley.svg"
                        },
                        "section": "FOOTER",
                        "subSection": null
                    }],
                    "isRedirectedFromInternalRoutes": false,
                    "selectedPaymentInstrument": "UPI",
                    "selectedPaymentOption": null,
                    "defaultSelections": {
                        "primaryPaymentInstrument": "UPI",
                        "totalAmountPayableZero": false
                    },
                    "isFPLEMIError": false,
                    "isFPLEMISelected": false,
                    "isEgvExpanded": false,
                    "codOptionData": {
                        "isCodOptionAvailable": true,
                        "payButtonDetails": {
                            "irisKey": "placeOrder",
                            "disablePayButton": false,
                            "buttonAction": {
                                "displayType": "BOTTOM_SHEET",
                                "content": {
                                    "type": "COD_CONFIRMATION_BOTTOMSHEET",
                                    "header": {
                                        "title": "Confirm Cash on Delivery Order"
                                    },
                                    "information": {
                                        "image": "/FK_STATIC_ASSET/apex-static/images/payments/cod/confirmation-banners/en.svg",
                                        "primaryBtn": "Confirm order",
                                        "secBtn": "Cancel"
                                    }
                                }
                            }
                        },
                        "instrumentTrackingData": {
                            "isOfferApplied": false,
                            "amountPayable": 1459800,
                            "discount": 0,
                            "section": "generic",
                            "checkouttype": "normalcheckout"
                        },
                        "pageTrackingData": {
                            "disabledPaymentOptions": [],
                            "isM3Flow": true,
                            "isPartPayment": true,
                            "offersAvailable": {
                                "offerCount": 13,
                                "offerSummary": [{
                                    "id": "FPO2512041835171GNZ7",
                                    "type": "CASHBACK_ON_CARD",
                                    "value": 1000
                                }, {
                                    "id": "FPO251128153220CWNA9",
                                    "type": "CASHBACK_ON_CARD",
                                    "value": 1500
                                }, {
                                    "id": "FPO251128181820XE8LC",
                                    "type": "CASHBACK_ON_CARD",
                                    "value": 5000
                                }, {
                                    "id": "FPO251202175034FIUEG",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 100000
                                }, {
                                    "id": "FPO2511211836048EAOQ",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 150000
                                }, {
                                    "id": "FPO2510032323329BAXV",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 5000
                                }, {
                                    "id": "FPO2511291527071FZ4Q",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 125000
                                }, {
                                    "id": "FPO251202142455KPD9T",
                                    "type": "CASHBACK_ON_CARD",
                                    "value": 75000
                                }, {
                                    "id": "FPO251203185744V522D",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 100000
                                }, {
                                    "id": "FPO251003233042PW3P9",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 10000
                                }, {
                                    "id": "FPO2509161258586WXGR",
                                    "type": "CASHBACK_ON_CARD",
                                    "value": 400000
                                }, {
                                    "id": "FPO251103123615YLG67",
                                    "type": "CASHBACK_IN_BANK",
                                    "value": 400000
                                }, {
                                    "id": "FPO2512021824073COXW",
                                    "type": "INSTANT_DISCOUNT",
                                    "value": 100000
                                }]
                            },
                            "isCODApplicable": true,
                            "isRiskBasedFPLAvailable": false,
                            "isCODAdvance": false,
                            "isSplitPayment": false,
                            "isNCEMIAvailable": false,
                            "giftCardUsed": false,
                            "paymentOptionsSaved": [],
                            "paymentOptionsRegular": {
                                "paymentOptions": [{
                                    "paymentOption": "UPI"
                                }, {
                                    "paymentOption": "CREDIT"
                                }, {
                                    "paymentOption": "EMI_OPTIONS"
                                }, {
                                    "paymentOption": "NET_OPTIONS"
                                }, {
                                    "paymentOption": "COD"
                                }],
                                "count": 5
                            },
                            "EGVWalletUsed": false,
                            "checkouttype": "normalcheckout"
                        }
                    }
                },
                "emiOptions": {
                    "items": [],
                    "searchInfo": null,
                    "filteredBanks": [],
                    "emiBanksPageDetails": null
                },
                "emiPlans": {
                    "tenureSections": null,
                    "submitPayload": null,
                    "breakup": [],
                    "tenureDetails": null,
                    "redirectionPageType": null
                },
                "emiSummary": {
                    "baseEmiInfo": null,
                    "updatedEmiInfo": null,
                    "baseAdditionalInfo": null,
                    "additionalInfo": null,
                    "inputDetails": null,
                    "tncInfo": null,
                    "buttonInfo": null,
                    "emiSummaryPageDetails": null
                },
                "emiItemLevel": {
                    "items": null,
                    "error": null,
                    "asyncStatus": "INIT"
                },
                "otp": {
                    "ivrData": null,
                    "asyncStatus": "INIT",
                    "error": "",
                    "otp": "",
                    "autoCaptureTimerState": "DISABLED",
                    "otpSubmitAction": null,
                    "otpAuthenticationErrorString": "",
                    "autoSubmitTimerState": "DISABLED",
                    "resendTimerState": "DISABLED"
                },
                "wallet": {
                    "walletDetails": null
                },
                "submit": {
                    "payData": null,
                    "pwdData": null,
                    "error": null,
                    "pwdErrorData": null,
                    "asyncStatus": "INIT"
                },
                "instrumentCheckData": {
                    "asyncStatus": "INIT",
                    "authMode": "",
                    "updatedPayButtonDetails": null,
                    "shouldFocusOnExpiry": false
                },
                "upiPoll": {
                    "pollInfo": null,
                    "upiPollInfoStatus": "",
                    "pollData": null,
                    "pollDataStatus": "INIT",
                    "upiSuffix": "",
                    "retryAttempts": 0,
                    "pollingAttemptLogsForDebugging": {
                        "pollingSuccessUsingRetryAttempts": false,
                        "retryAttemptsCount": 0,
                        "totalPollCallsHit": 0
                    }
                },
                "toast": {
                    "showToast": false,
                    "message": "",
                    "timeOut": 3000
                },
                "appConfig": {
                    "locale": "en",
                    "platformDetails": {
                        "isShopsyClient": false,
                        "platform": "web",
                        "version": 0,
                        "hostname": "www.flipkart.com",
                        "fkUA": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 FKUA/website/42/website/Desktop"
                    },
                    "jsFlags": {
                        "disableFDPIngestionToNative": false,
                        "isMessageHandlersEnabled": true,
                        "disable3ds2": false,
                        "disableKevlar": false,
                        "enableSSRFallback": false,
                        "npciTokenExpiryStatusOverridden": true,
                        "disableUserstateCall": false,
                        "shouldPassTokenForFkUpiCredBlock": true,
                        "disableRateLimitPwdEnhancement": false,
                        "enableServerSideFormSubmit": false,
                        "revertRevampedUXonUIScoop": false,
                        "enablePaymentTokenValidation": true
                    },
                    "ssrConfig": {
                        "Emiplans": false,
                        "Emibanks": false,
                        "Home": true
                    },
                    "sdkConfig": {
                        "disablePhonePeSdk": false,
                        "disableJuspaySdk": false,
                        "disbalePaytmWalletSdk": false,
                        "disableJuspaySdkForIos": false,
                        "juspaySdkIOSABOverride": false,
                        "payUSdkConfig": {
                            "fallback3DS1": "true",
                            "autoRead": "true",
                            "autoSubmit": "false",
                            "authenticateOnly": "false",
                            "enableCustomizedOtpUIFlow": "true",
                            "enableTxnTimeoutTimer": "false",
                            "merchantName": "Flipkart",
                            "enableMFAViaBiometric": "true",
                            "acsContentConfig": {
                                "otpContent": "We have sent you an OTP to your registered mobile number.",
                                "resendButtonTitle": "RESENT OTP",
                                "submitButtonTitle": "SUBMIT"
                            }
                        }
                    },
                    "timeoutConfig": {
                        "appConfigTtl": 600000,
                        "pgResponseHandlerApiTimeout": 20000,
                        "getCredBlockForFkUpiBridgeRequestTimeout": 45000,
                        "fkPayApiTimeout": 5000,
                        "bioAuthConfigMFATimeoutBuffer": 20000
                    },
                    "versionConfig": {
                        "minIosVersionForIntent": "10.23.1",
                        "minAndroidVersionForFKUPIPermissionRevamp": "2171000",
                        "jusPayMinimumIosVersion": "10.46.2"
                    },
                    "commonConfig": {
                        "maxUpiPollRetryAttempts": 10,
                        "cvvLessCardInfo": ["BAJAJFINSERV", "FLIPKARTBAJAJFINSERV"],
                        "bottomSheetTypeToModal": ["PRICE_DETAILS_BOTTOMSHEET"],
                        "uiScoopFailureRedirection": "https://www.flipkart.com/rv/orders",
                        "validPaymentTokenPrefixes": ["PN"]
                    }
                },
                "abConfig": {
                    "asyncStatus": "SUCCESS",
                    "abData": {
                        "sonic_gcp_migration_msite": {
                            "abVariables": {
                                "sonicGcpMigration": true
                            },
                            "isABEventTracked": true,
                            "abId": "STG|launchedGroup|b1cfdbd0|h"
                        }
                    },
                    "abEventsToBeTracked": [{
                        "expId": "sonic_gcp_migration_msite",
                        "abId": "STG|launchedGroup|b1cfdbd0|h"
                    }, {
                        "abId": "STG|prestart|12f6b413|h",
                        "expId": "fraud_check"
                    }, {
                        "abId": "",
                        "expId": ""
                    }]
                },
                "pgResponse": {
                    "pgData": null,
                    "pgResponseStatus": "INIT"
                },
                "egv": {
                    "errorMessage": null,
                    "egvPaymentSuccessData": null,
                    "asyncStatus": "INIT"
                },
                "netBankingOptions": {
                    "searchInfo": null,
                    "items": null
                },
                "kfs": {
                    "kfsHeader": null,
                    "kfsDetails": null,
                    "repaymentSchedule": null
                },
                "fkUpiPoll": {
                    "pageInfo": null,
                    "pollDataStatus": "INIT",
                    "pageStatus": "",
                    "pollData": null,
                    "animationDataAsyncStatus": "INIT",
                    "txnInitAnimationObj": null,
                    "txnInProgressAnimationObj": null,
                    "txnCompleteAnimationObj": null,
                    "retryAttempts": 0,
                    "pollingAttemptLogsForDebugging": {
                        "pollingSuccessUsingRetryAttempts": false,
                        "retryAttemptsCount": 0,
                        "totalPollCallsHit": 0
                    }
                },
                "tooltipReducer": {
                    "id": null
                },
                "fkupiData": {
                    "fkUpiAccountDetails": null,
                    "fkUpiVerifyInfo": null,
                    "asyncStatus": "INIT"
                },
                "superPayLaterInfo": {
                    "superpayActivationCallout": null,
                    "footer": "",
                    "superPayStatus": "INIT",
                    "animationData": null,
                    "superPayAnimationStatus": "INIT",
                    "pollData": null,
                    "pollingInfo": null
                },
                "superPayLater": {
                    "accountDetails": [],
                    "fetchAccountsStatus": null,
                    "error": null
                },
                "categoryEMIBanks": {
                    "items": [],
                    "searchInfo": null,
                    "filteredBanks": [],
                    "categoryEMIBanksPageDetails": null,
                    "categoryItems": [],
                    "categoryTabs": []
                },
                "categoryEMIPlans": {
                    "tenureSections": null,
                    "submitPayload": null,
                    "tenureDetails": null,
                    "redirectionPageType": null,
                    "showSplitPriceSummary": false,
                    "breakup": [],
                    "planSelectionButtonDetails": null,
                    "bankHeaderInfo": null,
                    "infoMessages": null
                },
                "rtgsPollPage": {
                    "pageInfo": null,
                    "pageStatus": "",
                    "pollData": null,
                    "pollDataStatus": "INIT",
                    "retryAttempts": 0,
                    "pollingAttemptLogsForDebugging": {
                        "pollingSuccessUsingRetryAttempts": false,
                        "retryAttemptsCount": 0,
                        "totalPollCallsHit": 0
                    }
                }
            }
}


### 2. Get Highest Discount (GET)
Endpoint: GET /highest-discount Description: Calculates the maximum discount based on cart value, bank, and payment method. Query Params:

amountToPay: (Number) Total cart value.

bankName: (String) e.g., "SBI", "HDFC".

paymentInstrument: (String) Optional. e.g., "EMI", "CREDIT_CARD".

Example: GET /highest-discount?amountToPay=15000&bankName=SBI&paymentInstrument=EMI

##  Design Choices & Assumptions

### 1. Parsing Strategy (Option A vs. Option B)
I chose to parse the Master Offer List (items[0].data.offers.offerList)(Option A) rather than the filtered aggregatedOffers(Option B).

Reason: The master list contains all available offers, whereas the aggregated section only shows the single best offer for a specific bank. Using the master list ensures data completeness.

Regex: I used robust Regex patterns to extract numeric values (Percentage, Max Discount, Min Order Value) from the descriptive text strings.

### 2. Database Schema
MongoDB: Chosen for its flexibility. Since we are reverse-engineering a third-party API, the structure might change. A NoSQL DB handles these variations better than a rigid SQL schema.

Upsert Logic: The ingestion API uses updateOne with { upsert: true }. This prevents duplicates by updating existing offers (based on their unique Flipkart ID) rather than creating new entries every time.This would also directly help in making a count of the newly entered offers in the database and return as a response for this particular post request.

Mentioning Payment instrument as an array:
Multi-Card Offers: An offer might say "10% off on Axis Credit and Debit Cards". In this case, your parser will push both "CREDIT_CARD" and "DEBIT_CARD" into the array. You need an array to store both tags for a single offer.

### 3. Bonus: Payment Instruments
I implemented a dynamic tagger that scans the offer description for keywords like "EMI", "Credit Card", or "UPI" to automatically populate the paymentInstruments array. This allows for precise filtering in the calculation API.

### 4. Api structure :
I have assumed that the receiving offer json from flipkart will be as mentioned earlier in the 1st endpoint documentation, i had to design the parser based on that ,if the offer response from flipkart api changes then the parsing logic will also change .

##  Scaling for 1,000 Requests Per Second
To scale the GET /highest-discount endpoint to handle 1,000 RPS, I would implement the following:

### 1. Redis Caching: 
The discount calculation is read-heavy. The offer data changes infrequently. I would cache the "Applicable Offers" for a specific Bank/Instrument combination in Redis. This avoids hitting MongoDB for every request.

### 2.Database Indexing:
 Ensure compound indexes exist on bankName and paymentInstruments fields in MongoDB for instantaneous lookups.

### 3.Horizontal Scaling: 
Run the Node.js application behind a Load Balancer (like Nginx or AWS ALB) across multiple instances (using Docker/Kubernetes) to distribute the traffic load.

### 4.Worker Threads:
 If the Regex parsing becomes CPU intensive during high-volume ingestion, I would offload that processing to a separate worker service or queue (RabbitMQ).

## 🔮 Future Improvements

If I had more time, I would implement the following features to make the system production-ready and user-friendly:

### 1. Automated Data Fetching (Web Scraping)
Instead of manually pasting the JSON payload, I would build a simple **Frontend Interface** (React/HTML) where users can paste a Flipkart product link. The backend would use a headless browser (like Puppeteer) or an HTTP client to fetch the page, extract the `window.__INITIAL_STATE__` JSON automatically, and parse it.

### 2. Advanced Offer Restrictions
Currently, the system handles caps and minimums. I would extend the schema and logic to parse and enforce frequency restrictions mentioned in the text, such as:
* "Valid once per user"
* "Max 1 transaction per card per month"
* "Valid only on first transaction"

### 3. Detailed EMI Schedules & Frequency
I would upgrade the `GET /highest-discount` API to handle granular EMI details.
* **Request:** Allow users to specify frequency (e.g., `paymentFrequency=MONTHLY` or `QUARTERLY`).
* **Response:** Return a complete payment schedule, including:
    * Exact EMI amount to be paid per period.
    * Total interest calculated vs. No Cost EMI benefits.
    * Effective discount percentage after factoring in interest.

### 4. Input Validation
* **Validation:** Use libraries like **Zod** or **Joi** to strictly validate the incoming Flipkart JSON structure, ensuring the server handles unexpected API changes gracefully.


