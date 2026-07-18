/*******************************
 * Helpers.gs
 * Reusable spreadsheet utilities
 *******************************/

function getOrCreateSheet_(ss, sheetName) {
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  return sheet;
}

function getHeaderMap_(headerRow) {
  const map = {};

  headerRow.forEach((header, index) => {
    const cleanHeader = String(header).trim();
    if (cleanHeader) {
      map[cleanHeader] = index;
    }
  });

  return map;
}

function requireColumns_(headerMap, requiredColumns, sheetName) {
  const missing = requiredColumns.filter(columnName => headerMap[columnName] === undefined);

  if (missing.length > 0) {
    throw new Error(
      `${sheetName} is missing the following required column(s): ${missing.join(", ")}`
    );
  }
}

function toNumber_(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value === "number") {
    return value;
  }

  let cleaned = String(value)
    .replace(/\$/g, "")
    .replace(/,/g, "")
    .trim();

  // Converts accounting negatives like (12345) into -12345
  if (cleaned.startsWith("(") && cleaned.endsWith(")")) {
    cleaned = "-" + cleaned.slice(1, -1);
  }

  const number = Number(cleaned);

  return isNaN(number) ? null : number;
}

function safeDivide_(numerator, denominator) {
  const num = toNumber_(numerator);
  const den = toNumber_(denominator);

  if (num === null || den === null || den === 0) {
    return "";
  }

  return num / den;
}

function getYearNumber_(fiscalYear) {
  const match = String(fiscalYear).match(/\d{4}/);
  return match ? Number(match[0]) : "";
}

function sortRecordsByFiscalYear_(records) {
  return records.sort((a, b) => a.yearNumber - b.yearNumber);
}
