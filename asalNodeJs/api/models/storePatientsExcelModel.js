'use strict';
module.exports = function(app) {
  var storePatientsExcel = require('../controllers/storePatientsExcelController');

  // todoList Routes
  app.route('/storePatients')
    .post(storePatientsExcel.store_in_db);
};
