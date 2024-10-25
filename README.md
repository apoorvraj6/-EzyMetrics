# Leads Management Dashboard

This is a full-featured leads management dashboard built with React. It includes a leads management interface where you can add, edit, delete, and filter leads, along with visual data representations (charts) and a report generation feature for exporting charts as a PDF.

## Features

- **Leads Management**: Add, edit, delete, and filter leads.
- **Charts**: Visualize lead data with line, bar, and pie charts.
- **Export Report**: Download a report section with all charts as a PDF.

## Technologies Used

- **React**: Frontend framework for building the UI.
- **Chart.js**: Library for creating interactive charts.
- **Lucide Icons**: For UI icons.
- **jsPDF**: For generating PDF exports.
- **html2canvas**: For rendering HTML elements to images in the PDF.

## Installation

To get started, clone the repository and install the dependencies.

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/leads-management-dashboard.git
    cd EZYMETRICS
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm run dev
    ```

The app will be running on `http://localhost:3000`.

## Usage

1. **Managing Leads**:
    - Use the "Add Lead" button to create a new lead. A modal will pop up where you can enter the lead details.
    - To edit or delete a lead, use the respective buttons in each row of the lead table.

2. **Filtering Leads**:
    - Filter leads by status using the dropdown at the top of the table.

3. **Viewing Charts**:
    - The dashboard shows line, bar, and pie charts to visualize leads data.
    - Charts are interactive and update based on the data in the leads management table.

4. **Exporting Reports**:
    - Go to the Reports section and click "Download PDF" to export the charts as a PDF report.

## File Structure

```plaintext
├── public
│   ├── index.html       # Main HTML file
│
├── src
│   ├── components
│   │   ├── Leads.js     # Leads management component
│   │   ├── Charts.js    # Contains line, bar, and pie charts
│   │   └── Report.js    # Report section for PDF export
│   ├── App.js           # Main app file
│   ├── index.js         # Entry point for React
│
├── README.md            # Project README file
└── package.json         # Project metadata and dependencies

