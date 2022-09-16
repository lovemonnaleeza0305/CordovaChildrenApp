/*
 * JS for foodStoreAccess generated by Appery.io
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

function foodStoreAccess_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_72': 'foodStoreAccess_mobilegrid_72',
        'mobilegridcell_73': 'foodStoreAccess_mobilegridcell_73',
        'mobilebutton_77': 'foodStoreAccess_mobilebutton_77',
        'mobilegridcell_74': 'foodStoreAccess_mobilegridcell_74',
        'mobilelabel_14': 'foodStoreAccess_mobilelabel_14',
        'mobilegrid_211': 'foodStoreAccess_mobilegrid_211',
        'mobilegridcell_212': 'foodStoreAccess_mobilegridcell_212',
        'mobilelabel_223': 'foodStoreAccess_mobilelabel_223',
        'mobilegridcell_213': 'foodStoreAccess_mobilegridcell_213',
        'mobilelabel_224': 'foodStoreAccess_mobilelabel_224',
        'mobilegridcell_221': 'foodStoreAccess_mobilegridcell_221',
        'users_grid': 'foodStoreAccess_users_grid',
        'mobilegridcell_217': 'foodStoreAccess_mobilegridcell_217',
        'name_label': 'foodStoreAccess_name_label',
        'mobilegridcell_218': 'foodStoreAccess_mobilegridcell_218',
        'pod_label': 'foodStoreAccess_pod_label',
        'mobilegridcell_222': 'foodStoreAccess_mobilegridcell_222',
        'approve_button': 'foodStoreAccess_approve_button',
        'disapprove_button': 'foodStoreAccess_disapprove_button'
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
    Apperyio.mappings["foodStoreAccess_foodStoreAccess_readUserProfiles_onsuccess_mapping_0"] = {
        "homeScreen": "foodStoreAccess",
        "directions": [
            {
                "from_name": "foodStoreAccess_readUserProfiles",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "foodStoreAccess",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            $(element).find("[name=name_label]").text(value.name_f + " " + value.name_l);
                            $(element).find("[name=approve_button]").attr("data-id", value._id);
                            $(element).find("[name=disapprove_button]").attr("data-id", value._id);
                            if (value.foodStoreAccess) {
                                $(element).find("[name=approve_button]").hide();
                                $(element).find("[name=disapprove_button]").show();
                            } else {
                                $(element).find("[name=approve_button]").show();
                                $(element).find("[name=disapprove_button]").hide();
                            }
                        },
                        "target": "$['users_grid']"
                    },
                    {
                        "source": "$['body'][i]['learningPod']['podName']",
                        "target_transformation": function(value, element) {
                            return value || "N/A";
                        },
                        "target": "$['users_grid']['pod_label:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["foodStoreAccess_foodStoreAccess_readUserProfiles_onbeforesend_mapping_0"] = {
        "homeScreen": "foodStoreAccess",
        "directions": [
            {
                "to_name": "foodStoreAccess_readUserProfiles",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "user_id,user_id.to_profile,user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,learningPod"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            return {
                                "$or": [{
                                    "accountType": "Coach"
                                }, {
                                    "accountType": "Volunteer"
                                }, {
                                    "accountType": "Evaluator"
                                }]
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["foodStoreAccess_foodStoreAccess_updateUserProfile_onsuccess_mapping_0"] = {
        "homeScreen": "foodStoreAccess",
        "directions": []
    };
    Apperyio.mappings["foodStoreAccess_foodStoreAccess_updateUserProfile_onbeforesend_mapping_0"] = {
        "homeScreen": "foodStoreAccess",
        "directions": [
            {
                "to_name": "foodStoreAccess_updateUserProfile",
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
                "mappings": []
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.foodStoreAccess_readUserProfiles = Apperyio.datasources.foodStoreAccess_readUserProfiles = new Apperyio.DataSource(stemguyana_User_profile_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["foodStoreAccess_foodStoreAccess_readUserProfiles_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["foodStoreAccess_foodStoreAccess_readUserProfiles_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.foodStoreAccess_updateUserProfile = Apperyio.datasources.foodStoreAccess_updateUserProfile = new Apperyio.DataSource(stemguyana_User_profile_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["foodStoreAccess_foodStoreAccess_updateUserProfile_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["foodStoreAccess_foodStoreAccess_updateUserProfile_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'foodStoreAccess';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var foodStoreAccess_onLoad = function() {
        foodStoreAccess_elementsExtraJS();
        $('div[dsid="mobilecontainer"]').css('background-image',
            'url(' + Appery.getImagePath('Artboard_1.png') + ')');
        $('div[dsid="mobilecontainer"]').css('background-size', '100% auto');
        $('div[dsid="mobilecontainer"]').css('background-color', '#ffffff');
        $('div[dsid="mobilecontainer"]').css('background-position', 'center');
        $('div[dsid="mobilecontainer"]').css('background-repeat', 'no-repeat');
        $('div[dsid="mobilecontainer"]').css('background-position', 'top');
        foodStoreAccess_deviceEvents();
        foodStoreAccess_windowEvents();
        foodStoreAccess_elementsEvents();
    };
    // screen window events
    function foodStoreAccess_windowEvents() {
        $('#foodStoreAccess').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#foodStoreAccess').on({
            pageshow: function(event) {
                try {
                    foodStoreAccess_readUserProfiles.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function foodStoreAccess_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function foodStoreAccess_elementsExtraJS() {
        // screen (foodStoreAccess) extra code
    };
    // screen elements handler
    function foodStoreAccess_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#foodStoreAccess_mobilecontainer [name="mobilebutton_77"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        transition: 'slide',
                        reverse: true
                    });
                }
            },
        }, '#foodStoreAccess_mobilecontainer [name="mobilebutton_77"]');
        $(document).off("click", '#foodStoreAccess_mobilecontainer [name="approve_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var _id = $(this).attr("data-id");
                    $(this).hide();
                    $(this).parent().find("[name=disapprove_button]").show();
                    foodStoreAccess_updateUserProfile.execute({
                        "data": {
                            "foodStoreAccess": true
                        },
                        "parameters": {
                            "_id": _id
                        }
                    });
                }
            },
        }, '#foodStoreAccess_mobilecontainer [name="approve_button"]');
        $(document).off("click", '#foodStoreAccess_mobilecontainer [name="disapprove_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var _id = $(this).attr("data-id");
                    $(this).hide();
                    $(this).parent().find("[name=approve_button]").show();
                    foodStoreAccess_updateUserProfile.execute({
                        "data": {
                            "foodStoreAccess": false
                        },
                        "parameters": {
                            "_id": _id
                        }
                    });
                }
            },
        }, '#foodStoreAccess_mobilecontainer [name="disapprove_button"]');
    };
    $(document).off("pagebeforeshow", "#foodStoreAccess").on("pagebeforeshow", "#foodStoreAccess", function(event, ui) {
        Apperyio.CurrentScreen = "foodStoreAccess";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    foodStoreAccess_onLoad();
};
$(document).off("pagecreate", "#foodStoreAccess").on("pagecreate", "#foodStoreAccess", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    foodStoreAccess_js();
});