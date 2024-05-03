"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalyzis_1 = require("./analyzers/WinsAnalyzis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    static windsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalyzis_1.WinsAnalyzis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
