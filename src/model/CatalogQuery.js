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
var CatalogQueryExact = require('./CatalogQueryExact');
var CatalogQueryItemsForModifierList = require('./CatalogQueryItemsForModifierList');
var CatalogQueryItemsForTax = require('./CatalogQueryItemsForTax');
var CatalogQueryPrefix = require('./CatalogQueryPrefix');
var CatalogQueryRange = require('./CatalogQueryRange');
var CatalogQuerySortedAttribute = require('./CatalogQuerySortedAttribute');
var CatalogQueryText = require('./CatalogQueryText');




/**
 * The CatalogQuery model module.
 * @module model/CatalogQuery
 * @version 2.5.1
 */

/**
 * Constructs a new <code>CatalogQuery</code>.
 * A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest). Only one query field may be present.  Where an attribute name is required, it should be specified as the name of any field marked \&quot;searchable\&quot; from the structured data types for the desired result object type(s) ([CatalogItem](#type-catalogitem), [CatalogItemVariation](#type-catalogitemvariation), [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax), [CatalogDiscount](#type-catalogdiscount), [CatalogModifierList](#type-catalogmodifierlist), [CatalogModifier](#type-catalogmodifier)).  For example, a query that should return Items may specify attribute names from any of the searchable fields of the [CatalogItem](#type-catalogitem) data type, namely &#x60;\&quot;name\&quot;&#x60;, &#x60;\&quot;description\&quot;&#x60;, and &#x60;\&quot;abbreviation\&quot;&#x60;.
 * @alias module:model/CatalogQuery
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>CatalogQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQuery} obj Optional instance to populate.
 * @return {module:model/CatalogQuery} The populated <code>CatalogQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('sorted_attribute_query')) {
      obj['sorted_attribute_query'] = CatalogQuerySortedAttribute.constructFromObject(data['sorted_attribute_query']);
    }
      if (data.hasOwnProperty('exact_query')) {
      obj['exact_query'] = CatalogQueryExact.constructFromObject(data['exact_query']);
    }
      if (data.hasOwnProperty('prefix_query')) {
      obj['prefix_query'] = CatalogQueryPrefix.constructFromObject(data['prefix_query']);
    }
      if (data.hasOwnProperty('range_query')) {
      obj['range_query'] = CatalogQueryRange.constructFromObject(data['range_query']);
    }
      if (data.hasOwnProperty('text_query')) {
      obj['text_query'] = CatalogQueryText.constructFromObject(data['text_query']);
    }
      if (data.hasOwnProperty('items_for_tax_query')) {
      obj['items_for_tax_query'] = CatalogQueryItemsForTax.constructFromObject(data['items_for_tax_query']);
    }
      if (data.hasOwnProperty('items_for_modifier_list_query')) {
      obj['items_for_modifier_list_query'] = CatalogQueryItemsForModifierList.constructFromObject(data['items_for_modifier_list_query']);
    }
    }
  return obj;
}

/**
 * A query that returns all objects, sorted by the given attribute.
 * @member {module:model/CatalogQuerySortedAttribute} sorted_attribute_query
 */
exports.prototype['sorted_attribute_query'] = undefined;
/**
 * A query that returns only objects for which the given (string-valued) attribute has the given case-insensitive value.
 * @member {module:model/CatalogQueryExact} exact_query
 */
exports.prototype['exact_query'] = undefined;
/**
 * A query that returns only objects for which the given (string-valued) attribute has the given case-insensitive prefix.
 * @member {module:model/CatalogQueryPrefix} prefix_query
 */
exports.prototype['prefix_query'] = undefined;
/**
 * A query that returns only objects for which the given (integer-valued) attribute lies in the given range.
 * @member {module:model/CatalogQueryRange} range_query
 */
exports.prototype['range_query'] = undefined;
/**
 * A query that returns only objects whose searchable attributes contain all of the given keywords as prefixes. For example, if a [CatalogItem](#type-catalogitem) contains attributes `{\"name\": \"t-shirt\"}` and `{\"description\": \"Small, Purple\"}`, it will be matched by the query `{\"keywords\": [\"shirt\", \"sma\", \"purp\"]}`.
 * @member {module:model/CatalogQueryText} text_query
 */
exports.prototype['text_query'] = undefined;
/**
 * A query that returns all [CatalogItem](#type-catalogitem)s that have any of the given [CatalogTax](#type-catalogtax)es enabled.
 * @member {module:model/CatalogQueryItemsForTax} items_for_tax_query
 */
exports.prototype['items_for_tax_query'] = undefined;
/**
 * A query that returns all [CatalogItem](#type-catalogitem)s that have any of the given [CatalogModifierList](#type-catalogmodifierlist)s enabled.
 * @member {module:model/CatalogQueryItemsForModifierList} items_for_modifier_list_query
 */
exports.prototype['items_for_modifier_list_query'] = undefined;



module.exports = exports;


