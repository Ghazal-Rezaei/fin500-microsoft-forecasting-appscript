/*******************************
 * Main.gs
 * Main functions to run
 *******************************/

function runFullForecastingDataPrep() {
  const rawRecords = readRawFinancialRecords_();
  const metricsByYear = calculateAllMetrics_(rawRecords);

  writeCalculatedMetrics_(rawRecords, metricsByYear);
  writeTableauLongFormat_(rawRecords, metricsByYear);

  SpreadsheetApp.flush();

  Logger.log("Calculated_Metrics and Tableau_Long_Format were updated successfully.");
}
