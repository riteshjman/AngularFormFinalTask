# Core layer Stored Procedure Documentation

## Overview
This document provides details about the stored procedures, including their purpose, usage, and execution process.

## General Purpose of the Layer
This layer is responsible for transforming prep data into core reporting and analysis.

## Script Scheduling
This section outlines the execution order of the SQL scripts required to generate the final outputs.

| Order | Script Name                                                | Purpose                                                                                         |
|-------|------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| 1     | sp_01_int_calendar                                         | This script creates a calendar table which has every month from 1950 to 2050                                                                                              |
| 2     | sp_01_int_transactions                                     | This script creates a SSOT for transaction data(Sales Order, Return Authorization and Credit Memos) from NS     |
| 3     | sp_02_int_sales_order_to_target_agency_id                  |  This script creates a table mapping sales order number to target agency id                                                                                             |
| 4     | sp_02_int_transaction_documents_to_sales_order_mapping     | This script creates the mapping between a transactio with a sales order where possible                                                                                              |
| 5     | sp_03_int_arr_spread                                       |This script creates the ARR spreading based on the logic used by CP internally                                           |
| 6     | sp_03_int_journals                                         | This script creates revenue recognized based on the journal entries                                                                                              |
| 7     | sp_04_int_arr_contractual                                  |  This script creates the contractual ARR based on the ARR spread                                                                                            |
| 8     | sp_04_int_arr_revenues_transactional                       | This script creates the transactional ARR and revenue for each customer at month level starting from Jan 2021                                                                                              |
| 9     | sp_04_int_revenues_contractual                             | This script creates the contractual revenue for each customer at month level starting from Jan 2021                                                                                              |
| 10    | sp_04_int_revenues_others                                  | This script creates the adjustment and other revenue at month level starting from Jan 2021                                                                                             |
| 11    | sp_02_int_transaction_documents_to_customer_ids                                  | This script creates a table mapping transactions to end user customer id                                                                                             |

## Script Details

| Order | Source                       | Target                             | Summarisation Logic                                                                                                                                                       | Filters Applied                     |
|-------|--------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| 1     | calendar_table                             | int_calendar                                   | Calculate the number of months between start_date and end_date                                                                                                                                                                       | -                                 |
| 2     | netsuite_transaction_part1     | int_transactions                       | • Transaction Classification <br> • Join transactions with transaction line <br> • Data Cleaning & Preparation <br> • Get data of: <br> - Revenue class <br> - Item <br> - Product suite <br> - Product subtype <br> - Entity <br> - Customer | • Transaction Type <br> • Status |
| 3     | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 4     | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 5     | int_transactions               | cp_dev_db.silver_core.int_arr_spread   | • Revenue Type Classification <br> • Sales Order Number Mapping <br> • Calculate ARR and MRR <br> • Find the spread dates, period, and amount                            | • Revenue Class <br> • Region     |
| 6     | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 7     | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 8     | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 9     | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 10    | -                              | -                                      | -                                                                                                                                                                         | -                                 |
| 11    | int_transactions                             | int_transaction_documents_to_customer_ids                                    | Distinct records                                                                                                                                                                         | -                                 |
