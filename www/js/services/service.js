/*
 * Security contexts
 */
/*
 * Service settings
 */
var stemguyana_settings = {
    "database_id": "600e154d2e22d77546692f81"
}
var stemguyana_settings = {
    "database_id": "600e154d2e22d77546692f81"
}
/*
 * Services
 */
var stemguyana_paymentHistory_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/paymentHistory',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_assessmentReports_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/assessmentReports',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.learningPod, podID,results_id",
            "limit": "100"
        },
        "body": null
    }
});
var stemguyana_Prizes_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Prizes/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_paymentHistory_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/paymentHistory',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile"
        },
        "body": null
    }
});
var stemguyana_User_profile_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/User_profile/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_inventory_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/inventory',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var StorageService = new Apperyio.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {},
        "parameters": {},
        "body": null
    }
});
var stemguyana_User_profile_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/User_profile',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            },
            "user_id": {
                "collName": "_users"
            }
        }
    }
});
var stemguyana_assessmentReports_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/assessmentReports',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_orders_food_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/orders_food/query',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "include": "user,user.user_id,user.user_id.to_profile,user.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.learningPod,user.user_id.to_profile.user_id.to_profile.learningPod,user.user_id.to_profile.user_id.to_profile.learningPod.podManager,user.user_id.to_profile.user_id.to_profile.learningPod.podManager.user_id,user.user_id.to_profile.user_id.to_profile.learningPod.podManager.learningPod,user.user_id.to_profile.learningPod,user.user_id.to_profile.learningPod.podManager,user.user_id.to_profile.learningPod.podManager.user_id,user.user_id.to_profile.learningPod.podManager.user_id.to_profile,user.user_id.to_profile.learningPod.podManager.user_id.to_profile.user_id,user.user_id.to_profile.learningPod.podManager.user_id.to_profile.learningPod,user.user_id.to_profile.learningPod.podManager.learningPod,user.user_id.to_profile.learningPod.podManager.learningPod.podManager,user.learningPod,user.learningPod.podManager,user.learningPod.podManager.user_id,user.learningPod.podManager.user_id.to_profile,user.learningPod.podManager.user_id.to_profile.user_id,user.learningPod.podManager.user_id.to_profile.user_id.to_profile,user.learningPod.podManager.user_id.to_profile.user_id.to_profile.user_id,user.learningPod.podManager.user_id.to_profile.user_id.to_profile.learningPod,user.learningPod.podManager.user_id.to_profile.learningPod,user.learningPod.podManager.user_id.to_profile.learningPod.podManager,user.learningPod.podManager.learningPod,user.learningPod.podManager.learningPod.podManager,user.learningPod.podManager.learningPod.podManager.user_id,user.learningPod.podManager.learningPod.podManager.user_id.to_profile,user.learningPod.podManager.learningPod.podManager.learningPod,item"
        }
    }
});
var stemguyana_CoachAndStudents_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/CoachAndStudents',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_User_profile_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/User_profile',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "user_id,user_id.to_profile,user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,learningPod"
        },
        "body": null
    }
});
var stemguyana_orders_food_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/orders_food',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_foods_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/foods/query',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_foods_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/foods/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_orders_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/orders',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_Prizes_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Prizes',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_inventory_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/inventory/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_LearningPods_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/LearningPods',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "podManager,podManager.user_id,podManager.user_id.to_profile,podManager.user_id.to_profile.user_id,podManager.user_id.to_profile.user_id.to_profile,podManager.user_id.to_profile.user_id.to_profile.user_id,podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile,podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile"
        },
        "body": null
    }
});
var stemguyana_me_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users/me',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "to_profile"
        },
        "body": null
    }
});
var stemguyana_Attendance_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Attendance/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_orders_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/orders',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "user,user.user_id,user.user_id.to_profile,user.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,item,user.learningPod"
        },
        "body": null
    }
});
var stemguyana_login_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/login',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_paymentHistory_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/paymentHistory',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile"
        },
        "body": null
    }
});
var stemguyana_Feedback_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Feedback/query',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "include": "user_id,user_id.user_id,user_id.user_id.to_profile,user_id.user_id.to_profile.user_id,user_id.user_id.to_profile.user_id.to_profile,user_id.user_id.to_profile.user_id.to_profile.user_id,user_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,user_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,user_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.learningPod,user_id.user_id.to_profile.user_id.to_profile.learningPod,user_id.user_id.to_profile.user_id.to_profile.learningPod.podManager,user_id.user_id.to_profile.user_id.to_profile.learningPod.podManager.user_id,user_id.user_id.to_profile.user_id.to_profile.learningPod.podManager.learningPod,user_id.user_id.to_profile.learningPod,user_id.user_id.to_profile.learningPod.podManager,user_id.user_id.to_profile.learningPod.podManager.user_id,user_id.user_id.to_profile.learningPod.podManager.user_id.to_profile,user_id.user_id.to_profile.learningPod.podManager.user_id.to_profile.user_id,user_id.user_id.to_profile.learningPod.podManager.user_id.to_profile.learningPod,user_id.user_id.to_profile.learningPod.podManager.learningPod,user_id.user_id.to_profile.learningPod.podManager.learningPod.podManager,user_id.learningPod,user_id.learningPod.podManager,user_id.learningPod.podManager.user_id,user_id.learningPod.podManager.user_id.to_profile,user_id.learningPod.podManager.user_id.to_profile.user_id,user_id.learningPod.podManager.user_id.to_profile.user_id.to_profile,user_id.learningPod.podManager.user_id.to_profile.user_id.to_profile.user_id,user_id.learningPod.podManager.user_id.to_profile.user_id.to_profile.learningPod,user_id.learningPod.podManager.user_id.to_profile.learningPod,user_id.learningPod.podManager.user_id.to_profile.learningPod.podManager,user_id.learningPod.podManager.learningPod,user_id.learningPod.podManager.learningPod.podManager,user_id.learningPod.podManager.learningPod.podManager.user_id,user_id.learningPod.podManager.learningPod.podManager.user_id.to_profile,user_id.learningPod.podManager.learningPod.podManager.learningPod"
        }
    }
});
var stemguyana_Attendance_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Attendance',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.learningPod",
            "sort": "-_createdAt"
        },
        "body": null
    }
});
var stemguyana_Attendance_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Attendance',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_logout_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/logout',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_reportCard_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/reportCard/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_reportCard_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/reportCard',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_Feedback_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Feedback',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_results_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/results',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});
var stemguyana_results_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/results',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "user"
        },
        "body": null
    }
});
var stemguyana_CoachAndStudents_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/CoachAndStudents',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "coach_id,coach_id.user_id,coach_id.user_id.to_profile,coach_id.user_id.to_profile.user_id,coach_id.user_id.to_profile.user_id.to_profile,coach_id.user_id.to_profile.user_id.to_profile.user_id,coach_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,coach_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,coach_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id"
        },
        "body": null
    }
});
var stemguyana_assessments_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/assessments',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_podEvaluations_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/podEvaluations',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "evaluator_id,evaluator_id.user_id,evaluator_id.user_id.to_profile,evaluator_id.user_id.to_profile.user_id,evaluator_id.user_id.to_profile.user_id.to_profile,evaluator_id.user_id.to_profile.user_id.to_profile.user_id,evaluator_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,evaluator_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,evaluator_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,evaluator_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.learningPod,evaluator_id.user_id.to_profile.user_id.to_profile.learningPod,evaluator_id.user_id.to_profile.user_id.to_profile.learningPod.podManager,evaluator_id.user_id.to_profile.user_id.to_profile.learningPod.podManager.user_id,evaluator_id.user_id.to_profile.user_id.to_profile.learningPod.podManager.learningPod,evaluator_id.user_id.to_profile.learningPod,evaluator_id.user_id.to_profile.learningPod.podManager,evaluator_id.user_id.to_profile.learningPod.podManager.user_id,evaluator_id.user_id.to_profile.learningPod.podManager.user_id.to_profile,evaluator_id.user_id.to_profile.learningPod.podManager.user_id.to_profile.user_id,evaluator_id.user_id.to_profile.learningPod.podManager.user_id.to_profile.learningPod,evaluator_id.user_id.to_profile.learningPod.podManager.learningPod,evaluator_id.user_id.to_profile.learningPod.podManager.learningPod.podManager,evaluator_id.learningPod,evaluator_id.learningPod.podManager,evaluator_id.learningPod.podManager.user_id,evaluator_id.learningPod.podManager.user_id.to_profile,evaluator_id.learningPod.podManager.user_id.to_profile.user_id,evaluator_id.learningPod.podManager.user_id.to_profile.user_id.to_profile,evaluator_id.learningPod.podManager.user_id.to_profile.user_id.to_profile.user_id,evaluator_id.learningPod.podManager.user_id.to_profile.user_id.to_profile.learningPod,evaluator_id.learningPod.podManager.user_id.to_profile.learningPod,evaluator_id.learningPod.podManager.user_id.to_profile.learningPod.podManager,evaluator_id.learningPod.podManager.learningPod,evaluator_id.learningPod.podManager.learningPod.podManager,evaluator_id.learningPod.podManager.learningPod.podManager.user_id,evaluator_id.learningPod.podManager.learningPod.podManager.user_id.to_profile,evaluator_id.learningPod.podManager.learningPod.podManager.learningPod,learningPod_id,learningPod_id.podManager,learningPod_id.podManager.user_id,learningPod_id.podManager.user_id.to_profile,learningPod_id.podManager.user_id.to_profile.user_id,learningPod_id.podManager.user_id.to_profile.user_id.to_profile,learningPod_id.podManager.user_id.to_profile.user_id.to_profile.user_id,learningPod_id.podManager.user_id.to_profile.user_id.to_profile.user_id.to_profile,learningPod_id.podManager.user_id.to_profile.user_id.to_profile.learningPod,learningPod_id.podManager.user_id.to_profile.learningPod,learningPod_id.podManager.user_id.to_profile.learningPod.podManager,learningPod_id.podManager.user_id.to_profile.learningPod.podManager.user_id,learningPod_id.podManager.user_id.to_profile.learningPod.podManager.learningPod,learningPod_id.podManager.learningPod,learningPod_id.podManager.learningPod.podManager,learningPod_id.podManager.learningPod.podManager.user_id,learningPod_id.podManager.learningPod.podManager.user_id.to_profile,learningPod_id.podManager.learningPod.podManager.user_id.to_profile.user_id,learningPod_id.podManager.learningPod.podManager.user_id.to_profile.learningPod,learningPod_id.podManager.learningPod.podManager.learningPod,learningPod_id.podManager.learningPod.podManager.learningPod.podManager"
        },
        "body": null
    }
});
var stemguyana_orders_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/orders/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_signup_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_podEvaluations_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/podEvaluations',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_inventory_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/inventory/query',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_user_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_Attendance_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Attendance',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile"
        },
        "body": null
    }
});
var stemguyana_lessons_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/lessons',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var stemguyana_orders_food_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/orders_food/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {
            "full_object": "false"
        },
        "body": null
    }
});
var stemguyana_lessonPlanCompletion_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/lessonPlanCompletion',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {
            "include": "student_id,student_id.user_id,student_id.user_id.to_profile,student_id.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id,student_id.user_id.to_profile.user_id.to_profile.user_id.to_profile.user_id.to_profile,lessonPlan_id"
        },
        "body": null
    }
});
var stemguyana_lessonPlanCompletion_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/lessonPlanCompletion',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': stemguyana_settings
        ,
    'defaultRequest': {
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
    }
});