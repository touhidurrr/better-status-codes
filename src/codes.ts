export const StatusCodes = Object.freeze({
  100: 100,
  Continue: 100,
  CONTINUE: 100,

  101: 101,
  "Switching Protocols": 101,
  SWITCHING_PROTOCOLS: 101,

  102: 102,
  Processing: 102,
  PROCESSING: 102,

  103: 103,
  "Early Hints": 103,
  EARLY_HINTS: 103,

  200: 200,
  OK: 200,

  201: 201,
  Created: 201,
  CREATED: 201,

  202: 202,
  Accepted: 202,
  ACCEPTED: 202,

  203: 203,
  "Non-Authoritative Information": 203,
  NON_AUTHORITATIVE_INFORMATION: 203,

  204: 204,
  "No Content": 204,
  NO_CONTENT: 204,

  205: 205,
  "Reset Content": 205,
  RESET_CONTENT: 205,

  206: 206,
  "Partial Content": 206,
  PARTIAL_CONTENT: 206,

  207: 207,
  "Multi-Status": 207,
  MULTI_STATUS: 207,

  208: 208,
  "Already Reported": 208,
  ALREADY_REPORTED: 208,

  226: 226,
  "IM Used": 226,
  IM_USED: 226,
  I_AM_USED: 226,

  300: 300,
  "Multiple Choices": 300,
  MULTIPLE_CHOICES: 300,

  301: 301,
  "Moved Permanently": 301,
  MOVED_PERMANENTLY: 301,

  302: 302,
  Found: 302,
  FOUND: 302,
  "Moved Temporarily": 302,
  MOVED_TEMPORARILY: 302,

  303: 303,
  "See Other": 303,
  SEE_OTHER: 303,

  304: 304,
  "Not Modified": 304,
  NOT_MODIFIED: 304,

  305: 305,
  "Use Proxy": 305,
  USE_PROXY: 305,

  307: 307,
  "Temporary Redirect": 307,
  TEMPORARY_REDIRECT: 307,

  308: 308,
  "Permanent Redirect": 308,
  PERMANENT_REDIRECT: 308,

  400: 400,
  "Bad Request": 400,
  BAD_REQUEST: 400,

  401: 401,
  Unauthorized: 401,
  UNAUTHORIZED: 401,

  402: 402,
  "Payment Required": 402,
  PAYMENT_REQUIRED: 402,

  403: 403,
  Forbidden: 403,
  FORBIDDEN: 403,

  404: 404,
  "Not Found": 404,
  NOT_FOUND: 404,

  405: 405,
  "Method Not Allowed": 405,
  METHOD_NOT_ALLOWED: 405,

  406: 406,
  "Not Acceptable": 406,
  NOT_ACCEPTABLE: 406,

  407: 407,
  "Proxy Authentication Required": 407,
  PROXY_AUTHENTICATION_REQUIRED: 407,

  408: 408,
  "Request Timeout": 408,
  REQUEST_TIMEOUT: 408,

  409: 409,
  Conflict: 409,
  CONFLICT: 409,

  410: 410,
  Gone: 410,
  GONE: 410,

  411: 411,
  "Length Required": 411,
  LENGTH_REQUIRED: 411,

  412: 412,
  "Precondition Failed": 412,
  PRECONDITION_FAILED: 412,

  413: 413,
  "Payload Too Large": 413,
  PAYLOAD_TOO_LARGE: 413,
  "Content Too Large": 413,
  CONTENT_TOO_LARGE: 413,
  /**
   * @deprecated consider using `Content Too Large` instead
   */
  "Request Too Long": 413,
  /**
   * @deprecated consider using `CONTENT_TOO_LARGE` instead
   */
  REQUEST_TOO_LONG: 413,
  /**
   * @deprecated consider using `CONTENT_TOO_LARGE` instead
   */
  "Request Entity Too Large": 413,
  /**
   * @deprecated consider using `CONTENT_TOO_LARGE` instead
   */
  REQUEST_ENTITY_TOO_LARGE: 413,

  414: 414,
  "URI Too Long": 414,
  URI_TOO_LONG: 414,
  /**
   * @deprecated consider using `URI Too Long` instead
   */
  "Request-URI Too Long": 414,
  /**
   * @deprecated consider using `URI_TOO_LONG` instead
   */
  REQUEST_URI_TOO_LONG: 414,

  415: 415,
  "Unsupported Media Type": 415,
  UNSUPPORTED_MEDIA_TYPE: 415,

  416: 416,
  "Range Not Satisfiable": 416,
  RANGE_NOT_SATISFIABLE: 416,
  /**
   * @deprecated consider using `Range Not Satisfiable` instead
   */
  "Requested Range Not Satisfiable": 416,
  /**
   * @deprecated consider using `RANGE_NOT_SATISFIABLE` instead
   */
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,

  417: 417,
  "Expectation Failed": 417,
  EXPECTATION_FAILED: 417,

  418: 418,
  "I'm a Teapot": 418,
  IM_A_TEAPOT: 418,
  I_AM_A_TEAPOT: 418,

  421: 421,
  "Misdirected Request": 421,
  MISDIRECTED_REQUEST: 421,

  422: 422,
  "Unprocessable Entity": 422,
  UNPROCESSABLE_ENTITY: 422,

  423: 423,
  Locked: 423,
  LOCKED: 423,

  424: 424,
  "Failed Dependency": 424,
  FAILED_DEPENDENCY: 424,

  425: 425,
  "Too Early": 425,
  TOO_EARLY: 425,

  426: 426,
  "Upgrade Required": 426,
  UPGRADE_REQUIRED: 426,

  428: 428,
  "Precondition Required": 428,
  PRECONDITION_REQUIRED: 428,

  429: 429,
  "Too Many Requests": 429,
  TOO_MANY_REQUESTS: 429,

  431: 431,
  "Request Header Fields Too Large": 431,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,

  451: 451,
  "Unavailable For Legal Reasons": 451,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  500: 500,
  "Internal Server Error": 500,
  INTERNAL_SERVER_ERROR: 500,

  501: 501,
  "Not Implemented": 501,
  NOT_IMPLEMENTED: 501,

  502: 502,
  "Bad Gateway": 502,
  BAD_GATEWAY: 502,

  503: 503,
  "Service Unavailable": 503,
  SERVICE_UNAVAILABLE: 503,

  504: 504,
  "Gateway Timeout": 504,
  GATEWAY_TIMEOUT: 504,

  505: 505,
  "HTTP Version Not Supported": 505,
  HTTP_VERSION_NOT_SUPPORTED: 505,

  506: 506,
  "Variant Also Negotiates": 506,
  VARIANT_ALSO_NEGOTIATES: 506,

  507: 507,
  "Insufficient Storage": 507,
  INSUFFICIENT_STORAGE: 507,
  /**
   * @deprecated consider using `Insufficient Storage` instead
   */
  "Insufficient Space on Resource": 507,
  /**
   * @deprecated consider using `INSUFFICIENT_STORAGE` instead
   */
  INSUFFICIENT_SPACE_ON_RESOURCE: 507,

  508: 508,
  "Loop Detected": 508,
  LOOP_DETECTED: 508,

  509: 509,
  "Bandwidth Limit Exceeded": 509,
  BANDWIDTH_LIMIT_EXCEEDED: 509,

  510: 510,
  "Not Extended": 510,
  NOT_EXTENDED: 510,

  511: 511,
  "Network Authentication Required": 511,
  NETWORK_AUTHENTICATION_REQUIRED: 511,

  // Internet Information Services
  440: 440,
  "Login Time-out": 440,
  LOGIN_TIMEOUT: 440,

  449: 449,
  "Retry With": 449,
  RETRY_WITH: 449,

  // nginx
  444: 444,
  "No Response": 444,
  NO_RESPONSE: 444,

  494: 494,
  "Request Header Too Large": 494,
  REQUEST_HEADER_TOO_LARGE: 494,

  495: 495,
  "SSL Certificate Error": 495,
  SSL_CERTIFICATE_ERROR: 495,

  496: 496,
  "SSL Certificate Required": 496,
  SSL_CERTIFICATE_REQUIRED: 496,

  497: 497,
  "HTTP Request Sent to HTTPS Port": 497,
  HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,

  499: 499,
  "Client Closed Request": 499,
  CLIENT_CLOSED_REQUEST: 499,

  // Cloudflare
  520: 520,
  "Web Server Returned an Unknown Error": 520,
  WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR: 520,

  521: 521,
  "Web Server Is Down": 521,
  WEB_SERVER_IS_DOWN: 521,

  522: 522,
  "Connection Timed Out": 522,
  CONNECTION_TIMED_OUT: 522,

  523: 523,
  "Origin Is Unreachable": 523,
  ORIGIN_IS_UNREACHABLE: 523,

  524: 524,
  "A Timeout Occurred": 524,
  A_TIMEOUT_OCCURRED: 524,

  525: 525,
  "SSL Handshake Failed": 525,
  SSL_HANDSHAKE_FAILED: 525,

  526: 526,
  "Invalid SSL Certificate": 526,
  INVALID_SSL_CERTIFICATE: 526,

  /**
   * @deprecated Made obsolete by Cloudflare.
   */
  527: 527,
  /**
   * @deprecated Made obsolete by Cloudflare.
   */
  "Railgun Error": 527,
  /**
   * @deprecated Made obsolete by Cloudflare.
   */
  RAILGUN_ERROR: 527,

  // AWS Elastic Load Balancer
  561: 561,

  // Non-Standard Codes
  420: 420,
  "Method Failure": 420,
  METHOD_FAILURE: 420,
});
