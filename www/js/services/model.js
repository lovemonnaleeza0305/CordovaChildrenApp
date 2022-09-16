/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "myCart": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "String": {
        "type": "string"
    },
    "Boolean": {
        "type": "boolean"
    },
    "students": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {}
        }
    },
    "Inventory": {
        "type": "object",
        "properties": {
            "Tablets": {
                "type": "number"
            },
            "BrokenFireExtinguisher": {
                "type": "number"
            },
            "BrokenFirstAidKits": {
                "type": "number"
            },
            "ownership": {
                "type": "string"
            },
            "BrokenTablets": {
                "type": "number"
            },
            "BrokenBooks": {
                "type": "number"
            },
            "Projectors": {
                "type": "number"
            },
            "Books": {
                "type": "number"
            },
            "_id": {
                "type": "string"
            },
            "FireExtinguisher": {
                "type": "number"
            },
            "BrokenSpeakers": {
                "type": "number"
            },
            "Speakers": {
                "type": "number"
            },
            "learningPod": {
                "type": "string"
            },
            "BrokenProjectors": {
                "type": "number"
            },
            "BrokenRobotKits": {
                "type": "string"
            },
            "FirstAidKits": {
                "type": "number"
            },
            "BrokenLaptops": {
                "type": "number"
            },
            "RobotKits": {
                "type": "string"
            },
            "Laptops": {
                "type": "number"
            }
        }
    },
    "myCompletedLessons": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "Number": {
        "type": "number"
    },
    "userProfile": {
        "type": "object",
        "properties": {
            "accountType": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "program": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "region": {
                "type": "string"
            },
            "grade": {
                "type": "string"
            },
            "learningPod": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string"
                    },
                    "podName": {
                        "type": "string"
                    }
                }
            },
            "name_l": {
                "type": "string"
            },
            "village": {
                "type": "string"
            },
            "name_f": {
                "type": "string"
            }
        }
    },
    "Array": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {}
        }
    },
    "Lesson": {
        "type": "object",
        "properties": {
            "subject": {
                "type": "string"
            },
            "grade": {
                "type": "string"
            },
            "query": {
                "type": "string"
            }
        }
    },
    "studentAttendanceReport": {
        "type": "object",
        "properties": {
            "participationPoints": {
                "type": "string"
            },
            "projectPoints": {
                "type": "string"
            },
            "_id": {
                "type": "string"
            }
        }
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {
    "pdf": new $a.LocalStorage("pdf", "String"),
    "myGrade": new $a.LocalStorage("myGrade", "String"),
    "myUser_id": new $a.LocalStorage("myUser_id", "String"),
    "sessionToken": new $a.LocalStorage("sessionToken", "String"),
    "myPoints": new $a.LocalStorage("myPoints", "Number"),
    "myCart": new $a.LocalStorage("myCart", "myCart"),
    "userProfile_id": new $a.LocalStorage("userProfile_id", "String"),
    "myProgram": new $a.LocalStorage("myProgram", "String"),
    "myAttendanceID": new $a.LocalStorage("myAttendanceID", "String"),
    "thisLessonID": new $a.LocalStorage("thisLessonID", "String"),
    "currentStudent": new $a.LocalStorage("currentStudent", "String"),
    "projectPoints": new $a.LocalStorage("projectPoints", "String"),
    "participationPoints": new $a.LocalStorage("participationPoints", "String"),
    "currentStudentProfileID": new $a.LocalStorage("currentStudentProfileID", "String"),
    "currentStudentPoints": new $a.LocalStorage("currentStudentPoints", "String"),
    "myCompletedLessons": new $a.LocalStorage("myCompletedLessons", "myCompletedLessons"),
    "username": new $a.LocalStorage("username", "String"),
    "password": new $a.SessionStorage("password", "String"),
    "myProfile": new $a.SessionStorage("myProfile", "userProfile"),
    "studentIDToAdd": new $a.SessionStorage("studentIDToAdd", "String"),
    "selectedSubject": new $a.SessionStorage("selectedSubject", "String"),
    "selectedGrade": new $a.SessionStorage("selectedGrade", "String"),
    "resultScore": new $a.SessionStorage("resultScore", "Number"),
    "resultCategories": new $a.SessionStorage("resultCategories", "Array"),
    "resultQuestions": new $a.SessionStorage("resultQuestions", "Number"),
    "selectedStudent": new $a.SessionStorage("selectedStudent", "String"),
    "students": new $a.LocalStorage("students", "students"),
    "eval_id": new $a.SessionStorage("eval_id", "String"),
    "currentStudentUserID": new $a.SessionStorage("currentStudentUserID", "String"),
    "myStudents": new $a.SessionStorage("myStudents", "Array"),
    "evalScore": new $a.SessionStorage("evalScore", "Array"),
    "startTime": new $a.LocalStorage("startTime", "String"),
    "testCount": new $a.SessionStorage("testCount", "Number"),
    "avgTestScore": new $a.SessionStorage("avgTestScore", "String"),
    "resultsID": new $a.SessionStorage("resultsID", "String"),
    "orderID": new $a.SessionStorage("orderID", "String"),
    "status": new $a.SessionStorage("status", "String"),
    "inventory": new $a.LocalStorage("inventory", "Inventory"),
    "lesson": new $a.LocalStorage("lesson", "Lesson")
};