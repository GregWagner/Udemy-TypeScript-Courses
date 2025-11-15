import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";
import {WinsAnalyzis} from "./analyzers/WinsAnalyzis";
import {ConsoleReport} from "./reportTargets/ConsoleReport";

const matchReader = MatchReader.fromCsv('football.csv')

const summary = new Summary(
    new WinsAnalyzis('Man United'),
    new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

const htmlSummary = Summary.windsAnalysisWithHtmlReport('Man United');
htmlSummary.buildAndPrintReport(matchReader.matches);
