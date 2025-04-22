# Core layer Stored Procedure Documentation 

## Overview
This document provides details about the stored procedure, including its purpose, usage, and execution process.

## General Purpose of the Layer
This layer is responsible for transforming prep data into core reporting and analysis.

## Script Scheduling
This section outlines the execution order of the SQL scripts required to generate the final outputs.

| Order | Script Name                                                | Purpose                                                                                      |
|-------|------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1     | sp_01_int_calendar                                         | -                                                                                            |
| 2     | sp_01_int_transactions                                     | Creates a single source of truth for Sales Orders, Return Authorizations, and Credit Memos. |
| 3     | sp_02_int_sales_order_to_target_agency_id                  | -                                                                                            |
| 4     | sp_02_int_transaction_documents_to_sales_order_mapping     | -                                                                                            |
| 5     | sp_03_int_arr_spread                                       | Creates the ARR spreading based on internal CP logic.                                        |
| 6     | sp_03_int_journals                                         | -                                                                                            |
| 7     | sp_04_int_arr_contractual                                  | -                                                                                            |
| 8     | sp_04_int_arr_revenues_transactional                       | -                                                                                            |
| 9     | sp_04_int_revenues_contractual                             | -                                                                                            |
| 10    | sp_04_int_revenues_others                                  | -                                                                                            |

## Script Details

| Script Name                                            | Source     | Target                                 | Summarisation Logic                                                                                                         |
|--------------------------------------------------------|------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| sp_01_int_calendar                              | -          | -                                      | -                                                                                                                           |
| sp_01_int_transactions                           | netsuite_transaction_part1 | int_transactions          | • Transaction Classification <br> • Join transactions with transaction line <br> • Data Cleaning & Preparation <br> • Get data of: <br> - Revenue class <br> - Item <br> - Product suite <br> - Product subtype <br> - Entity <br> - Customer |
| sp_02_int_sales_order_to_target_agency_id        | -          | -                                      | -                                                                                                                           |
| sp_02_int_transaction_documents_to_sales_order_mapping| -      | -                                      | -                                                                                                                           |
| sp_03_int_arr_spread                        | int_transactions | int_arr_spread | • Revenue Type Classification <br> • Sales Order Number Mapping <br> • Calculate ARR and MRR <br> • Find the spread dates, period, and amount |
| sp_03_int_journals| -          | -                                      | -                                                                                                                           |
| sp_04_int_arr_contractual                        | -          | -                                      | -                                                                                                                           |
