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

## 📂 Project Structure

The project is structured to be clean and scalable.

```
/
├── e2e/
│   ├── tests/                  # Test files containing the test scenarios
│   │   ├── Login.test.ts
│   │   ├── Products.test.ts
│   │   └── Cart.test.ts
│   ├── pages/                  # Page Object Model classes
│   │   ├── PageBase.ts         # Base class for common actions
│   │   ├── LoginPage.ts
│   │   ├── ProductsPage.ts
│   │   └── CartPage.ts
│   ├── data/                   # Externalized test data
│   │   └── testData.ts
│   ├── fixtures/               # Playwright test fixtures for Page Objects
│   │   └── fixtures.ts
│
├── playwright.config.ts        # Playwright configuration file
├── tsconfig.json               # TypeScript configuration file
└── package.json                # Project dependencies and scripts
```
