/*******************************
 * MetricCalculations.gs
 * Calculates all derived metrics
 *******************************/

function calculateAllMetrics_(rawRecords) {
  const c = CONFIG.RAW_COLUMNS;
  const cc = CONFIG.CALCULATED_COLUMNS;

  const metricsByYear = {};

  for (let i = 0; i < rawRecords.length; i++) {
    const current = rawRecords[i];
    const previous = i > 0 ? rawRecords[i - 1] : null;

    const revenue = current.values[c.REVENUE];
    const grossProfit = current.values[c.GROSS_PROFIT];
    const operatingIncome = current.values[c.OPERATING_INCOME];
    const netIncome = current.values[c.NET_INCOME];
    const freeCashFlow = current.values[c.FREE_CASH_FLOW];
    const capEx = current.values[c.CAPEX];

    const yearMetrics = {};

    if (previous) {
      const currentRevenue = toNumber_(current.values[c.REVENUE]);
      const previousRevenue = toNumber_(previous.values[c.REVENUE]);

      if (currentRevenue !== null && previousRevenue !== null && previousRevenue !== 0) {
        yearMetrics[cc.REVENUE_GROWTH] =
          (currentRevenue - previousRevenue) / previousRevenue;
      } else {
        yearMetrics[cc.REVENUE_GROWTH] = "";
      }
    } else {
      yearMetrics[cc.REVENUE_GROWTH] = "";
    }

    yearMetrics[cc.GROSS_MARGIN] = safeDivide_(grossProfit, revenue);
    yearMetrics[cc.OPERATING_MARGIN] = safeDivide_(operatingIncome, revenue);
    yearMetrics[cc.NET_MARGIN] = safeDivide_(netIncome, revenue);
    yearMetrics[cc.FREE_CASH_FLOW_MARGIN] = safeDivide_(freeCashFlow, revenue);
    yearMetrics[cc.CAPEX_AS_PERCENT_OF_REVENUE] = safeDivide_(capEx, revenue);

    metricsByYear[current.fiscalYear] = yearMetrics;
  }

  return metricsByYear;
}
