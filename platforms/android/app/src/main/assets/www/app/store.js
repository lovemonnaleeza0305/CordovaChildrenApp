/*
 * JS for store generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '5df45570-e9a1-479d-978b-deb350f290d0';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "PDFPreview",
    "location": "PDFPreview.html"
}, {
    "name": "addMyStudents",
    "location": "addMyStudents.html"
}, {
    "name": "Attendance",
    "location": "Attendance.html"
}, {
    "name": "store_volunteer",
    "location": "store_volunteer.html"
}, {
    "name": "payment",
    "location": "payment.html"
}, {
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "podInventory",
    "location": "podInventory.html"
}, {
    "name": "orderDisplay",
    "location": "orderDisplay.html"
}, {
    "name": "Reading",
    "location": "Reading.html"
}, {
    "name": "adminCheckAttendance",
    "location": "adminCheckAttendance.html"
}, {
    "name": "evaluatePod",
    "location": "evaluatePod.html"
}, {
    "name": "Lessons",
    "location": "Lessons.html"
}, {
    "name": "Assessment",
    "location": "Assessment.html"
}, {
    "name": "register",
    "location": "register.html"
}, {
    "name": "registerProfile",
    "location": "registerProfile.html"
}, {
    "name": "store",
    "location": "store.html"
}, {
    "name": "paymentHistories",
    "location": "paymentHistories.html"
}, {
    "name": "Reports",
    "location": "Reports.html"
}, {
    "name": "Assessments",
    "location": "Assessments.html"
}, {
    "name": "AdminFeedback",
    "location": "AdminFeedback.html"
}, {
    "name": "searchPodEvaluations",
    "location": "searchPodEvaluations.html"
}, {
    "name": "orderDisplay_food",
    "location": "orderDisplay_food.html"
}, {
    "name": "Login",
    "location": "Login.html"
}, {
    "name": "adminDash",
    "location": "adminDash.html"
}, {
    "name": "assessmentReportStudent",
    "location": "assessmentReportStudent.html"
}, {
    "name": "updateStudentPoints",
    "location": "updateStudentPoints.html"
}, {
    "name": "Splash",
    "location": "Splash.html"
}, {
    "name": "foodStoreAccess",
    "location": "foodStoreAccess.html"
}];

function store_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_72': 'store_mobilegrid_72',
        'mobilegridcell_73': 'store_mobilegridcell_73',
        'mobilebutton_77': 'store_mobilebutton_77',
        'mobilegridcell_74': 'store_mobilegridcell_74',
        'mobilelabel_78': 'store_mobilelabel_78',
        'mobilegridcell_79': 'store_mobilegridcell_79',
        'mobilebutton_61': 'store_mobilebutton_61',
        'topPagePoints': 'store_topPagePoints',
        'mobilegrid_3': 'store_mobilegrid_3',
        'mobilegridcell_4': 'store_mobilegridcell_4',
        'prizeName': 'store_prizeName',
        'prizeImage': 'store_prizeImage',
        'soldOut': 'store_soldOut',
        'prizeDescription': 'store_prizeDescription',
        'prizePoints': 'store_prizePoints',
        'qty_label': 'store_qty_label',
        'mobilegrid_38': 'store_mobilegrid_38',
        'mobilegridcell_39': 'store_mobilegridcell_39',
        'imageThumb': 'store_imageThumb',
        'productName': 'store_productName',
        'pointsPopUp': 'store_pointsPopUp',
        'prizeID': 'store_prizeID',
        'quantityLabel': 'store_quantityLabel',
        'thisCostLabel': 'store_thisCostLabel',
        'notEnoughGrid': 'store_notEnoughGrid',
        'mobilegridcell_44': 'store_mobilegridcell_44',
        'mobilelabel_48': 'store_mobilelabel_48',
        'successGrid': 'store_successGrid',
        'mobilegridcell_50': 'store_mobilegridcell_50',
        'mobilelabel_54': 'store_mobilelabel_54',
        'checkoutGrid': 'store_checkoutGrid',
        'mobilegridcell_81': 'store_mobilegridcell_81',
        'mobilelabel_25': 'store_mobilelabel_25',
        'notEnoughLabel': 'store_notEnoughLabel',
        'mobilegrid_87': 'store_mobilegrid_87',
        'mobilegridcell_88': 'store_mobilegridcell_88',
        'mobilelabel_93': 'store_mobilelabel_93',
        'mobilegridcell_89': 'store_mobilegridcell_89',
        'qty_input': 'store_qty_input',
        'mobilegridcell_94': 'store_mobilegridcell_94',
        'plusQty_button': 'store_plusQty_button',
        'minusQty_button': 'store_minusQty_button',
        'yesNoGrid': 'store_yesNoGrid',
        'mobilegridcell_28': 'store_mobilegridcell_28',
        'yesButton': 'store_yesButton',
        'mobilegridcell_29': 'store_mobilegridcell_29',
        'noButton': 'store_noButton',
        'mobilelabel_85': 'store_mobilelabel_85',
        'mobilelabel_63': 'store_mobilelabel_63',
        'mobilegrid_64': 'store_mobilegrid_64',
        'mobilegridcell_65': 'store_mobilegridcell_65',
        'itemImage': 'store_itemImage',
        'mobilegridcell_66': 'store_mobilegridcell_66',
        'itemName': 'store_itemName',
        'mobilegridcell_69': 'store_mobilegridcell_69',
        'status': 'store_status',
        'dateplaced': 'store_dateplaced',
        'mobilelabel_70': 'store_mobilelabel_70'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.mappings["store_listPrizes_onsuccess_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "from_name": "listPrizes",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "store",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]['prizeImage']",
                        "target": "$['mobilegrid_3']['prizeImage:image']"
                    },
                    {
                        "source": "$['body'][i]['prizeName']",
                        "target": "$['mobilegrid_3']['prizeName:text']"
                    },
                    {
                        "source": "$['body'][i]['prizeDescription']",
                        "target": "$['mobilegrid_3']['prizeDescription:text']"
                    },
                    {
                        "source": "$['body'][i]['prizeCost']",
                        "target_transformation": function(value, element) {
                            return value + "pts";
                        },
                        "target": "$['mobilegrid_3']['prizePoints:text']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            $(element).find("[name=prizeImage]").attr("data-id", value._id);
                            $(element).find("[name=prizeImage]").attr("data-name", value.prizeName);
                            $(element).find("[name=prizeImage]").attr("data-id", value._id);
                            $(element).find("[name=prizeImage]").attr("data-points", value.prizeCost);
                            $(element).find("[name=prizeImage]").attr("data-quantity", value.prizeQuantity);
                            console.log(value.prizeQuantity);
                            if (value.prizeQuantity > 0) {
                                console.log("in stock");
                                $(element).find("[name=soldOut]").hide();
                            } else {
                                console.log("sold out");
                                $(element).find("[name=soldOut]").show();
                            }
                        },
                        "target": "$['mobilegrid_3']"
                    },
                    {
                        "source": "$['body'][i]['prizeQuantity']",
                        "target_transformation": function(value, element) {
                            return "qty: " + value;
                        },
                        "target": "$['mobilegrid_3']['qty_label:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["store_listPrizes_onbeforesend_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "to_name": "listPrizes",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            return {
                                "prizeQuantity": {
                                    $gte: 0
                                }
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["store_createOrder_onbeforesend_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "from_name": "userProfile_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "createOrder",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": {
                        "user": {
                            "collName": "User_profile"
                        },
                        "item": {
                            "collName": "Prizes"
                        },
                        "quantity": 1,
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        },
                        "status": "PLACED"
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['body']['user']['_id']"
                    }
                ]
            },
            {
                "from_name": "store",
                "from_type": "UI",
                "to_name": "createOrder",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": {
                        "user": {
                            "collName": "User_profile"
                        },
                        "item": {
                            "collName": "Prizes"
                        },
                        "quantity": 1,
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        },
                        "status": "PLACED"
                    }
                },
                "mappings": [
                    {
                        "source": "$['prizeID:text']",
                        "target": "$['body']['item']['_id']"
                    },
                    {
                        "source": "$['qty_input:text']",
                        "target": "$['body']['quantity']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["store_createOrder_onsuccess_mapping_1"] = {
        "homeScreen": "store",
        "directions": []
    };
    Apperyio.mappings["store_updateMyPoints_onbeforesend_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "from_name": "userProfile_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "updateMyPoints",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": {
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['_id']"
                    }
                ]
            },
            {
                "from_name": "myPoints",
                "from_type": "LOCAL_STORAGE",
                "to_name": "updateMyPoints",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": {
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['body']['points']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["store_updatePrizeQuantity_onsuccess_mapping_0"] = {
        "homeScreen": "store",
        "directions": []
    };
    Apperyio.mappings["store_updatePrizeQuantity_onbeforesend_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "from_name": "store",
                "from_type": "UI",
                "to_name": "updatePrizeQuantity",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": {
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$['prizeID:text']",
                        "target": "$['parameters']['_id']"
                    },
                    {
                        "source": "$['quantityLabel:text']",
                        "target_transformation": function(value) {
                            var quantity = parseInt(value);
                            var newQuantity = quantity - 1;
                            return newQuantity;
                        },
                        "target": "$['body']['prizeQuantity']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["store_myOrders_onsuccess_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "from_name": "myOrders",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "store",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]['item']['prizeImage']",
                        "target": "$['mobilegrid_64']['itemImage:image']"
                    },
                    {
                        "source": "$['body'][i]['item']['prizeName']",
                        "target": "$['mobilegrid_64']['itemName:text']"
                    },
                    {
                        "source": "$['body'][i]['status']",
                        "target": "$['mobilegrid_64']['status:text']"
                    },
                    {
                        "source": "$['body'][i]['_createdAt']",
                        "target_transformation": function(value, element) {
                            return value.substr(0, 10);
                        },
                        "target": "$['mobilegrid_64']['dateplaced:text']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['mobilegrid_64']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["store_myOrders_onbeforesend_mapping_0"] = {
        "homeScreen": "store",
        "directions": [
            {
                "from_name": "userProfile_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "myOrders",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "user,user.user_id,user.user_id.to_profile,user.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,item,user.learningPod"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target_transformation": function(value) {
                            return {
                                "user._id": value
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.listPrizes = Apperyio.datasources.listPrizes = new Apperyio.DataSource(stemguyana_Prizes_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["store_listPrizes_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["store_listPrizes_onsuccess_mapping_0"]);
            Apperyio("topPagePoints").text("You have: " + Apperyio.storage.myPoints.get() + " Points");
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createOrder = Apperyio.datasources.createOrder = new Apperyio.DataSource(stemguyana_orders_create_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["store_createOrder_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            try {
                updateMyPoints.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
            Apperyio.processMappingAction(Apperyio.mappings["store_createOrder_onsuccess_mapping_1"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.updateMyPoints = Apperyio.datasources.updateMyPoints = new Apperyio.DataSource(stemguyana_User_profile_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["store_updateMyPoints_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio("topPagePoints").text("You currently have: " + Apperyio.storage.myPoints.get() + " Points");
            try {
                updatePrizeQuantity.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.updatePrizeQuantity = Apperyio.datasources.updatePrizeQuantity = new Apperyio.DataSource(stemguyana_Prizes_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["store_updatePrizeQuantity_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["store_updatePrizeQuantity_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.myOrders = Apperyio.datasources.myOrders = new Apperyio.DataSource(stemguyana_orders_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["store_myOrders_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["store_myOrders_onsuccess_mapping_0"]);
            var popupElement = Apperyio("mobilepopup_62");
            if (popupElement.popup("option", "positionTo") === "origin") {
                popupElement.popup("open", {
                    transition: "pop",
                    positionTo: "#" + $(this).attr("id")
                });
            } else {
                popupElement.popup("open", {
                    transition: "pop"
                });
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'store';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var store_onLoad = function() {
        store_elementsExtraJS();
        $('div[dsid="mobilecontainer"]').css('background-image',
            'url(' + Appery.getImagePath('Artboard_1.png') + ')');
        $('div[dsid="mobilecontainer"]').css('background-size', '100% auto');
        $('div[dsid="mobilecontainer"]').css('background-color', '#ffffff');
        $('div[dsid="mobilecontainer"]').css('background-position', 'center');
        $('div[dsid="mobilecontainer"]').css('background-repeat', 'no-repeat');
        $('div[dsid="mobilecontainer"]').css('background-position', 'top');;
        store_deviceEvents();
        store_windowEvents();
        store_elementsEvents();
    };
    // screen window events
    function store_windowEvents() {
        $('#store').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#store').on({
            pageshow: function(event) {
                try {
                    listPrizes.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function store_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function store_elementsExtraJS() {
        // screen (store) extra code
        /* finalStorePopup */
        $("#store_finalStorePopup").popup("option", "positionTo", "");
        /* mobilepopup_62 */
        $("#store_mobilepopup_62").popup("option", "positionTo", "");
    };
    // screen elements handler
    function store_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#store_mobilecontainer [name="mobilebutton_77"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        transition: 'slide',
                        reverse: true
                    });
                }
            },
        }, '#store_mobilecontainer [name="mobilebutton_77"]');
        $(document).off("click", '#store_mobilecontainer [name="mobilebutton_61"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        myOrders.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#store_mobilecontainer [name="mobilebutton_61"]');
        $(document).off("tap", '#store_mobilecontainer [name="prizeImage"]').on({
            tap: function(event) {
                Apperyio("imageThumb").attr("src", ($(this).attr("src")));
                Apperyio("productName").text($(this).attr("data-name"));
                Apperyio("prizeID").text($(this).attr("data-id"));
                Apperyio("pointsPopUp").text($(this).attr("data-points") + " points");
                Apperyio("thisCostLabel").text($(this).attr("data-points"));
                Apperyio("quantityLabel").text($(this).attr("data-quantity"));
                Apperyio("notEnoughGrid").hide();
                Apperyio("successGrid").hide();
                if ($(this).attr("data-quantity") <= 0) {
                    Apperyio("yesNoGrid").hide();
                    Apperyio("mobilelabel_25").hide();
                } else {
                    Apperyio("yesNoGrid").show();
                    Apperyio("mobilelabel_25").show();
                }
                Apperyio("qty_input").val(1);;
                var popupElement = Apperyio("finalStorePopup");
                if (popupElement.popup("option", "positionTo") === "origin") {
                    popupElement.popup("open", {
                        transition: "slide",
                        positionTo: "#" + $(this).attr("id")
                    });
                } else {
                    popupElement.popup("open", {
                        transition: "slide"
                    });
                };
                event.stopPropagation();
                return false;
            },
        }, '#store_mobilecontainer [name="prizeImage"]');
        $(document).off("keyup", '#store_finalStorePopup [name="qty_input"]').on({
            keyup: function(event) {
                var cost = parseInt(Apperyio("thisCostLabel").text());
                var qty = parseInt($(this).val() || "1");
                Apperyio("pointsPopUp").text(cost * qty + " points");
            },
        }, '#store_finalStorePopup [name="qty_input"]');
        $(document).off("click", '#store_finalStorePopup [name="plusQty_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var value = parseInt(Apperyio("qty_input").val() || "1");
                    Apperyio("qty_input").val(++value);
                    var cost = parseInt(Apperyio("thisCostLabel").text());
                    var qty = parseInt(Apperyio("qty_input").val() || "0");
                    Apperyio("pointsPopUp").text(cost * qty + " points");
                }
            },
        }, '#store_finalStorePopup [name="plusQty_button"]');
        $(document).off("click", '#store_finalStorePopup [name="minusQty_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var value = parseInt(Apperyio("qty_input").val() || "2");
                    if (value >= 2) {
                        Apperyio("qty_input").val(--value);
                    }
                    var cost = parseInt(Apperyio("thisCostLabel").text());
                    var qty = parseInt(Apperyio("qty_input").val() || "0");
                    Apperyio("pointsPopUp").text(cost * qty + " points");
                }
            },
        }, '#store_finalStorePopup [name="minusQty_button"]');
        $(document).off("tap", '#store_finalStorePopup [name="yesButton"]').on({
            tap: function(event) {
                var me = Apperyio.storage.myProfile.get();
                if (me.accountType === "Student" || me.accountType === "Student/Parent") {
                    var thisCost = parseInt(Apperyio("thisCostLabel").text());
                    var myPoints = Apperyio.storage.myPoints.get();
                    var finalPoints = myPoints - thisCost;
                    if (Math.sign(finalPoints) == -1) {
                        Apperyio("notEnoughGrid").show();
                        Apperyio("successGrid").hide();
                    } else {
                        Apperyio.storage.myPoints.set(finalPoints);
                        Apperyio("successGrid").show();
                        Apperyio("notEnoughGrid").hide();
                        createOrder.execute();
                    }
                } else {
                    alert("Sorry, only students can purchase prizes");
                };
                event.stopPropagation();
                return false;
            },
        }, '#store_finalStorePopup [name="yesButton"]');
        $(document).off("tap", '#store_finalStorePopup [name="noButton"]').on({
            tap: function(event) {
                Apperyio('finalStorePopup').popup('close');
                event.stopPropagation();
                return false;
            },
        }, '#store_finalStorePopup [name="noButton"]');
    };
    $(document).off("pagebeforeshow", "#store").on("pagebeforeshow", "#store", function(event, ui) {
        Apperyio.CurrentScreen = "store";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    store_onLoad();
};
$(document).off("pagecreate", "#store").on("pagecreate", "#store", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    store_js();
});