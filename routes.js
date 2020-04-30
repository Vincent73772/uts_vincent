'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    
    app.route('/')
   .get(jsonku.index);

   app.route('/tampil')
    .get(jsonku.tampildatasparepart);

    app.route('/tampil/:id')
    .get(jsonku.tampildatasparepartid);

    app.route('/tampilmontir')
    .get(jsonku.tampildatamontir);

    app.route('/tampilmontir/:id')
    .get(jsonku.tampildatamontirid);

    app.route('/tambahsparepart')
    .post(jsonku.tambahsparepart);

    app.route('/ubahsparepart')
    .put(jsonku.ubahsparepart);

    app.route('/hapussparepart')
    .delete(jsonku.hapusSparepart);

    app.route('/tambahservice')
    .post(jsonku.tambahservice);

    app.route('/tampilservice')
    .get(jsonku.tampilservice);

    app.route('/tambahmontir')
    .post(jsonku.tambahmontir);

    app.route('/tambahuser')
    .post(jsonku.tambahuser);

    app.route('/tambahlevel')
    .post(jsonku.tambahlevel);

    app.route('/ubahmontir')
    .put(jsonku.ubahmontir);

    app.route('/ubahuser')
    .put(jsonku.ubahuser);

    app.route('/ubahlevel')
    .put(jsonku.ubahlevel);
}
   