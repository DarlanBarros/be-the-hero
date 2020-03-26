
exports.up = function(knex) {
  return knex.schema.table('incidents', function(table){
    table.dropColumn('whatsapp');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
