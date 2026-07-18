/*******************************
 * TableauWriter.gs
 * Fills Tableau_Long_Format tab
 *******************************/

function writeTableauLongFormat_(rawRecords, metricsByYear) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tableauSheet = getOrCreateSheet_(ss, CONFIG.SHEETS.TABLEAU);

  const rows = [CONFIG.TABLEAU_HEADERS];

  rawRecords.forEach(record => {
    // 1. Raw financial metrics
    CONFIG.RAW_METRICS_FOR_TABLEAU.forEach(metric => {
      const value = record.values[metric.column];

      if (value !== null && value !== undefined && value !== "") {
        rows.push([
          record.fiscalYear,
          record.yearNumber,
          metric.category,
          metric.name,
          value,
          metric.unit,
          record.source
        ]);
      }
    });

    // 2. Calculated metrics
    const yearMetrics = metricsByYear[record.fiscalYear] || {};

    CONFIG.CALCULATED_METRICS_FOR_TABLEAU.forEach(metric => {
      const value = yearMetrics[metric.column];

      if (value !== null && value !== undefined && value !== "") {
        rows.push([
          record.fiscalYear,
          record.yearNumber,
          metric.category,
          metric.name,
          value,
          metric.unit,
          "Calculated from Raw_Financials_Wide"
        ]);
      }
    });
  });

  tableauSheet.clearContents();
  tableauSheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);

  tableauSheet.setFrozenRows(1);
  tableauSheet.autoResizeColumns(1, rows[0].length);
}
