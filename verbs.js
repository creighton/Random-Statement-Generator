'use strict'

class Verbs {
  constructor () {
    this.verbs = {
      "abandoned" : {
         "id" : "https://w3id.org/xapi/adl/verbs/abandoned",
         "display" : {"en-US" : "abandoned",
                      "fr-FR" : "a abandonné"}
      },
      "answered" : {
         "id" : "http://adlnet.gov/expapi/verbs/answered",
         "display" : {"de-DE" : "beantwortete",
                      "en-US" : "answered",
                      "fr-FR" : "a répondu",
                      "es-ES" : "contestó"}
      },
      "asked" : {
         "id" : "http://adlnet.gov/expapi/verbs/asked",
         "display" : {"de-DE" : "fragte",
                      "en-US" : "asked",
                      "fr-FR" : "a demandé",
                      "es-ES" : "preguntó"}
      },
      "attempted" : {
         "id" : "http://adlnet.gov/expapi/verbs/attempted",
         "display" : {"de-DE" : "versuchte",
                      "en-US" : "attempted",
                      "fr-FR" : "a essayé",
                      "es-ES" : "intentó"}
      },
      "attended" : {
         "id" : "http://adlnet.gov/expapi/verbs/attended",
         "display" : {"de-DE" : "nahm teil an",
                      "en-US" : "attended",
                      "fr-FR" : "a suivi",
                      "es-ES" : "asistió"}
      },
      "commented" : {
         "id" : "http://adlnet.gov/expapi/verbs/commented",
         "display" : {"de-DE" : "kommentierte",
                      "en-US" : "commented",
                      "fr-FR" : "a commenté",
                      "es-ES" : "comentó"}
      },
      "completed" : {
         "id" : "http://adlnet.gov/expapi/verbs/completed",
         "display" : {"de-DE" : "beendete",
                      "en-US" : "completed",
                      "fr-FR" : "a terminé",
                      "es-ES" : "completó"}
      },
      "exited" : {
         "id" : "http://adlnet.gov/expapi/verbs/exited",
         "display" : {"de-DE" : "verließ",
                      "en-US" : "exited",
                      "fr-FR" : "a quitté",
                      "es-ES" : "salió"}
      },
      "experienced" : {
         "id" : "http://adlnet.gov/expapi/verbs/experienced",
         "display" : {"de-DE" : "erlebte",
                      "en-US" : "experienced",
                      "fr-FR" : "a éprouvé",
                      "es-ES" : "experimentó"}
      },
      "failed" : {
         "id" : "http://adlnet.gov/expapi/verbs/failed",
         "display" : {"de-DE" : "verfehlte",
                      "en-US" : "failed",
                      "fr-FR" : "a échoué",
                      "es-ES" : "fracasó"}
      },
      "imported" : {
         "id" : "http://adlnet.gov/expapi/verbs/imported",
         "display" : {"de-DE" : "importierte",
                      "en-US" : "imported",
                      "fr-FR" : "a importé",
                      "es-ES" : "importó"}
      },
      "initialized" : {
         "id" : "http://adlnet.gov/expapi/verbs/initialized",
         "display" : {"de-DE" : "initialisierte",
                      "en-US" : "initialized",
                      "fr-FR" : "a initialisé",
                      "es-ES" : "inicializó"}
      },
      "interacted" : {
         "id" : "http://adlnet.gov/expapi/verbs/interacted",
         "display" : {"de-DE" : "interagierte",
                      "en-US" : "interacted",
                      "fr-FR" : "a interagi",
                      "es-ES" : "interactuó"}
      },
      "launched" : {
         "id" : "http://adlnet.gov/expapi/verbs/launched",
         "display" : {"de-DE" : "startete",
                      "en-US" : "launched",
                      "fr-FR" : "a lancé",
                      "es-ES" : "lanzó"}
      },
      "mastered" : {
         "id" : "http://adlnet.gov/expapi/verbs/mastered",
         "display" : {"de-DE" : "meisterte",
                      "en-US" : "mastered",
                      "fr-FR" : "a maîtrisé",
                      "es-ES" : "dominó"}
      },
      "passed" : {
         "id" : "http://adlnet.gov/expapi/verbs/passed",
         "display" : {"de-DE" : "bestand",
                      "en-US" : "passed",
                      "fr-FR" : "a réussi",
                      "es-ES" : "aprobó"}
      },
      "preferred" : {
         "id" : "http://adlnet.gov/expapi/verbs/preferred",
         "display" : {"de-DE" : "bevorzugte",
                      "en-US" : "preferred",
                      "fr-FR" : "a préféré",
                      "es-ES" : "prefirió"}
      },
      "progressed" : {
         "id" : "http://adlnet.gov/expapi/verbs/progressed",
         "display" : {"de-DE" : "machte Fortschritt mit",
                      "en-US" : "progressed",
                      "fr-FR" : "a progressé",
                      "es-ES" : "progresó"}
      },
      "registered" : {
         "id" : "http://adlnet.gov/expapi/verbs/registered",
         "display" : {"de-DE" : "registrierte",
                      "en-US" : "registered",
                      "fr-FR" : "a enregistré",
                      "es-ES" : "registró"}
      },
      "responded" : {
         "id" : "http://adlnet.gov/expapi/verbs/responded",
         "display" : {"de-DE" : "reagierte",
                      "en-US" : "responded",
                      "fr-FR" : "a répondu",
                      "es-ES" : "respondió"}
      },
      "resumed" : {
         "id" : "http://adlnet.gov/expapi/verbs/resumed",
         "display" : {"de-DE" : "setzte fort",
                      "en-US" : "resumed",
                      "fr-FR" : "a repris",
                      "es-ES" : "continuó"}
      },
      "satisfied" : {
         "id" : "https://w3id.org/xapi/adl/verbs/satisfied",
         "display" : {"en-US" : "satisfied"}
      },
      "scored" : {
         "id" : "http://adlnet.gov/expapi/verbs/scored",
         "display" : {"de-DE" : "erreichte",
                      "en-US" : "scored",
                      "fr-FR" : "a marqué",
                      "es-ES" : "anotó"}
      },
      "shared" : {
         "id" : "http://adlnet.gov/expapi/verbs/shared",
         "display" : {"de-DE" : "teilte",
                      "en-US" : "shared",
                      "fr-FR" : "a partagé",
                      "es-ES" : "compartió"}
      },
      "suspended" : {
         "id" : "http://adlnet.gov/expapi/verbs/suspended",
         "display" : {"de-DE" : "pausierte",
                      "en-US" : "suspended",
                      "fr-FR" : "a suspendu",
                      "es-ES" : "aplazó"}
      },
      "terminated" : {
         "id" : "http://adlnet.gov/expapi/verbs/terminated",
         "display" : {"de-DE" : "beendete",
                      "en-US" : "terminated",
                      "fr-FR" : "a terminé",
                      "es-ES" : "terminó"}
      },
      "voided" : {
         "id" : "http://adlnet.gov/expapi/verbs/voided",
         "display" : {"de-DE" : "entwertete",
                      "en-US" : "voided",
                      "fr-FR" : "a annulé",
                      "es-ES" : "anuló"}
      },
      "waived" : {
         "id" : "https://w3id.org/xapi/adl/verbs/waived",
         "display" : {"en-US" : "waived"}
      },
      "played" : {
         "id" : "https://w3id.org/xapi/video/verbs/waived",
         "display" : {"en-US" : "played"}
      },
      "paused" : {
         "id" : "https://w3id.org/xapi/video/verbs/waived",
         "display" : {"en-US" : "paused"}
      },
      "seeked" : {
         "id" : "https://w3id.org/xapi/video/verbs/seeked",
         "display" : {"en-US" : "seeked"}
      }
    };
    this.verbActivityMap = {
        "http://adlnet.gov/expapi/activities/assessment":
            ['abandoned','attempted','completed','exited','failed','initialized','launched','passed',
             'registered', 'responded', 'resumed', 'scored', 'suspended', 'terminated'],
        "http://adlnet.gov/expapi/activities/attempt":
            ['abandoned', 'initialized', 'resumed', 'suspended', 'terminated'],
        "http://adlnet.gov/expapi/activities/course":
            ['abandoned', 'attempted', 'attended', 'completed', 'exited','failed', 'imported', 'initialized',
             'launched', 'mastered', 'passed', 'preferred', 'registered', 'resumed', 'satisfied', 
             'scored', 'shared', 'suspended', 'terminated', 'waived'],
        "http://adlnet.gov/expapi/activities/file":
            ['imported', 'shared'],
        "http://adlnet.gov/expapi/activities/interaction":
            ['answered','asked','commented','mastered','responded','shared'],
        "http://adlnet.gov/expapi/activities/lesson":
            ['attempted','completed','exited','failed','initialized','mastered','passed',
             'resumed','satisfied','suspended','terminated','waived'],
        "http://adlnet.gov/expapi/activities/link":
            ['experienced','shared'],
        "http://adlnet.gov/expapi/activities/media":
            ['experienced','shared','played','paused','seeked','launched'],
        "http://adlnet.gov/expapi/activities/meeting":
            ['attended','registered'],
        "http://adlnet.gov/expapi/activities/module":
            ['attempted','completed','exited','failed','initialized','mastered','passed','progressed',
             'resumed','satisfied','suspended','terminated'],
        "http://adlnet.gov/expapi/activities/objective":
            ['attempted','completed','failed','mastered','passed','satisfied'],
        "http://adlnet.gov/expapi/activities/performance":
            ['scored'],
        "http://adlnet.gov/expapi/activities/profile":
            ['imported','preferred'],
        "http://adlnet.gov/expapi/activities/question":
            ['answered','attempted','commented','completed','shared'],
        "http://adlnet.gov/expapi/activities/simulation":
            ['abandoned','attempted','completed','exited','initialized','launched','suspended',
             'terminated', 'played', 'paused'],
        "https://w3id.org/xapi/video/activity-type/video":
            ['initialized','exited','launched','suspended','terminated','played','paused','seeked'],
        "https://w3id.org/xapi/cmi5/activitytype/block":
            ['attempted','completed','exited','failed','initialized','mastered','passed','progressed',
             'resumed','satisfied','suspended','terminated'],
        "https://w3id.org/xapi/none":
            Object.keys(this.verbs)
    }
  }

    getVerb (key) {
        if (isNaN(key))
            return this.verbs[key];
        else
            return this.verbs[Object.keys(this.verbs)[key]];
    }

    getVerbsByActivityType (activityType) {
        return this.verbActivityMap[activityType];
    }
}

module.exports = new Verbs();
