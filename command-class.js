const path = require('path');
const readXlsxFile = require('read-excel-file/node');

function getCommandClasses() {
    const schema = {
        'Command Class name': {
          prop: 'name',
          type: String
        },
        'Identifier': {
          prop: 'class',
          type: String
        },
        'Category': {
          prop: 'category',
          type: String
        },
        'status': {
          prop: 'status',
          type: String
        },
        'value': {
          prop: 'value',
          type: String
        }
    };

    const xslx = path.resolve(__dirname, './SDS13548-List-of-defined-Z-Wave-Command-Classes.xlsx');
    return readXlsxFile(xslx, { sheet: 'Command Class', schema }).then(({ rows, errors }) => {
        return rows.map(row => {
            row.valueDec = parseInt(row.value, 16);
            return row;
        });
    });
}

module.exports = {
    getCommandClasses
};
