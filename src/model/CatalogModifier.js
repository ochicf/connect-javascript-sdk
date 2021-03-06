/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Money = require('./Money');




/**
 * The CatalogModifier model module.
 * @module model/CatalogModifier
 */

/**
 * Constructs a new <code>CatalogModifier</code>.
 * A modifier in the Catalog object model.
 * @alias module:model/CatalogModifier
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CatalogModifier</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogModifier} obj Optional instance to populate.
 * @return {module:model/CatalogModifier} The populated <code>CatalogModifier</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('price_money')) {
      obj['price_money'] = Money.constructFromObject(data['price_money']);
    }
    }
  return obj;
}

/**
 * The modifier's name. Searchable. This field has max length of 255 Unicode code points.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The modifier's price.
 * @member {module:model/Money} price_money
 */
exports.prototype['price_money'] = undefined;



module.exports = exports;



