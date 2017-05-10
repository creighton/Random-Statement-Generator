'use strict';
const uuidv4 = require('uuid/v4');
const rand = require('random-js')();
const sentencer = require('sentencer');

const ActivityTypes = require('./activity-types');
const Verbs = require('./verbs');
const ActorAccounts = require('./actor-accounts');
const words = require('./words');

// 1000 words, 1,000,000 = use all 1000 words (3 words), 100,00 = use 100 words (3 words), 10,000 = use 10 words
class StatementGenerator {
    constructor(totalstmts) {
        this.templateStmt = {
            "id": "",
            "version": "1.0.0",
            "stored": "",
            "timestamp": "",
            "actor": {},
            "verb": {},
            "object": {},
            "result": {},
            "context": {
                
            },
            "authority": {}
        };
        this.totalstmts = totalstmts;
        this.startDate = new Date('2014', '01', '01');
        this.endDate = new Date();
        sentencer.configure({
            actions: {
                verb: function() {
                    let v = ['ate','caught','held','saw','wore','hugged','stopped','felt','liked'];
                    return v[rand.integer(0, v.length - 1)];
                }
            }
        });
    }

    createBatch (count) {
        this.totalstmts = this.totalstmts || count;
        let stmts = [];
        for (let i = 0; i < count; i++) {
            stmts.push(this.create());
        }

        return stmts;
    }

    create () {
        this.totalstmts = this.totalstmts || 1;
        let stmt = this._getTemplate();
        let date = rand.date(this.startDate, this.endDate);
        let timestampdate = date;
        let storeddate = new Date(date);
        storeddate.setMinutes(rand.integer(1,180));
        
        stmt.id = uuidv4();
        stmt.stored = storeddate.toISOString();
        stmt.timestamp = timestampdate.toISOString();
        stmt.actor = rand.pick(ActorAccounts);
        stmt.authority = rand.pick(ActorAccounts);

        this._addTheRest(stmt);

        return stmt;
    }

    _getTemplate () {
        return JSON.parse(JSON.stringify(this.templateStmt));
    }

    _addTheRest (stmt) {
        let activityType = ActivityTypes[rand.integer(0, ActivityTypes.length - 1)];
        
        stmt.object = this._createActivity(activityType, this._getActivityName());
        stmt.verb = this._createVerb(activityType);
        stmt.result = this._createResult(activityType, stmt.verb);
        stmt.context = this._createContext(activityType, stmt.verb);
    }

    _createActivity (activityType, activityName) {
        let activity = {
            id: `http://random.example.com/activity/${activityName}`,
        };
        if (activityType !== 'https://w3id.org/xapi/none') {
            activity.definition = {
                name: {
                    en: activityName
                },
                type: activityType
            };
        }
        return activity;
    }

    _createVerb (activityType) {
        let verbkeys = Verbs.getVerbsByActivityType(activityType);
        return Verbs.getVerb(verbkeys[rand.integer(0, verbkeys.length - 1)]);
    }

    _createResult (activityType, verb) {
        if (verb === Verbs.getVerb('terminated') ||
            verb === Verbs.getVerb('attempted')) {
            let res = {};
            res.score = this._createScore();
            res.success = (rand.bool()) ? undefined : (rand.bool());
            res.completion = (rand.bool()) ? undefined : (rand.bool());
            res.response = (rand.bool()) ? undefined : 
                sentencer.make("{{an_adjective}}{{noun}}{{verb}}{{an_adjective}}{{noun}}");
            res.duration = (rand.bool()) ? undefined : 
                `PT${rand.integer(0,2)}H${rand.integer(0,59)}M${rand.integer(0,59)}S`;
            return res;
        }
        if (verb === Verbs.getVerb('answered') || 
            verb === Verbs.getVerb('asked') ||
            verb === Verbs.getVerb('responded') ||
            verb === Verbs.getVerb('commented')) {
            return {
                response: sentencer.make("{{an_adjective}} {{noun}} {{verb}} {{an_adjective}} {{noun}}")
            };
        }
        if (verb === Verbs.getVerb('failed') || 
            verb === Verbs.getVerb('passed') ||
            verb === Verbs.getVerb('scored')) {
            return {score: this._createScore()};
        }

        return undefined;
    }

    _createContext (activityType, verb) {
        if (activityType === 'http://adlnet.gov/expapi/activities/assessment') {

        }
        return undefined;
    }

    _createScore () {
        let score = {};
        if (rand.bool()) {
            score.scaled = Number(rand.real(0,1).toFixed(2));
        } else if (rand.bool()) {
            score.min = 0;
            score.max = [10, 50, 100][rand.integer(0,2)];
            score.raw = rand.integer(0, score.max);
            score.scaled = (rand.bool()) ? undefined : Number((score.raw / score.max).toFixed(2));
        }
        return score;
    }

    _getTypeString (activityType) {
        // turns http://adlnet.gov/expapi/activities/media to media 
        return activityType.substr(activityType.lastIndexOf('/') + 1);
    }

    _getActivityName () {
        if (this.totalstmts === 1) return `${rand.picker(words)}`;
        let maxidx = Math.ceil(Math.sqrt(Math.sqrt(this.totalstmts))) - 1;
        maxidx = (maxidx > words.length -1) ? words.length - 1 : maxidx;
        return `${words[rand.integer(0,maxidx)]}-${words[rand.integer(0,maxidx)]}`;
    }
}

module.exports = StatementGenerator;