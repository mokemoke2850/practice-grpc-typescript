// source: sample.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.sample.Sample', null, global);
goog.exportSymbol('proto.sample.Sample.MessageCase', null, global);
goog.exportSymbol('proto.sample.Sample.SampleEnum', null, global);
goog.exportSymbol('proto.sample.SampleRequest', null, global);
goog.exportSymbol('proto.sample.SampleResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sample.SampleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sample.SampleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sample.SampleRequest.displayName = 'proto.sample.SampleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sample.SampleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sample.SampleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sample.SampleResponse.displayName = 'proto.sample.SampleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sample.Sample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sample.Sample.oneofGroups_);
};
goog.inherits(proto.sample.Sample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sample.Sample.displayName = 'proto.sample.Sample';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sample.SampleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sample.SampleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sample.SampleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sample.SampleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sample.SampleRequest}
 */
proto.sample.SampleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sample.SampleRequest;
  return proto.sample.SampleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sample.SampleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sample.SampleRequest}
 */
proto.sample.SampleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sample.SampleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sample.SampleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sample.SampleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sample.SampleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sample.SampleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sample.SampleRequest} returns this
 */
proto.sample.SampleRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sample.SampleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sample.SampleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sample.SampleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sample.SampleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sample: (f = msg.getSample()) && proto.sample.Sample.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sample.SampleResponse}
 */
proto.sample.SampleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sample.SampleResponse;
  return proto.sample.SampleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sample.SampleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sample.SampleResponse}
 */
proto.sample.SampleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sample.Sample;
      reader.readMessage(value,proto.sample.Sample.deserializeBinaryFromReader);
      msg.setSample(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sample.SampleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sample.SampleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sample.SampleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sample.SampleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSample();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sample.Sample.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sample sample = 1;
 * @return {?proto.sample.Sample}
 */
proto.sample.SampleResponse.prototype.getSample = function() {
  return /** @type{?proto.sample.Sample} */ (
    jspb.Message.getWrapperField(this, proto.sample.Sample, 1));
};


/**
 * @param {?proto.sample.Sample|undefined} value
 * @return {!proto.sample.SampleResponse} returns this
*/
proto.sample.SampleResponse.prototype.setSample = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sample.SampleResponse} returns this
 */
proto.sample.SampleResponse.prototype.clearSample = function() {
  return this.setSample(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sample.SampleResponse.prototype.hasSample = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sample.Sample.oneofGroups_ = [[14,15]];

/**
 * @enum {number}
 */
proto.sample.Sample.MessageCase = {
  MESSAGE_NOT_SET: 0,
  ONE: 14,
  OTHER: 15
};

/**
 * @return {proto.sample.Sample.MessageCase}
 */
proto.sample.Sample.prototype.getMessageCase = function() {
  return /** @type {proto.sample.Sample.MessageCase} */(jspb.Message.computeOneofCase(this, proto.sample.Sample.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sample.Sample.prototype.toObject = function(opt_includeInstance) {
  return proto.sample.Sample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sample.Sample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sample.Sample.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isbool: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    dublicatedField: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sampleMapMap: (f = msg.getSampleMapMap()) ? f.toObject(includeInstance, undefined) : [],
    sampleDuration: (f = msg.getSampleDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    one: jspb.Message.getFieldWithDefault(msg, 14, ""),
    other: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sample.Sample}
 */
proto.sample.Sample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sample.Sample;
  return proto.sample.Sample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sample.Sample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sample.Sample}
 */
proto.sample.Sample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbool(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDublicatedField(value);
      break;
    case 6:
      var value = msg.getSampleMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 9:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setSampleDuration(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOne(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setOther(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sample.Sample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sample.Sample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sample.Sample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sample.Sample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsbool();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDublicatedField();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSampleMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSampleDuration();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sample.Sample.SampleEnum = {
  UNKNOWN: 0,
  TEST1: 1,
  TEST2: 2,
  TEST3: 3
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.sample.Sample.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sample.Sample.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isBool = 3;
 * @return {boolean}
 */
proto.sample.Sample.prototype.getIsbool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.setIsbool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string dublicated_field = 4;
 * @return {string}
 */
proto.sample.Sample.prototype.getDublicatedField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.setDublicatedField = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> sample_map = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.sample.Sample.prototype.getSampleMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.clearSampleMapMap = function() {
  this.getSampleMapMap().clear();
  return this;};


/**
 * optional google.protobuf.Duration sample_duration = 9;
 * @return {?proto.google.protobuf.Duration}
 */
proto.sample.Sample.prototype.getSampleDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.sample.Sample} returns this
*/
proto.sample.Sample.prototype.setSampleDuration = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.clearSampleDuration = function() {
  return this.setSampleDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sample.Sample.prototype.hasSampleDuration = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sample.Sample.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sample.Sample} returns this
*/
proto.sample.Sample.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sample.Sample.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string one = 14;
 * @return {string}
 */
proto.sample.Sample.prototype.getOne = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.setOne = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.sample.Sample.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.clearOne = function() {
  return jspb.Message.setOneofField(this, 14, proto.sample.Sample.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sample.Sample.prototype.hasOne = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string other = 15;
 * @return {string}
 */
proto.sample.Sample.prototype.getOther = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.setOther = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.sample.Sample.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sample.Sample} returns this
 */
proto.sample.Sample.prototype.clearOther = function() {
  return jspb.Message.setOneofField(this, 15, proto.sample.Sample.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sample.Sample.prototype.hasOther = function() {
  return jspb.Message.getField(this, 15) != null;
};


goog.object.extend(exports, proto.sample);
