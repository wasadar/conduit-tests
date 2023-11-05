# Cypress tests

Automated Tests for https://demo.realworld.io/#/ with Cypress.

## Table of Contents
1. [Summary](#summary)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)

## Summary
This repository contains automated tests for https://demo.realworld.io/#/ using the Playwright framework. The test results are reported using Allure reporting.

## Requirements
- Node.js (v14.17.3 or higher)
- Cypress (v13.4.0)


All dependencies except Node.js can be downloaded throught using this command after cloning repository:
    ```
    npm install
    ```

## Installation
1. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/conduit-tests
    ```

2. Navigate to the project directory.
    ```
    cd testing-redmine-s-site-with-playwright-framework
    ```

3. Install the required dependencies.
    ```
    npm install
    ```

## Usage
### Running Tests
To run the automated tests using Cypress, you can use the following npx commands:

- Run the automated tests using Cypress (headless mode):
    ```
    npx cypress run
    ```

- Run the automated tests using Cypress with a graphical user interface (UI):
    ```
    npx cypress open
    ```

Choose the appropriate script based on your testing needs.