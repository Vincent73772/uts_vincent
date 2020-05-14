'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    
    app.route('/')
   .get(jsonku.index);

   app.route('/tampilsparepartdata')
    .get(jsonku.tampildatasparepart);

    app.route('/tampil/:id')
    .get(jsonku.tampildatasparepartid);

    app.route('/tampilmontirdata')
    .get(jsonku.tampildatamontir);

    app.route('/tampilmontir/:id')
    .get(jsonku.tampildatamontirid);

    app.route('/tambahsparepartdata')
    .post(jsonku.tambahsparepart);

    app.route('/ubahsparepartdata')
    .put(jsonku.ubahsparepart);

    app.route('/hapussparepartdata')
    .delete(jsonku.hapusSparepart);

    app.route('/tambahservicedata')
    .post(jsonku.tambahservice);

    app.route('/tampilservicedata')
    .get(jsonku.tampilservice);

    app.route('/tambahmontirdata')
    .post(jsonku.tambahmontir);

    app.route('/tambahuserdata')
    .post(jsonku.tambahuser);

    app.route('/tambahleveldata')
    .post(jsonku.tambahlevel);

    app.route('/ubahmontirdata')
    .put(jsonku.ubahmontir);

    app.route('/ubahuserdata')
    .put(jsonku.ubahuser);

    app.route('/ubahleveldata')
    .put(jsonku.ubahlevel);

    app.route('/ubahservicedata')
    .put(jsonku.ubahservice);

    app.route('/hapusmontirdata')
    .delete(jsonku.hapusMontir);

    app.route('/hapususerdata')
    .delete(jsonku.hapususer);

    app.route('/hapusleveldata')
    .delete(jsonku.hapuslevel);

    app.route('/hapusservicedata')
    .delete(jsonku.hapusservice);
}
   