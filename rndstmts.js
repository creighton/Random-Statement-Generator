'use strict'

const Readable = require('stream').Readable;
const Writable = require('stream').Writable;

const StatementGenerator = require('./statement-generator');

class CreateRandomStatements extends Readable{
    constructor(batch, stmts) {
        super({objectMode: true});

        this.stmts = stmts;
        this.batch = batch;
        this.SG = new StatementGenerator();
    }

    _read (size) {
        if (this.stmts > 0) {
            let count = (this.stmts < this.batch)? this.stmts : this.batch;
            this.stmts -= count;
            this.push(this.SG.createBatch(count));
        }
        else { this.push(null); }
    }

}

class UseRandomStatements extends Writable {
    constructor(action) {
        super({objectMode: true});
        this.action = action;
    }

    write (stmtarr, enc, cb) {
        if (Array.isArray(stmtarr)) {
            this.action(stmtarr);
            if (cb) return cb();
        } else {
            cb(new Error('not an array'));
        }
    }
}

module.exports.CreateRandomStatements = CreateRandomStatements;
module.exports.UseRandomStatements = UseRandomStatements;
