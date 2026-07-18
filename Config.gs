/*******************************
 * Config.gs
 * Shared constants and metric definitions
 *******************************/

const CONFIG = {
  SHEETS: {
    RAW: "Raw_Financials_Wide",
    CALCULATED: "Calculated_Metrics",
    TABLEAU: "Tableau_Long_Format"
  },

  RAW_COLUMNS: {
    FISCAL_YEAR: "Fiscal Year",
    REVENUE: "Revenue",
    COST_OF_REVENUE: "Cost of Revenue",
    GROSS_PROFIT: "Gross Profit",
    OPERATING_INCOME: "Operating Income",
    NET_INCOME: "Net Income",
    OPERATING_CASH_FLOW: "Operating Cash Flow",
    CAPEX: "CapEx",
    FREE_CASH_FLOW: "Free Cash Flow",
    CASH_AND_CASH_EQUIVALENTS: "Cash & Cash Equivalents",
    DILUTED_EPS: "Diluted EPS",
    SOURCE: "Source"
  },

  CALCULATED_COLUMNS: {
    FISCAL_YEAR: "Fiscal Year",
    REVENUE_GROWTH: "Revenue Growth %",
    GROSS_MARGIN: "Gross Margin %",
    OPERATING_MARGIN: "Operating Margin %",
    NET_MARGIN: "Net Margin %",
    FREE_CASH_FLOW_MARGIN: "Free Cash Flow Margin %",
    CAPEX_AS_PERCENT_OF_REVENUE: "CapEx as % of Revenue"
  },

  CALCULATED_HEADERS: [
    "Fiscal Year",
    "Revenue Growth %",
    "Gross Margin %",
    "Operating Margin %",
    "Net Margin %",
    "Free Cash Flow Margin %",
    "CapEx as % of Revenue"
  ],

  TABLEAU_HEADERS: [
    "Fiscal Year",
    "Year Number",
    "Metric Category",
    "Metric Name",
    "Value",
    "Unit",
    "Source"
  ],

  RAW_METRICS_FOR_TABLEAU: [
    {
      column: "Revenue",
      category: "Income Statement",
      name: "Revenue",
      unit: "USD"
    },
    {
      column: "Cost of Revenue",
      category: "Income Statement",
      name: "Cost of Revenue",
      unit: "USD"
    },
    {
      column: "Gross Profit",
      category: "Income Statement",
      name: "Gross Profit",
      unit: "USD"
    },
    {
      column: "Operating Income",
      category: "Income Statement",
      name: "Operating Income",
      unit: "USD"
    },
    {
      column: "Net Income",
      category: "Income Statement",
      name: "Net Income",
      unit: "USD"
    },
    {
      column: "Operating Cash Flow",
      category: "Cash Flow",
      name: "Operating Cash Flow",
      unit: "USD"
    },
    {
      column: "CapEx",
      category: "Cash Flow",
      name: "CapEx",
      unit: "USD"
    },
    {
      column: "Free Cash Flow",
      category: "Cash Flow",
      name: "Free Cash Flow",
      unit: "USD"
    },
    {
      column: "Cash & Cash Equivalents",
      category: "Liquidity",
      name: "Cash & Cash Equivalents",
      unit: "USD"
    },
    {
      column: "Diluted EPS",
      category: "Per Share",
      name: "Diluted EPS",
      unit: "USD per share"
    }
  ],

  CALCULATED_METRICS_FOR_TABLEAU: [
    {
      column: "Revenue Growth %",
      category: "Calculated Metric",
      name: "Revenue Growth",
      unit: "Percent"
    },
    {
      column: "Gross Margin %",
      category: "Calculated Metric",
      name: "Gross Margin",
      unit: "Percent"
    },
    {
      column: "Operating Margin %",
      category: "Calculated Metric",
      name: "Operating Margin",
      unit: "Percent"
    },
    {
      column: "Net Margin %",
      category: "Calculated Metric",
      name: "Net Margin",
      unit: "Percent"
    },
    {
      column: "Free Cash Flow Margin %",
      category: "Calculated Metric",
      name: "Free Cash Flow Margin",
      unit: "Percent"
    },
    {
      column: "CapEx as % of Revenue",
      category: "Calculated Metric",
      name: "CapEx as % of Revenue",
      unit: "Percent"
    }
  ],

  FORMATS: {
    PERCENT: "0.00%"
  }
};
