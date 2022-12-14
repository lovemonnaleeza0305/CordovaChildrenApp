/*
 * JS for paymentHistories generated by Appery.io
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

function paymentHistories_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_28': 'paymentHistories_mobilegrid_28',
        'mobilegridcell_29': 'paymentHistories_mobilegridcell_29',
        'mobilebutton_33': 'paymentHistories_mobilebutton_33',
        'mobilegridcell_30': 'paymentHistories_mobilegridcell_30',
        'mobilelabel_34': 'paymentHistories_mobilelabel_34',
        'mobilegrid_17': 'paymentHistories_mobilegrid_17',
        'mobilegridcell_18': 'paymentHistories_mobilegridcell_18',
        'mobilelabel_27': 'paymentHistories_mobilelabel_27',
        'mobilegridcell_19': 'paymentHistories_mobilegridcell_19',
        'mobilelabel_26': 'paymentHistories_mobilelabel_26',
        'mobilegridcell_22': 'paymentHistories_mobilegridcell_22',
        'mobilelabel_25': 'paymentHistories_mobilelabel_25',
        'mobilegridcell_23': 'paymentHistories_mobilegridcell_23',
        'mobilelabel_24': 'paymentHistories_mobilelabel_24',
        'mobilegrid_2': 'paymentHistories_mobilegrid_2',
        'mobilegridcell_3': 'paymentHistories_mobilegridcell_3',
        'firstName': 'paymentHistories_firstName',
        'lastName': 'paymentHistories_lastName',
        'program': 'paymentHistories_program',
        'mobilegridcell_4': 'paymentHistories_mobilegridcell_4',
        'receiptNumber': 'paymentHistories_receiptNumber',
        'mobilegridcell_9': 'paymentHistories_mobilegridcell_9',
        'typeLabel': 'paymentHistories_typeLabel',
        'mobilegridcell_14': 'paymentHistories_mobilegridcell_14',
        'statusLabel': 'paymentHistories_statusLabel',
        'submissionDate': 'paymentHistories_submissionDate'
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
    Apperyio.mappings["paymentHistories_listPaymentHistory_onsuccess_mapping_0"] = {
        "homeScreen": "paymentHistories",
        "directions": [
            {
                "from_name": "listPaymentHistory",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "paymentHistories",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]['student_id']['name_f']",
                        "target": "$['mobilegrid_2']['firstName:text']"
                    },
                    {
                        "source": "$['body'][i]['student_id']['name_l']",
                        "target": "$['mobilegrid_2']['lastName:text']"
                    },
                    {
                        "source": "$['body'][i]['student_id']['program']",
                        "target_transformation": function(value, element) {
                            return "(" + value + ")";
                        },
                        "target": "$['mobilegrid_2']['program:text']"
                    },
                    {
                        "source": "$['body'][i]['ReceiptNumber']",
                        "target": "$['mobilegrid_2']['receiptNumber:text']"
                    },
                    {
                        "source": "$['body'][i]['ReceiptType']",
                        "target": "$['mobilegrid_2']['typeLabel:text']"
                    },
                    {
                        "source": "$['body'][i]['status']",
                        "target": "$['mobilegrid_2']['statusLabel:text']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['mobilegrid_2']"
                    },
                    {
                        "source": "$['body'][i]['_createdAt']",
                        "target_transformation": function(value, element) {
                            return value.substr(0, 10);
                        },
                        "target": "$['mobilegrid_2']['submissionDate:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["paymentHistories_listPaymentHistory_onbeforesend_mapping_0"] = {
        "homeScreen": "paymentHistories",
        "directions": [
            {
                "to_name": "listPaymentHistory",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile"
                    },
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.listPaymentHistory = Apperyio.datasources.listPaymentHistory = new Apperyio.DataSource(stemguyana_paymentHistory_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["paymentHistories_listPaymentHistory_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["paymentHistories_listPaymentHistory_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'paymentHistories';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var paymentHistories_onLoad = function() {
        paymentHistories_elementsExtraJS();
        $('div[dsid="mobilecontainer"]').css('background-image',
            'url(' + Appery.getImagePath('Artboard_1.png') + ')');
        $('div[dsid="mobilecontainer"]').css('background-size', '100% auto');
        $('div[dsid="mobilecontainer"]').css('background-color', '#ffffff');
        $('div[dsid="mobilecontainer"]').css('background-position', 'center');
        $('div[dsid="mobilecontainer"]').css('background-repeat', 'no-repeat');
        $('div[dsid="mobilecontainer"]').css('background-position', 'top');
        ;
        paymentHistories_deviceEvents();
        paymentHistories_windowEvents();
        paymentHistories_elementsEvents();
    };
    // screen window events
    function paymentHistories_windowEvents() {
        $('#paymentHistories').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#paymentHistories').on({
            pageshow: function(event) {
                try {
                    listPaymentHistory.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function paymentHistories_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function paymentHistories_elementsExtraJS() {
        // screen (paymentHistories) extra code
    };
    // screen elements handler
    function paymentHistories_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#paymentHistories_mobilecontainer [name="mobilebutton_33"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('adminDash', {
                        transition: 'slide',
                        reverse: true
                    });
                }
            },
        }, '#paymentHistories_mobilecontainer [name="mobilebutton_33"]');
    };
    $(document).off("pagebeforeshow", "#paymentHistories").on("pagebeforeshow", "#paymentHistories", function(event, ui) {
        Apperyio.CurrentScreen = "paymentHistories";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    paymentHistories_onLoad();
};
$(document).off("pagecreate", "#paymentHistories").on("pagecreate", "#paymentHistories", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    paymentHistories_js();
});