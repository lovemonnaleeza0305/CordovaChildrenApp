/*
 * JS for orderDisplay_food generated by Appery.io
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

function orderDisplay_food_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_25': 'orderDisplay_food_mobilegrid_25',
        'mobilegridcell_26': 'orderDisplay_food_mobilegridcell_26',
        'mobilebutton_30': 'orderDisplay_food_mobilebutton_30',
        'mobilegridcell_27': 'orderDisplay_food_mobilegridcell_27',
        'mobilelabel_31': 'orderDisplay_food_mobilelabel_31',
        'mobilegridcell_32': 'orderDisplay_food_mobilegridcell_32',
        'mobilebutton_13': 'orderDisplay_food_mobilebutton_13',
        'mobilelabel_34': 'orderDisplay_food_mobilelabel_34',
        'podSearch': 'orderDisplay_food_podSearch',
        'podSearch-0': 'orderDisplay_food_podSearch-0',
        'mobilebutton_33': 'orderDisplay_food_mobilebutton_33',
        'mobilegrid_14': 'orderDisplay_food_mobilegrid_14',
        'mobilegridcell_15': 'orderDisplay_food_mobilegridcell_15',
        'mobilelabel_21': 'orderDisplay_food_mobilelabel_21',
        'mobilegridcell_16': 'orderDisplay_food_mobilegridcell_16',
        'mobilelabel_22': 'orderDisplay_food_mobilelabel_22',
        'mobilegridcell_19': 'orderDisplay_food_mobilegridcell_19',
        'mobilelabel_24': 'orderDisplay_food_mobilelabel_24',
        'mobilegridcell_36': 'orderDisplay_food_mobilegridcell_36',
        'mobilelabel_40': 'orderDisplay_food_mobilelabel_40',
        'mobilegridcell_39': 'orderDisplay_food_mobilegridcell_39',
        'mobilelabel_44': 'orderDisplay_food_mobilelabel_44',
        'mobilegridcell_42': 'orderDisplay_food_mobilegridcell_42',
        'orderListGrid': 'orderDisplay_food_orderListGrid',
        'mobilegridcell_3': 'orderDisplay_food_mobilegridcell_3',
        'studentName': 'orderDisplay_food_studentName',
        'lastName': 'orderDisplay_food_lastName',
        'learningPod': 'orderDisplay_food_learningPod',
        'role_label': 'orderDisplay_food_role_label',
        'mobilegridcell_4': 'orderDisplay_food_mobilegridcell_4',
        'itemName': 'orderDisplay_food_itemName',
        'mobilegridcell_7': 'orderDisplay_food_mobilegridcell_7',
        'status': 'orderDisplay_food_status',
        'date': 'orderDisplay_food_date',
        'mobilegridcell_35': 'orderDisplay_food_mobilegridcell_35',
        'Qty': 'orderDisplay_food_Qty',
        'mobilegridcell_38': 'orderDisplay_food_mobilegridcell_38',
        'total_label': 'orderDisplay_food_total_label',
        'mobilegridcell_43': 'orderDisplay_food_mobilegridcell_43',
        'packaged_label': 'orderDisplay_food_packaged_label',
        'packaged_button': 'orderDisplay_food_packaged_button'
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
    Apperyio.mappings["orderDisplay_food_queryMyOrders_listPods_onsuccess_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "from_name": "queryMyOrders_listPods",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "orderDisplay_food",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]['_id']",
                        "target": "$['podSearch-0:value']"
                    },
                    {
                        "source": "$['body'][i]['podName']",
                        "target": "$['podSearch-0:label']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['podSearch-0']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_queryMyOrders_listPods_onbeforesend_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "to_name": "queryMyOrders_listPods",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "podManager,podManager.user_id,podManager.user_id.to_profile,podManager.user_id.to_profile.user_id,podManager.user_id.to_profile.user_id.to_profile,podManager.user_id.to_profile.user_id.to_profile.user_id,podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile,podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile"
                    },
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryMyOrders_onsuccess_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "from_name": "orderDisplay_food_queryMyOrders",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "orderDisplay_food",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            $(element).find("[name=status]").attr("data-id", value._id);
                            $(element).find("[name=status]").attr("status-id", value.status);
                            $(element).find("[name=packaged_button]").attr("data-id", value._id);
                            $(element).find("[name=total_label]").text(value.item.quantity * value.item.cost);
                            if (Apperyio.storage.myProfile.get("$['accountType']") === 'Admin') {
                                if (value.packaged) {
                                    $(element).find("[name=packaged_label]").show();
                                    $(element).find("[name=packaged_button]").hide();
                                } else {
                                    $(element).find("[name=packaged_label]").hide();
                                    $(element).find("[name=packaged_button]").show();
                                }
                            } else {
                                $(element).find("[name=packaged_button]").hide();
                            }
                        },
                        "target": "$['orderListGrid']"
                    },
                    {
                        "source": "$['body'][i]['user']['name_f']",
                        "target": "$['orderListGrid']['studentName:text']"
                    },
                    {
                        "source": "$['body'][i]['user']['name_l']",
                        "target": "$['orderListGrid']['lastName:text']"
                    },
                    {
                        "source": "$['body'][i]['user']['learningPod']['podName']",
                        "target": "$['orderListGrid']['learningPod:text']"
                    },
                    {
                        "source": "$['body'][i]['item']['name']",
                        "target": "$['orderListGrid']['itemName:text']"
                    },
                    {
                        "source": "$['body'][i]['status']",
                        "target": "$['orderListGrid']['status:text']"
                    },
                    {
                        "source": "$['body'][i]['item']['_createdAt']",
                        "target_transformation": function(value, element) {
                            return value.substr(0, 10);
                        },
                        "target": "$['orderListGrid']['date:text']"
                    },
                    {
                        "source": "$['body'][i]['item']['quantity']",
                        "target": "$['orderListGrid']['Qty:text']"
                    },
                    {
                        "source": "$['body'][i]['user']['accountType']",
                        "target": "$['orderListGrid']['role_label:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryMyOrders_onbeforesend_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "to_name": "orderDisplay_food_queryMyOrders",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "sort": "-_createdAt",
                        "include": "user,user.user_id,user.user_id.to_profile,user.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.learningPod,user.user_id.to_profile.user_id.to_profile.learningPod,user.user_id.to_profile.user_id.to_profile.learningPod.podManager,user.user_id.to_profile.user_id.to_profile.learningPod.podManager.user_id,user.user_id.to_profile.user_id.to_profile.learningPod.podManager.learningPod,user.user_id.to_profile.learningPod,user.user_id.to_profile.learningPod.podManager,user.user_id.to_profile.learningPod.podManager.user_id,user.user_id.to_profile.learningPod.podManager.user_id.to_profile,user.user_id.to_profile.learningPod.podManager.user_id.to_profile.user_id,user.user_id.to_profile.learningPod.podManager.user_id.to_profile.learningPod,user.user_id.to_profile.learningPod.podManager.learningPod,user.user_id.to_profile.learningPod.podManager.learningPod.podManager,user.learningPod,user.learningPod.podManager,user.learningPod.podManager.user_id,user.learningPod.podManager.user_id.to_profile,user.learningPod.podManager.user_id.to_profile.user_id,user.learningPod.podManager.user_id.to_profile.user_id.to_profile,user.learningPod.podManager.user_id.to_profile.user_id.to_profile.user_id,user.learningPod.podManager.user_id.to_profile.user_id.to_profile.learningPod,user.learningPod.podManager.user_id.to_profile.learningPod,user.learningPod.podManager.user_id.to_profile.learningPod.podManager,user.learningPod.podManager.learningPod,user.learningPod.podManager.learningPod.podManager,user.learningPod.podManager.learningPod.podManager.user_id,user.learningPod.podManager.learningPod.podManager.user_id.to_profile,user.learningPod.podManager.learningPod.podManager.learningPod,item"
                    }
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            return {
                                "quantity": {
                                    $gt: 0
                                }
                            };
                        },
                        "target": "$['body']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryOrdersByPod_onsuccess_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "from_name": "orderDisplay_food_queryOrdersByPod",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "orderDisplay_food",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            $(element).find("[name=status]").attr("data-id", value._id);
                            $(element).find("[name=status]").attr("status-id", value.status);
                            $(element).find("[name=packaged_button]").attr("data-id", value._id);
                            $(element).find("[name=total_label]").text(value.item.quantity * value.item.cost);
                            if (Apperyio.storage.myProfile.get("$['accountType']") === 'Admin') {
                                if (value.packaged) {
                                    $(element).find("[name=packaged_label]").show();
                                    $(element).find("[name=packaged_button]").hide();
                                } else {
                                    $(element).find("[name=packaged_label]").hide();
                                    $(element).find("[name=packaged_button]").show();
                                }
                            } else {
                                $(element).find("[name=packaged_button]").hide();
                            }
                        },
                        "target": "$['orderListGrid']"
                    },
                    {
                        "source": "$['body'][i]['user']['name_f']",
                        "target": "$['orderListGrid']['studentName:text']"
                    },
                    {
                        "source": "$['body'][i]['user']['name_l']",
                        "target": "$['orderListGrid']['lastName:text']"
                    },
                    {
                        "source": "$['body'][i]['user']['learningPod']['podName']",
                        "target": "$['orderListGrid']['learningPod:text']"
                    },
                    {
                        "source": "$['body'][i]['item']['name']",
                        "target": "$['orderListGrid']['itemName:text']"
                    },
                    {
                        "source": "$['body'][i]['status']",
                        "target": "$['orderListGrid']['status:text']"
                    },
                    {
                        "source": "$['body'][i]['_createdAt']",
                        "target_transformation": function(value, element) {
                            return value.substr(0, 10);
                        },
                        "target": "$['orderListGrid']['date:text']"
                    },
                    {
                        "source": "$['body'][i]['user']['accountType']",
                        "target": "$['orderListGrid']['role_label:text']"
                    },
                    {
                        "source": "$['body'][i]['quantity']",
                        "target": "$['orderListGrid']['Qty:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryOrdersByPod_onbeforesend_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "to_name": "orderDisplay_food_queryOrdersByPod",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "include": "user,user.user_id,user.user_id.to_profile,user.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.learningPod,user.user_id.to_profile.user_id.to_profile.learningPod,user.user_id.to_profile.user_id.to_profile.learningPod.podManager,user.user_id.to_profile.user_id.to_profile.learningPod.podManager.user_id,user.user_id.to_profile.user_id.to_profile.learningPod.podManager.learningPod,user.user_id.to_profile.learningPod,user.user_id.to_profile.learningPod.podManager,user.user_id.to_profile.learningPod.podManager.user_id,user.user_id.to_profile.learningPod.podManager.user_id.to_profile,user.user_id.to_profile.learningPod.podManager.user_id.to_profile.user_id,user.user_id.to_profile.learningPod.podManager.user_id.to_profile.learningPod,user.user_id.to_profile.learningPod.podManager.learningPod,user.user_id.to_profile.learningPod.podManager.learningPod.podManager,user.learningPod,user.learningPod.podManager,user.learningPod.podManager.user_id,user.learningPod.podManager.user_id.to_profile,user.learningPod.podManager.user_id.to_profile.user_id,user.learningPod.podManager.user_id.to_profile.user_id.to_profile,user.learningPod.podManager.user_id.to_profile.user_id.to_profile.user_id,user.learningPod.podManager.user_id.to_profile.user_id.to_profile.learningPod,user.learningPod.podManager.user_id.to_profile.learningPod,user.learningPod.podManager.user_id.to_profile.learningPod.podManager,user.learningPod.podManager.learningPod,user.learningPod.podManager.learningPod.podManager,user.learningPod.podManager.learningPod.podManager.user_id,user.learningPod.podManager.learningPod.podManager.user_id.to_profile,user.learningPod.podManager.learningPod.podManager.learningPod,item"
                    }
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            var lp = Apperyio("podSearch").val();
                            console.log(lp);
                            return {
                                "user": {
                                    "$inQuery": {
                                        "learningPod._id": lp
                                    }
                                }
                            };
                        },
                        "target": "$['body']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_orderDisplay_food_updateOrderStatus_onbeforesend_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "from_name": "orderID",
                "from_type": "SESSION_STORAGE",
                "to_name": "orderDisplay_food_updateOrderStatus",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['_id']"
                    }
                ]
            },
            {
                "to_name": "orderDisplay_food_updateOrderStatus",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {
                        "full_object": "false"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            var stat = Apperyio.storage.status.get();
                            if (stat === "PLACED") {
                                return "COMPLETE";
                            } else if (stat === "COMPLETE") {
                                return "PLACED";
                            } else {
                            }
                        },
                        "target": "$['body']['status']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["orderDisplay_food_orderDisplay_food_updateOrderPackage_onbeforesend_mapping_0"] = {
        "homeScreen": "orderDisplay_food",
        "directions": [
            {
                "from_name": "orderID",
                "from_type": "SESSION_STORAGE",
                "to_name": "orderDisplay_food_updateOrderPackage",
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
                        "packaged": true
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['_id']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.queryMyOrders_listPods = Apperyio.datasources.queryMyOrders_listPods = new Apperyio.DataSource(stemguyana_LearningPods_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_queryMyOrders_listPods_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_queryMyOrders_listPods_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.orderDisplay_food_queryMyOrders = Apperyio.datasources.orderDisplay_food_queryMyOrders = new Apperyio.DataSource(stemguyana_orders_food_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryMyOrders_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryMyOrders_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.orderDisplay_food_queryOrdersByPod = Apperyio.datasources.orderDisplay_food_queryOrdersByPod = new Apperyio.DataSource(stemguyana_orders_food_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryOrdersByPod_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_orderDisplay_food_queryOrdersByPod_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.orderDisplay_food_updateOrderStatus = Apperyio.datasources.orderDisplay_food_updateOrderStatus = new Apperyio.DataSource(stemguyana_orders_food_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_orderDisplay_food_updateOrderStatus_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            if (Apperyio("podSearch").val() === "626270900f0d31652ffca19e") {
                queryMyOrders.execute();
            } else {
                queryOrdersByPod.execute();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.orderDisplay_food_updateOrderPackage = Apperyio.datasources.orderDisplay_food_updateOrderPackage = new Apperyio.DataSource(stemguyana_orders_food_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["orderDisplay_food_orderDisplay_food_updateOrderPackage_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            $("[name=packaged_button][data-id=" + Apperyio.storage.orderID.get() + "]").hide();
            $("[name=packaged_button][data-id=" + Apperyio.storage.orderID.get() + "]").parent().find("[name=packaged_label]").show();;
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'orderDisplay_food';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var orderDisplay_food_onLoad = function() {
        orderDisplay_food_elementsExtraJS();
        $('div[dsid="mobilecontainer"]').css('background-image',
            'url(' + Appery.getImagePath('Artboard_1.png') + ')');
        $('div[dsid="mobilecontainer"]').css('background-size', '100% auto');
        $('div[dsid="mobilecontainer"]').css('background-color', '#ffffff');
        $('div[dsid="mobilecontainer"]').css('background-position', 'center');
        $('div[dsid="mobilecontainer"]').css('background-repeat', 'no-repeat');
        $('div[dsid="mobilecontainer"]').css('background-position', 'top');
        Apperyio("podSearch").parent().css("background", "#ffffff");
        Apperyio("podSearch").parent().css("border-width", "1px");
        Apperyio("podSearch").parent().css("border-radius", "15px");
        Apperyio("podSearch").parent().css("border-color", "#ff725e");;
        orderDisplay_food_deviceEvents();
        orderDisplay_food_windowEvents();
        orderDisplay_food_elementsEvents();
    };
    // screen window events
    function orderDisplay_food_windowEvents() {
        $('#orderDisplay_food').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#orderDisplay_food').on({
            pageshow: function(event) {
                try {
                    queryMyOrders_listPods.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                try {
                    orderDisplay_food_queryMyOrders.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function orderDisplay_food_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function orderDisplay_food_elementsExtraJS() {
        // screen (orderDisplay_food) extra code
        /* podSearch */
        $("#orderDisplay_food_podSearch").parent().find("a.ui-btn").attr("tabindex", "3");
    };
    // screen elements handler
    function orderDisplay_food_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#orderDisplay_food_mobilecontainer [name="mobilebutton_30"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });
                }
            },
        }, '#orderDisplay_food_mobilecontainer [name="mobilebutton_30"]');
        $(document).off("tap", '#orderDisplay_food_mobilecontainer [name="mobilebutton_13"]').on({
            tap: function(event) {
                try {
                    orderDisplay_food_queryMyOrders.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                event.stopPropagation();
                return false;
            },
        }, '#orderDisplay_food_mobilecontainer [name="mobilebutton_13"]');
        $(document).off("change", '#orderDisplay_food_mobilecontainer [name="podSearch"]').on({
            change: function(event) {
                try {
                    orderDisplay_food_queryOrdersByPod.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#orderDisplay_food_mobilecontainer [name="podSearch"]');
        $(document).off("click", '#orderDisplay_food_mobilecontainer [name="mobilebutton_33"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        orderDisplay_food_queryMyOrders.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    Apperyio("podSearch").val("Choose Your Learning Pod");
                }
            },
        }, '#orderDisplay_food_mobilecontainer [name="mobilebutton_33"]');
        $(document).off("click", '#orderDisplay_food_mobilecontainer [name="status"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.storage.orderID.set($(this).attr("data-id"));
                    Apperyio.storage.status.set($(this).attr("status-id"));
                    try {
                        orderDisplay_food_updateOrderStatus.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#orderDisplay_food_mobilecontainer [name="status"]');
        $(document).off("click", '#orderDisplay_food_mobilecontainer [name="packaged_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.storage.orderID.set($(this).attr("data-id"));
                    orderDisplay_food_updateOrderPackage.execute();
                }
            },
        }, '#orderDisplay_food_mobilecontainer [name="packaged_button"]');
    };
    $(document).off("pagebeforeshow", "#orderDisplay_food").on("pagebeforeshow", "#orderDisplay_food", function(event, ui) {
        Apperyio.CurrentScreen = "orderDisplay_food";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    orderDisplay_food_onLoad();
};
$(document).off("pagecreate", "#orderDisplay_food").on("pagecreate", "#orderDisplay_food", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    orderDisplay_food_js();
});