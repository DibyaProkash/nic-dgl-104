/**
 *  Traditional way
 * */

// function addNewRow() {
//     const row = document.createElement("tr")
//     // Company
//     const companyCell = document.createElement("td")
//     const companyText = document.createTextNode("Facade")
//     companyCell.appendChild(companyText)

//     // Contact
//     const contactCell = document.createElement("td")
//     const contactText = document.createTextNode("Phat Tran")
//     contactCell.appendChild(contactText)

//     // Country
//     const countryCell = document.createElement("td")
//     const countryText = document.createTextNode("Vietnam")
//     countryCell.appendChild(countryText)

//     // Attach cells to row
//     row.appendChild(companyCell)
//     row.appendChild(contactCell)
//     row.appendChild(countryCell)

//     // Add row to table
//     const tbodyElement = document.getElementsByTagName("tbody")[0]
//     tbodyElement.appendChild(row)
// }

// addNewRow()

/**
 *  Refactor
 * */

// function createCell(text) {
//     const tdElement = document.createElement("td")
//     const textNode = document.createTextNode(text)
//     tdElement.appendChild(textNode)
//     return tdElement
// }

// function createNewRow(companyText, contactText, countryText) {
//     const row = document.createElement("tr")

//     // Cells
//     const companyCell = createCell(companyText)
//     const contactCell = createCell(contactText)
//     const countryCell = createCell(countryText)

//     // Attach cells to row
//     row.appendChild(companyCell)
//     row.appendChild(contactCell)
//     row.appendChild(countryCell)

//     return row
// }

// const row = createNewRow("Facade", "Phat Tran", "Vietnam")
// // Add row to table
// const tbodyElement = document.getElementsByTagName("tbody")[0]
// tbodyElement.appendChild(row)

/**
 *  Implementation of Facade
 * */

class Table {
    constructor(table) {
        // Check if the table already existed
        if (table) {
            this._ = table
        } else {
            // Create new one
            this._ = document.createElement("table")
            document.getElementsByTagName("body")[0].appendChild(this._)
        }
    }

    createCell(content) {
        const cell = document.createElement("td")
        const textNode = document.createTextNode(content)
        cell.appendChild(textNode)

        return cell
    }

    addRow(cells) {
        const row = document.createElement("tr")

        cells.forEach((cell) => {
            const cellElement = this.createCell(cell)
            row.appendChild(cellElement)
        })

        // Add row to table
        document.getElementsByTagName("tbody")[0].appendChild(row)

        return row
    }
}

// Mockup data
const rows = [["Facade", "Phat Tran", "Vietnam"]]

// Create table instance
const table = new Table(document.getElementsByTagName("table")[0])

// Add rows to table
rows.forEach((row) => table.addRow(row))
