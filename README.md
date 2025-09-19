# Yassir Playwright End-to-End Test Automation Framework

This project is a robust and scalable end-to-end test automation framework built with **Playwright** and **TypeScript**. It is designed to test the SauceDemo e-commerce application.

## ✨ Key Features

  * **Page Object Model (POM):** The framework uses the POM design pattern to separate test logic from page locators and actions, making tests more readable and maintainable.
  * **Centralized Browser Actions:** A `PageBase` class encapsulates common browser interactions with built-in error handling, reducing code duplication and increasing test stability.
  * **Data-Driven Testing:** All test data (users, products, etc.) is externalized into a dedicated `testData.ts` file, making the framework easy to manage and update without modifying test files.
  * **Type Safety:** Built with TypeScript, the framework ensures type safety, catching potential errors during development and providing a better developer experience.
  * **Fixture-Based Testing:** It leverages Playwright's fixture system to automatically instantiate Page Objects for each test, which simplifies test setup and keeps test files clean.

-----

## ⚙️ Prerequisites

  * **Node.js**: Make sure you have Node.js and npm installed on your machine.
  * **Git**: A Git client is required to clone the repository.

-----

## 🚀 Getting Started

### 1\. Clone the Repository

```bash
git clone https://github.com/mostafa97-debug/YassirUI.git
cd YassirUI
```

### 2\. Install Dependencies

Install all the required dependencies, including Playwright, TypeScript, and the testing types.

```bash
npm install
```

### 3\. Run the Tests

Use the following command to run the test suite. By default, it runs on Chromium.

```bash
npx playwright test
```

#### **Run tests on specific browsers:**

You can specify a project to run tests on a particular browser (e.g., Firefox or WebKit) as configured in `playwright.config.ts`.

```bash
npx playwright test --project=firefox
```

#### **Run a single test file:**

To run a specific test file, provide its path.

```bash
npx playwright test e2e/tests/Login.test.ts
```

### 4\. View the Test Report

After the test run completes, you can view the detailed HTML report.

```bash
npx playwright show-report
```

-----

## 🔄 CI/CD with GitHub Actions

This project includes a **GitHub Actions workflow** to automate test runs on every push to the `main` branch and on all pull requests. This ensures that new code changes do not introduce regressions.

### **How it Works**

The workflow is configured in `.github/workflows/playwright.yml`. It performs the following steps:

1.  **Checkout Code**: Checks out the repository code.
2.  **Setup Node.js**: Installs a specific version of Node.js.
3.  **Install Dependencies**: Installs the project's dependencies.
4.  **Install Playwright Browsers**: Installs the browsers required by Playwright (e.g., Chromium, Firefox, WebKit).
5.  **Run Tests**: Executes the test suite using `npx playwright test`.

### **Workflow File**

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: 18
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```
