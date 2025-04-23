# Gold Layer Stored Procedure Documentation

## Overview
This document provides details about the stored procedures, including their purpose, usage, and execution process.

## General Purpose of the Layer
This layer is responsible for transforming SSOT data into the Datamart layer. These procedures and tables work together to generate data for various KPIs such as revenue calculations, customer lifecycle management, and product performance. They ensure the accuracy and consistency of the data used in reporting and analysis.

## Script Scheduling
This section outlines the execution order of the SQL scripts.

| Order | Script Name                              | Purpose                                                                                                         |
|-------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1     | sp_dim_calendar                          | Creates a dimension calendar table that maintains calendar-related data to support time-based analysis.       |
| 2     | sp_dim_customer                          | Populates dimension data related to customers.                                                                 |
| 3     | sp_dim_other                             | Creates a table to store miscellaneous dimension data.                                                         |
| 4     | sp_dim_product                           | Populates a dimension table with product-related data.                                                         |
| 5     | sp_fact_arr_bridge                       | Creates the ARR bridge fact table.                                                                             |
| 6     | sp_fact_arr_bridge_parent_product_suite  | Creates a fact table for parent product suite ARR bridge calculations.                                         |
| 7     | sp_fact_arr_bridge_parent                | Creates a fact table for parent ARR bridge calculations.                                                       |
| 8     | sp_fact_cross_holding                    | Creates a fact table that stores data related to cross-holdings.                                               |

## Script Details
This section outlines details of the SQL scripts used to generate the final outputs.

| OrderID | Source                          | Target                                | Summarisation Logic                                                                                                                                           | Filters Applied                                                                                                 |
|---------|----------------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 1       | calendar                        | dim_calendar                          | • Calculate month and year <br> • Type casting                                                                                                                | -                                                                                                                |
| 2       | customer                        | dim_customer                          | • Calculate `customer_cohort_year`, `parent_customer_cohort_month`, `parent_customer_cohort_year` <br> • Join with `customer_contract`                        | -                                                                                                                |
| 3       | other                           | dim_other                             | -                                                                                                                                                            | -                                                                                                                |
| 4       | product                         | dim_product                           | -                                                                                                                                                            | -                                                                                                                |
| 5       | delta_revenue                   | fact_arr_bridge                       | • Assign `period_type` <br> • Join with `monthly_revenue`, `period_revenue`                                                                                   | -                                                                                                                |
| 6       | fact_arr_bridge                 | fact_arr_bridge_parent_product_suite | • Calculate `bop_arr`, `downsell`, `churn`, `upsell`, `grr`, `nrr`, `product_suite_cross_sell`, `new_parent_customer`, `eop_arr`, `product_suite_churn` <br> • Join with `dim_customer`, `dim_product` | -                                                                                                                |
| 7       | fact_arr_bridge_parent_product_suite | fact_arr_bridge_parent            | • Calculate `bop_arr`, `downsell`, `parent_customer_churn`, `upsell`, `new_parent_customer`, `eop_arr`, `grr`, `nrr`                                         | -                                                                                                                |
| 8       | revenue                         | fact_cross_holding                    | • Join with `gold_data_mart.dim_product` <br> • Self join with `revenue` <br> • `r1.arr <> 0 AND (r1.revenue_type = '1' OR r1.revenue_type = 'Recurring')`   | -                                                                                                                |
