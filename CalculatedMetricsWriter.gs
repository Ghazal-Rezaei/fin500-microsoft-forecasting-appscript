/*******************************
 * CalculatedMetricsWriter.gs
 * Writes Calculated_Metrics tab
 *******************************/

function writeCalculatedMetrics_(rawRecords, metricsByYear) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const calcSheet = getOrCreateSheet_(ss, CONFIG.SHEETS.CALCULATED);

  const headers = CONFIG.CALCULATED_HEADERS;
  const rows = [headers];

  rawRecords.forEach(record => {
    const yearMetrics = metricsByYear[record.fiscalYear] || {};

    rows.push([
      record.fiscalYear,
      yearMetrics[CONFIG.CALCULATED_COLUMNS.REVENUE_GROWTH] ?? "",
      yearMetrics[CONFIG.CALCULATED_COLUMNS.GROSS_MARGIN] ?? "",
      yearMetrics[CONFIG.CALCULATED_COLUMNS.OPERATING_MARGIN] ?? "",
      yearMetrics[CONFIG.CALCULATED_COLUMNS.NET_MARGIN] ?? "",
      yearMetrics[CONFIG.CALCULATED_COLUMNS.FREE_CASH_FLOW_MARGIN] ?? "",
      yearMetrics[CONFIG.CALCULATED_COLUMNS.CAPEX_AS_PERCENT_OF_REVENUE] ?? ""
    ]);
  });

  calcSheet.clearContents();
  calcSheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);

  calcSheet.setFrozenRows(1);

  if (rows.length > 1) {
    calcSheet
      .getRange(2, 2, rows.length - 1, rows[0].length - 1)
      .setNumberFormat(CONFIG.FORMATS.PERCENT);
  }

  calcSheet.autoResizeColumns(1, rows[0].length);
}
