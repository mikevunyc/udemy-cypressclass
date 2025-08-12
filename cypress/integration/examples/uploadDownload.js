describe('Upload-download testing', () => {
    it("verify excel upload download", () => {
        const replaceNum = 350;
        const searchTextInput = "Kivi";
        const FILEPATH = Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx"
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
        cy.get("#downloadButton").click();

        cy.task('writeExcelTest', { searchText: searchTextInput, replaceText: 350, change: { rowChange: 0, colChange: 2 }, filePath: FILEPATH });
        cy.get("#fileinput").selectFile(FILEPATH);
        cy.contains(searchTextInput).parent().parent().find("#cell-4-undefined").should('have.text', replaceNum);

    })
})