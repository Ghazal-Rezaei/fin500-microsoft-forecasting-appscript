# FIN 500 Microsoft Forecasting Data Preparation Script

This repository contains Google Apps Script files used to prepare financial data for the FIN 500 Week 3 AI-Based Forecasting Team Project.

## Purpose

The script reads annual Microsoft financial data from the `Raw_Financials_Wide` tab, calculates derived financial metrics in the `Calculated_Metrics` tab, and creates a Tableau-ready long-format dataset in the `Tableau_Long_Format` tab.

## Input Sheet

Required tab: `Raw_Financials_Wide`

Required columns:

- Fiscal Year
- Revenue
- Cost of Revenue
- Gross Profit
- Operating Income
- Net Income
- Operating Cash Flow
- CapEx
- Free Cash Flow
- Cash & Cash Equivalents
- Diluted EPS
- Source

## Output Sheets

The script generates or updates:

- `Calculated_Metrics`
- `Tableau_Long_Format`

## Main Function

Run:

```javascript
runFullForecastingDataPrep()
