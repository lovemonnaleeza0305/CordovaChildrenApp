/*
 * JS for Login generated by Appery.io
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

function Login_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_35': 'Login_mobilelabel_35',
        'mobilegrid_2': 'Login_mobilegrid_2',
        'mobilegridcell_3': 'Login_mobilegridcell_3',
        'phone_usnme': 'Login_phone_usnme',
        'mobilegridcell_5': 'Login_mobilegridcell_5',
        'paswd': 'Login_paswd',
        'mobilebutton_7': 'Login_mobilebutton_7',
        'mobilelabel_34': 'Login_mobilelabel_34',
        'mobilebutton_33': 'Login_mobilebutton_33',
        'mobilelabel_28': 'Login_mobilelabel_28',
        'mobilelabel_21': 'Login_mobilelabel_21',
        'gradeSelect': 'Login_gradeSelect',
        'gradeSelect-0': 'Login_gradeSelect-0',
        'mobilelabel_29': 'Login_mobilelabel_29',
        'programSelect': 'Login_programSelect',
        'programSelect-0': 'Login_programSelect-0',
        'mobilelabel_24': 'Login_mobilelabel_24',
        'podNameSelect': 'Login_podNameSelect',
        'podNameSelect-0': 'Login_podNameSelect-0',
        'mobilelabel_25': 'Login_mobilelabel_25',
        'genderSelect': 'Login_genderSelect',
        'genderSelect-0': 'Login_genderSelect-0',
        'activeLabel': 'Login_activeLabel',
        'pod_id': 'Login_pod_id',
        'mobilebutton_32': 'Login_mobilebutton_32'
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
    Apperyio.mappings["Login_log_in_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "Login",
                "from_type": "UI",
                "to_name": "log_in",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['phone_usnme:text']",
                        "target": "$['body']['username']"
                    },
                    {
                        "source": "$['paswd:text']",
                        "target": "$['body']['password']"
                    }
                ]
            },
            {
                "from_name": "Login",
                "from_type": "UI",
                "to_name": "username",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['phone_usnme:text']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "Login",
                "from_type": "UI",
                "to_name": "password",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['paswd:text']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_log_in_onsuccess_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "log_in",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "myUser_id",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['_id']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "log_in",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "sessionToken",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['sessionToken']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_findMyGrade_onsuccess_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "myGrade",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['grade']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "myPoints",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['points']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "userProfile_id",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['_id']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "myProgram",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['program']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "myProfile",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['name_f']",
                        "target": "$['name_f']"
                    },
                    {
                        "source": "$['body'][0]['name_l']",
                        "target": "$['name_l']"
                    },
                    {
                        "source": "$['body'][0]['region']",
                        "target": "$['region']"
                    },
                    {
                        "source": "$['body'][0]['village']",
                        "target": "$['village']"
                    },
                    {
                        "source": "$['body'][0]['phone']",
                        "target": "$['phone']"
                    },
                    {
                        "source": "$['body'][0]['email']",
                        "target": "$['email']"
                    },
                    {
                        "source": "$['body'][0]['grade']",
                        "target": "$['grade']"
                    },
                    {
                        "source": "$['body'][0]['program']",
                        "target": "$['program']"
                    },
                    {
                        "source": "$['body'][0]['accountType']",
                        "target": "$['accountType']"
                    },
                    {
                        "source": "$['body'][0]['learningPod']['_id']",
                        "target": "$['learningPod']['_id']"
                    },
                    {
                        "source": "$['body'][0]['learningPod']['podName']",
                        "target": "$['learningPod']['podName']"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "Login",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][0]['status']",
                        "target_transformation": function(value, element) {
                            if (value === "active") {
                                return "active";
                            } else {
                                return "inactive";
                            }
                        },
                        "target": "$['activeLabel:text']"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "testCount",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['testCount']",
                        "target_transformation": function(value) {
                            if (!value) {
                                return 0;
                            }
                        },
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "findMyGrade",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "avgTestScore",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body'][0]['avgTestScore']",
                        "target_transformation": function(value) {
                            if (!value) {
                                return 0;
                            }
                        },
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_findMyGrade_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "myUser_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "findMyGrade",
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
                        "source": "$",
                        "target_transformation": function(value) {
                            return {
                                "user_id._id": value
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            },
            {
                "from_name": "sessionToken",
                "from_type": "LOCAL_STORAGE",
                "to_name": "findMyGrade",
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
                        "source": "$",
                        "target": "$['headers']['X-Appery-Session-Token']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_me_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "sessionToken",
                "from_type": "LOCAL_STORAGE",
                "to_name": "me",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "to_profile"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['headers']['X-Appery-Session-Token']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_saveMyCompletedLessons_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "userProfile_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "saveMyCompletedLessons",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,lessonPlan_id"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target_transformation": function(value) {
                            alert(value);
                            return {
                                "student_id._id": value
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_queryAndSaveMyLessons1_onsuccess_mapping_0"] = {
        "homeScreen": "Login",
        "directions": []
    };
    Apperyio.mappings["Login_queryAndSaveMyLessons1_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "userProfile_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "queryAndSaveMyLessons1",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {
                        "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,lessonPlan_id"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target_transformation": function(value) {
                            return {
                                "student_id._id": value
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_updateProfileStatusReLogin_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "Login",
                "from_type": "UI",
                "to_name": "updateProfileStatusReLogin",
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
                        },
                        "learningPod": {
                            "collName": "LearningPods"
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$['gradeSelect:selectedMenuItem']",
                        "target": "$['body']['grade']"
                    },
                    {
                        "source": "$['genderSelect:selectedMenuItem']",
                        "target": "$['body']['gender']"
                    },
                    {
                        "source": "$['programSelect:selectedMenuItem']",
                        "target": "$['body']['program']"
                    },
                    {
                        "source": "$['pod_id:text']",
                        "target_transformation": function(value) {
                            return value ? {
                                "collName": "LearningPods",
                                "_id": value
                            } : null;
                        },
                        "target": "$['body']['learningPod']"
                    },
                    {
                        "source": "$['pod_id:text']",
                        "target": "$['body']['learningPod']['_id']"
                    }
                ]
            },
            {
                "from_name": "userProfile_id",
                "from_type": "LOCAL_STORAGE",
                "to_name": "updateProfileStatusReLogin",
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
                        },
                        "learningPod": {
                            "collName": "LearningPods"
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
                "to_name": "updateProfileStatusReLogin",
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
                        },
                        "learningPod": {
                            "collName": "LearningPods"
                        }
                    }
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            return "active";
                        },
                        "target": "$['body']['status']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_listLearningPods_onsuccess_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "from_name": "listLearningPods",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "Login",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][0]['_id']",
                        "target": "$['podNameSelect:selectedMenuItem']"
                    },
                    {
                        "source": "$['body'][i]",
                        "target": "$['podNameSelect-0']"
                    },
                    {
                        "source": "$['body'][i]['podName']",
                        "target": "$['podNameSelect-0:label']"
                    },
                    {
                        "source": "$['body'][i]['_id']",
                        "target": "$['podNameSelect-0:value']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_listLearningPods_onbeforesend_mapping_0"] = {
        "homeScreen": "Login",
        "directions": [
            {
                "to_name": "listLearningPods",
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
    window.log_in = Apperyio.datasources.log_in = new Apperyio.DataSource(stemguyana_login_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_log_in_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_log_in_onsuccess_mapping_0"]);
            try {
                me.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.findMyGrade = Apperyio.datasources.findMyGrade = new Apperyio.DataSource(stemguyana_User_profile_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_findMyGrade_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_findMyGrade_onsuccess_mapping_0"]);
            try {
                queryAndSaveMyLessons1.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.me = Apperyio.datasources.me = new Apperyio.DataSource(stemguyana_me_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_me_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.storage.myProfile.set(data.to_profile);
            try {
                findMyGrade.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.saveMyCompletedLessons = Apperyio.datasources.saveMyCompletedLessons = new Apperyio.DataSource(stemguyana_lessonPlanCompletion_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_saveMyCompletedLessons_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            var data = data;
            var completed = [];
            for (i = 0; i < data.length; i++) {
                var thisLesson = data[i].lessonPlan_id;
                var heyID = thisLesson.grade;
                completed.push(heyID);
            }
            Apperyio.storage.myCompletedLessons.set(completed);
            ;
            Apperyio.navigateTo('Home', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.queryAndSaveMyLessons1 = Apperyio.datasources.queryAndSaveMyLessons1 = new Apperyio.DataSource(stemguyana_lessonPlanCompletion_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_queryAndSaveMyLessons1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_queryAndSaveMyLessons1_onsuccess_mapping_0"]);
            var completed = [];
            for (i = 0; i < data.length; i++) {
                var thisLesson = data[i].lessonPlan_id._id;
                completed.push(thisLesson);
            }
            Apperyio.storage.myCompletedLessons.set(completed);
            if (Apperyio("activeLabel").text() === "active") {
                Apperyio.navigateTo("Home");
            } else {
                Apperyio("updateProfilePopup").popup("open", {});
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.updateProfileStatusReLogin = Apperyio.datasources.updateProfileStatusReLogin = new Apperyio.DataSource(stemguyana_User_profile_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_updateProfileStatusReLogin_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.navigateTo('Home', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.listLearningPods = Apperyio.datasources.listLearningPods = new Apperyio.DataSource(stemguyana_LearningPods_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_listLearningPods_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_listLearningPods_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'Login';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Login_onLoad = function() {
        Login_elementsExtraJS();
        $('div[dsid="mobilecontainerstem"]').css('background-image',
            'url(' + Appery.getImagePath('Artboard_2.png') + ')');
        $('div[dsid="mobilecontainerstem"]').css('background-size', '100% 100%');
        $('div[dsid="mobilecontainerstem"]').css('background-position', 'center');
        $('div[dsid="mobilecontainerstem"]').css('background-repeat', 'no-repeat');
        Apperyio("phone_usnme").parent().css("background", "#ffffff");
        Apperyio("phone_usnme").parent().css("border-color", "#ff725e");
        Apperyio("phone_usnme").parent().css("border-width", "1px");
        Apperyio("phone_usnme").parent().css("color", "#ff725e");
        Apperyio("phone_usnme").parent().css("font-size", "14px");
        Apperyio("phone_usnme").parent().css("border-radius", "40px");
        Apperyio("phone_usnme").parent().css("padding-top", "5px");
        Apperyio("phone_usnme").parent().css("padding-bottom", "5px");
        Apperyio("phone_usnme").parent().css("padding-left", "10px");
        Apperyio("paswd").parent().css("background", "#ffffff");
        Apperyio("paswd").parent().css("border-color", "#ff725e");
        Apperyio("paswd").parent().css("border-width", "1px");
        Apperyio("paswd").parent().css("color", "#ff725e");
        Apperyio("paswd").parent().css("font-size", "14px");
        Apperyio("paswd").parent().css("border-radius", "40px");
        Apperyio("paswd").parent().css("padding-top", "5px");
        Apperyio("paswd").parent().css("padding-bottom", "5px");
        Apperyio("paswd").parent().css("padding-left", "10px");
        Apperyio("gradeSelect").parent().css("background", "#ff725e");
        Apperyio("gradeSelect").parent().css("border-width", "0px");
        Apperyio("gradeSelect").parent().css("border-radius", "30px");
        Apperyio("programSelect").parent().css("background", "#ff725e");
        Apperyio("programSelect").parent().css("border-width", "0px");
        Apperyio("programSelect").parent().css("border-radius", "30px");
        Apperyio("genderSelect").parent().css("background", "#ff725e");
        Apperyio("genderSelect").parent().css("border-width", "0px");
        Apperyio("genderSelect").parent().css("border-radius", "30px");
        Apperyio("podNameSelect").parent().css("background", "#ff725e");
        Apperyio("podNameSelect").parent().css("border-width", "0px");
        Apperyio("podNameSelect").parent().css("border-radius", "30px");
        ;
        Login_deviceEvents();
        Login_windowEvents();
        Login_elementsEvents();
    };
    // screen window events
    function Login_windowEvents() {
        $('#Login').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#Login').on({
            pageshow: function(event) {
                if (Apperyio.storage.username.get() !== "") {
                    Apperyio("phone_usnme").val(Apperyio.storage.username.get());
                    Apperyio("paswd").val(Apperyio.storage.password.get());
                } else {
                };
                try {
                    listLearningPods.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function Login_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Login_elementsExtraJS() {
        // screen (Login) extra code
        /* updateProfilePopup */
        $("#Login_updateProfilePopup").popup("option", "positionTo", "window");
        /* gradeSelect */
        $("#Login_gradeSelect").parent().find("a.ui-btn").attr("tabindex", "6");
        /* programSelect */
        $("#Login_programSelect").parent().find("a.ui-btn").attr("tabindex", "9");
        /* podNameSelect */
        $("#Login_podNameSelect").parent().find("a.ui-btn").attr("tabindex", "7");
        /* genderSelect */
        $("#Login_genderSelect").parent().find("a.ui-btn").attr("tabindex", "8");
    };
    // screen elements handler
    function Login_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Login_mobilecontainerstem [name="mobilebutton_7"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        log_in.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#Login_mobilecontainerstem [name="mobilebutton_7"]');
        $(document).off("click", '#Login_mobilecontainerstem [name="mobilebutton_33"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('register', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#Login_mobilecontainerstem [name="mobilebutton_33"]');
        $(document).off("change", '#Login_updateProfilePopup [name="podNameSelect"]').on({
            change: function(event) {
                Apperyio("pod_id").text(Apperyio("podNameSelect").val());
            },
        }, '#Login_updateProfilePopup [name="podNameSelect"]');
        $(document).off("tap", '#Login_updateProfilePopup [name="mobilebutton_32"]').on({
            tap: function(event) {
                try {
                    updateProfileStatusReLogin.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                event.stopPropagation();
                return false;
            },
        }, '#Login_updateProfilePopup [name="mobilebutton_32"]');
    };
    $(document).off("pagebeforeshow", "#Login").on("pagebeforeshow", "#Login", function(event, ui) {
        Apperyio.CurrentScreen = "Login";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Login_onLoad();
};
$(document).off("pagecreate", "#Login").on("pagecreate", "#Login", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Login_js();
});