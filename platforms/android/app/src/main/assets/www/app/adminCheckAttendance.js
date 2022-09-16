/*
 * JS for adminCheckAttendance generated by Appery.io
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

function adminCheckAttendance_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_82': 'adminCheckAttendance_mobilegrid_82',
        'mobilegridcell_83': 'adminCheckAttendance_mobilegridcell_83',
        'mobilebutton_87': 'adminCheckAttendance_mobilebutton_87',
        'mobilegridcell_84': 'adminCheckAttendance_mobilegridcell_84',
        'mobilelabel_88': 'adminCheckAttendance_mobilelabel_88',
        'mobilelabel_91': 'adminCheckAttendance_mobilelabel_91',
        'selectAccountType': 'adminCheckAttendance_selectAccountType',
        'selectAccountType-0': 'adminCheckAttendance_selectAccountType-0',
        'mobilegrid_78': 'adminCheckAttendance_mobilegrid_78',
        'mobilegridcell_79': 'adminCheckAttendance_mobilegridcell_79',
        'learningPod_select': 'adminCheckAttendance_learningPod_select',
        'learningPod_select-0': 'adminCheckAttendance_learningPod_select-0',
        'regionCoach': 'adminCheckAttendance_regionCoach',
        'regionCoach-0': 'adminCheckAttendance_regionCoach-0',
        'coachGrid': 'adminCheckAttendance_coachGrid',
        'mobilegridcell_14': 'adminCheckAttendance_mobilegridcell_14',
        'mobilegrid_34': 'adminCheckAttendance_mobilegrid_34',
        'mobilegridcell_35': 'adminCheckAttendance_mobilegridcell_35',
        'mobilelabel_40': 'adminCheckAttendance_mobilelabel_40',
        'mobilegridcell_36': 'adminCheckAttendance_mobilegridcell_36',
        'mobilelabel_41': 'adminCheckAttendance_mobilelabel_41',
        'mobilegridcell_39': 'adminCheckAttendance_mobilegridcell_39',
        'mobilelabel_42': 'adminCheckAttendance_mobilelabel_42',
        'mobilegridcell_43': 'adminCheckAttendance_mobilegridcell_43',
        'repeatCoachGrid': 'adminCheckAttendance_repeatCoachGrid',
        'mobilegridcell_28': 'adminCheckAttendance_mobilegridcell_28',
        'coachName': 'adminCheckAttendance_coachName',
        'lastName2': 'adminCheckAttendance_lastName2',
        'mobilegridcell_29': 'adminCheckAttendance_mobilegridcell_29',
        'regionNumber': 'adminCheckAttendance_regionNumber',
        'mobilegridcell_33': 'adminCheckAttendance_mobilegridcell_33',
        'villageName': 'adminCheckAttendance_villageName',
        'mobilegridcell_45': 'adminCheckAttendance_mobilegridcell_45',
        'checkAttendance': 'adminCheckAttendance_checkAttendance',
        'tendy': 'adminCheckAttendance_tendy',
        'mobilegridcell_81': 'adminCheckAttendance_mobilegridcell_81',
        'coachNameP': 'adminCheckAttendance_coachNameP',
        'lastName': 'adminCheckAttendance_lastName',
        'villageNameP': 'adminCheckAttendance_villageNameP',
        'regionNameP': 'adminCheckAttendance_regionNameP',
        'mobilelabel_70': 'adminCheckAttendance_mobilelabel_70',
        'mobilegrid_62': 'adminCheckAttendance_mobilegrid_62',
        'mobilegridcell_63': 'adminCheckAttendance_mobilegridcell_63',
        'mobilelabel_67': 'adminCheckAttendance_mobilelabel_67',
        'mobilegridcell_64': 'adminCheckAttendance_mobilegridcell_64',
        'mobilelabel_68': 'adminCheckAttendance_mobilelabel_68',
        'mobilegrid_54': 'adminCheckAttendance_mobilegrid_54',
        'mobilegridcell_55': 'adminCheckAttendance_mobilegridcell_55',
        'dateLabel': 'adminCheckAttendance_dateLabel',
        'mobilegridcell_56': 'adminCheckAttendance_mobilegridcell_56',
        'status': 'adminCheckAttendance_status',
        'noTendy': 'adminCheckAttendance_noTendy'
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
    Apperyio.mappings["adminCheckAttendance_queryAttendance_onbeforesend_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "from_name": "adminCheckAttendance",
                "from_type": "UI",
                "to_name": "queryAttendance",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.learningPod",
                        "sort": "-_createdAt"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['regionCoach:selectedMenuItem']",
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_queryAttendance_onsuccess_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "from_name": "queryAttendance",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "adminCheckAttendance",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][0]['student_id']['name_f']",
                        "target": "$['coachNameP:text']"
                    },
                    {
                        "source": "$['body'][0]['student_id']['village']",
                        "target_transformation": function(value, element) {
                            if (!value) {
                                return "-";
                            } else {
                                return "Village: " + value;
                            }
                        },
                        "target": "$['villageNameP:text']"
                    },
                    {
                        "source": "$['body'][0]['student_id']['region']",
                        "target_transformation": function(value, element) {
                            return "Region: " + value;
                        },
                        "target": "$['regionNameP:text']"
                    },
                    {
                        "source": "$['body'][0]['student_id']['name_l']",
                        "target": "$['lastName:text']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['mobilegrid_54']"
                    },
                    {
                        "source": "$['body'][i]['date']",
                        "target": "$['mobilegrid_54']['dateLabel:text']"
                    },
                    {
                        "source": "$['body'][i]['attendance']",
                        "target": "$['mobilegrid_54']['status:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_queryProfileAttendance_onsuccess_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "from_name": "queryProfileAttendance",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "adminCheckAttendance",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            $(element).find("[name=checkAttendance]").attr("data-coachID", value._id);
                        },
                        "target": "$['repeatCoachGrid']"
                    },
                    {
                        "source": "$['body'][i]['name_f']",
                        "target": "$['repeatCoachGrid']['coachName:text']"
                    },
                    {
                        "source": "$['body'][i]['region']",
                        "target": "$['repeatCoachGrid']['regionNumber:text']"
                    },
                    {
                        "source": "$['body'][i]['village']",
                        "target": "$['repeatCoachGrid']['villageName:text']"
                    },
                    {
                        "source": "$['body'][i]['name_l']",
                        "target": "$['repeatCoachGrid']['lastName2:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_queryProfileAttendance_onbeforesend_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "from_name": "adminCheckAttendance",
                "from_type": "UI",
                "to_name": "queryProfileAttendance",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "user_id,user_id.to_profile,user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,learningPod",
                        "sort": "village"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['regionCoach:selectedMenuItem']",
                        "target_transformation": function(value) {
                            var accountType = Apperyio("selectAccountType").val();
                            var learningPod = Apperyio("learningPod_select").val();
                            var parametersArray = [{
                                "status": "active"
                            }, {
                                "accountType": accountType
                            }];
                            /*
                            if (learningPod && learningPod !== "-") {
                                parametersArray.push({
                                    "learningPod._id": learningPod
                                });
                            }
                            */
                            if (learningPod !== "6299017b0f0d31769fa89942" || value !== "-") {
                                if (learningPod !== "6299017b0f0d31769fa89942") {
                                    parametersArray.push({
                                        "learningPod._id": learningPod
                                    });
                                }
                                if (value !== "-") {
                                    parametersArray.push({
                                        "region": value
                                    });
                                }
                            } else {
                                parametersArray.push({
                                    "learningPod._id": learningPod
                                });
                                parametersArray.push({
                                    "region": value
                                });
                            }
                            return {
                                "$and": parametersArray
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_queryLPAttendance_onsuccess_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "from_name": "queryLPAttendance",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "adminCheckAttendance",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            $(element).find("[name=checkAttendance]").attr("data-coachID", value._id);
                        },
                        "target": "$['repeatCoachGrid']"
                    },
                    {
                        "source": "$['body'][i]['name_f']",
                        "target": "$['repeatCoachGrid']['coachName:text']"
                    },
                    {
                        "source": "$['body'][i]['name_l']",
                        "target": "$['repeatCoachGrid']['lastName2:text']"
                    },
                    {
                        "source": "$['body'][i]['region']",
                        "target": "$['repeatCoachGrid']['regionNumber:text']"
                    },
                    {
                        "source": "$['body'][i]['village']",
                        "target": "$['repeatCoachGrid']['villageName:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_queryLPAttendance_onbeforesend_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "to_name": "queryLPAttendance",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "user_id,user_id.to_profile,user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,learningPod",
                        "sort": "village"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            return {
                                "$and": [{
                                    "status": "active"
                                }, {
                                    "program": "Learning Pod"
                                }, {
                                    "region": value
                                }]
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_adminCheckAttendance_listLearningPods_onsuccess_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "from_name": "adminCheckAttendance_listLearningPods",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "adminCheckAttendance",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target": "$['learningPod_select-0']"
                    },
                    {
                        "source": "$['body'][i]['podName']",
                        "target": "$['learningPod_select-0:label']"
                    },
                    {
                        "source": "$['body'][i]['_id']",
                        "target": "$['learningPod_select-0:value']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["adminCheckAttendance_adminCheckAttendance_listLearningPods_onbeforesend_mapping_0"] = {
        "homeScreen": "adminCheckAttendance",
        "directions": [
            {
                "to_name": "adminCheckAttendance_listLearningPods",
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
    Apperyio.datasources = Apperyio.datasources || {};
    window.queryAttendance = Apperyio.datasources.queryAttendance = new Apperyio.DataSource(stemguyana_Attendance_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_queryAttendance_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_queryAttendance_onsuccess_mapping_0"]);
            if (data.length === 0) {
                Apperyio("noTendy").show();
                Apperyio("tendy").hide();
            } else {
                Apperyio("noTendy").hide();
                Apperyio("tendy").show();
            };
            var popupElement = Apperyio("attendancePopup");
            if (popupElement.popup("option", "positionTo") === "origin") {
                popupElement.popup("open", {
                    transition: "none",
                    positionTo: "#" + $(this).attr("id")
                });
            } else {
                popupElement.popup("open", {
                    transition: "none"
                });
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.queryProfileAttendance = Apperyio.datasources.queryProfileAttendance = new Apperyio.DataSource(stemguyana_User_profile_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_queryProfileAttendance_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_queryProfileAttendance_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.queryLPAttendance = Apperyio.datasources.queryLPAttendance = new Apperyio.DataSource(stemguyana_User_profile_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_queryLPAttendance_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_queryLPAttendance_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.adminCheckAttendance_listLearningPods = Apperyio.datasources.adminCheckAttendance_listLearningPods = new Apperyio.DataSource(stemguyana_LearningPods_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_adminCheckAttendance_listLearningPods_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["adminCheckAttendance_adminCheckAttendance_listLearningPods_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'adminCheckAttendance';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var adminCheckAttendance_onLoad = function() {
        adminCheckAttendance_elementsExtraJS();
        $('div[dsid="mobilecontainer"]').css('background-image',
            'url(' + Appery.getImagePath('Artboard_1.png') + ')');
        $('div[dsid="mobilecontainer"]').css('background-size', '100% auto');
        $('div[dsid="mobilecontainer"]').css('background-color', '#ffffff');
        $('div[dsid="mobilecontainer"]').css('background-position', 'center');
        $('div[dsid="mobilecontainer"]').css('background-repeat', 'no-repeat');
        $('div[dsid="mobilecontainer"]').css('background-position', 'top');
        Apperyio("regionCoach").parent().css("background", "#ffffff");
        Apperyio("regionCoach").parent().css("border-width", "1px");
        Apperyio("regionCoach").parent().css("border-radius", "40px");
        Apperyio("regionCoach").parent().css("border-color", "#ff725e");
        Apperyio("regionStudent").parent().css("background", "#ffffff");
        Apperyio("regionStudent").parent().css("border-width", "1px");
        Apperyio("regionStudent").parent().css("border-radius", "40px");
        Apperyio("regionStudent").parent().css("border-color", "#ff725e");
        Apperyio("selectAccountType").parent().css("background", "#ff725e");
        Apperyio("selectAccountType").parent().css("border-width", "1px");
        Apperyio("selectAccountType").parent().css("border-radius", "40px");
        Apperyio("selectAccountType").parent().css("border-color", "#ff725e");
        adminCheckAttendance_deviceEvents();
        adminCheckAttendance_windowEvents();
        adminCheckAttendance_elementsEvents();
    };
    // screen window events
    function adminCheckAttendance_windowEvents() {
        $('#adminCheckAttendance').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#adminCheckAttendance').on({
            pageshow: function(event) {
                try {
                    adminCheckAttendance_listLearningPods.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function adminCheckAttendance_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function adminCheckAttendance_elementsExtraJS() {
        // screen (adminCheckAttendance) extra code
        /* selectAccountType */
        $("#adminCheckAttendance_selectAccountType").parent().find("a.ui-btn").attr("tabindex", "10");
        /* learningPod_select */
        $("#adminCheckAttendance_learningPod_select").parent().find("a.ui-btn").attr("tabindex", "11");
        /* regionCoach */
        $("#adminCheckAttendance_regionCoach").parent().find("a.ui-btn").attr("tabindex", "4");
        /* attendancePopup */
        $("#adminCheckAttendance_attendancePopup").popup("option", "positionTo", "");
    };
    // screen elements handler
    function adminCheckAttendance_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#adminCheckAttendance_mobilecontainer [name="mobilebutton_87"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('adminDash', {
                        transition: 'slide',
                        reverse: true
                    });
                }
            },
        }, '#adminCheckAttendance_mobilecontainer [name="mobilebutton_87"]');
        $(document).off("change", '#adminCheckAttendance_mobilecontainer [name="selectAccountType"]').on({
            change: function(event) {
                try {
                    queryProfileAttendance.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#adminCheckAttendance_mobilecontainer [name="selectAccountType"]');
        $(document).off("change", '#adminCheckAttendance_mobilecontainer [name="learningPod_select"]').on({
            change: function(event) {
                try {
                    queryProfileAttendance.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#adminCheckAttendance_mobilecontainer [name="learningPod_select"]');
        $(document).off("change", '#adminCheckAttendance_mobilecontainer [name="regionCoach"]').on({
            change: function(event) {
                try {
                    queryProfileAttendance.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#adminCheckAttendance_mobilecontainer [name="regionCoach"]');
        $(document).off("tap", '#adminCheckAttendance_mobilecontainer [name="checkAttendance"]').on({
            tap: function(event) {
                queryAttendance.execute({
                    parameters: {
                        "where": {
                            "student_id._id": $(this).attr("data-coachID")
                        }
                    }
                });
                event.stopPropagation();
                return false;
            },
        }, '#adminCheckAttendance_mobilecontainer [name="checkAttendance"]');
    };
    $(document).off("pagebeforeshow", "#adminCheckAttendance").on("pagebeforeshow", "#adminCheckAttendance", function(event, ui) {
        Apperyio.CurrentScreen = "adminCheckAttendance";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    adminCheckAttendance_onLoad();
};
$(document).off("pagecreate", "#adminCheckAttendance").on("pagecreate", "#adminCheckAttendance", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    adminCheckAttendance_js();
});