/**
 * InvoiceController
 *
 * @description :: Server-side logic for managing invoices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `InvoiceController.create()`
   */
  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },


  /**
   * `InvoiceController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  },


  /**
   * `InvoiceController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },

  getAll: function (req, res) {
    return res.json({
      invoices: [
        {
          _id: 0,
          amount: 3540,
          currency: "USD",
          paid: false,
          date: "3-21-2018",
          pdfPath: "/invoices/loan-laux-invoice-bfh6-j3kf-gjpe-56ju.pdf"
        },
        {
          _id: 1,
          amount: 9500,
          currency: "USD",
          paid: true,
          date: "3-11-2018",
          pdfPath: "/invoices/loan-laux-invoice-bfh6-gjpe-juw2-j3kf.pdf"
        },
        {
          _id: 2,
          amount: 2560,
          currency: "USD",
          paid: true,
          date: "2-28-2018",
          pdfPath: "/invoices/loan-laux-invoice-bfh6-hgb8-34hj-kdp8.pdf"
        },
        {
          _id: 3,
          amount: 4670,
          currency: "USD",
          paid: true,
          date: "2-20-2018",
          pdfPath: "/invoices/loan-laux-invoice-fghw-234e-kf23-fp0j.pdf"
        }
      ]
    });
  }
};

