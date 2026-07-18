/*******************************
 * DataReader.gs
 * Reads Raw_Financials_Wide into clean records
 *******************************/

function readRawFinancialRecords_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rawSheet = ss.getSheetByName(CONFIG.SHEETS.RAW);

  if (!rawSheet) {
    throw new Error(`Sheet not found: ${CONFIG.SHEETS.RAW}`);
  }

  const rawData = rawSheet.getDataRange().getValues();

  if (rawData.length < 2) {
    throw new Error(`${CONFIG.SHEETS.RAW} must contain headers and at least one data row.`);
  }

  const headers = rawData[0].map(header => String(header).trim());
  const headerMap = getHeaderMap_(headers);

  const requiredColumns = [
    CONFIG.RAW_COLUMNS.FISCAL_YEAR,
    CONFIG.RAW_COLUMNS.REVENUE,
    CONFIG.RAW_COLUMNS.COST_OF_REVENUE,
    CONFIG.RAW_COLUMNS.GROSS_PROFIT,
    CONFIG.RAW_COLUMNS.OPERATING_INCOME,
    CONFIG.RAW_COLUMNS.NET_INCOME,
    CONFIG.RAW_COLUMNS.OPERATING_CASH_FLOW,
    CONFIG.RAW_COLUMNS.CAPEX,
    CONFIG.RAW_COLUMNS.FREE_CASH_FLOW,
    CONFIG.RAW_COLUMNS.SOURCE
  ];

  requireColumns_(headerMap, requiredColumns, CONFIG.SHEETS.RAW);

  const records = [];

  for (let i = 1; i < rawData.length; i++) {
    const row = rawData[i];
    const fiscalYear = String(row[headerMap[CONFIG.RAW_COLUMNS.FISCAL_YEAR]]).trim();

    if (!fiscalYear) {
      continue;
    }

    const record = {
      fiscalYear: fiscalYear,
      yearNumber: getYearNumber_(fiscalYear),
      source: String(row[headerMap[CONFIG.RAW_COLUMNS.SOURCE]] || "").trim(),
      values: {}
    };

    headers.forEach((header, index) => {
      record.values[header] = row[index];
    });

    records.push(record);
  }

  return sortRecordsByFiscalYear_(records);
}
