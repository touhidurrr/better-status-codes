export const StatusTexts = Object.freeze({
  100: "Continue",
  Continue: "Continue",
  CONTINUE: "Continue",

  101: "Switching Protocols",
  "Switching Protocols": "Switching Protocols",
  SWITCHING_PROTOCOLS: "Switching Protocols",

  102: "Processing",
  Processing: "Processing",
  PROCESSING: "Processing",

  103: "Early Hints",
  "Early Hints": "Early Hints",
  EARLY_HINTS: "Early Hints",

  200: "OK",
  OK: "OK",

  201: "Created",
  Created: "Created",
  CREATED: "Created",

  202: "Accepted",
  Accepted: "Accepted",
  ACCEPTED: "Accepted",

  203: "Non-Authoritative Information",
  "Non-Authoritative Information": "Non-Authoritative Information",
  NON_AUTHORITATIVE_INFORMATION: "Non-Authoritative Information",

  204: "No Content",
  "No Content": "No Content",
  NO_CONTENT: "No Content",

  205: "Reset Content",
  "Reset Content": "Reset Content",
  RESET_CONTENT: "Reset Content",

  206: "Partial Content",
  "Partial Content": "Partial Content",
  PARTIAL_CONTENT: "Partial Content",

  207: "Multi-Status",
  "Multi-Status": "Multi-Status",
  MULTI_STATUS: "Multi-Status",

  208: "Already Reported",
  "Already Reported": "Already Reported",
  ALREADY_REPORTED: "Already Reported",

  226: "IM Used",
  "IM Used": "IM Used",
  IM_USED: "IM Used",
  I_AM_USED: "IM Used",

  300: "Multiple Choices",
  "Multiple Choices": "Multiple Choices",
  MULTIPLE_CHOICES: "Multiple Choices",

  301: "Moved Permanently",
  "Moved Permanently": "Moved Permanently",
  MOVED_PERMANENTLY: "Moved Permanently",

  302: "Found",
  Found: "Found",
  FOUND: "Found",
  /**
   * @deprecated consider using `Found` instead
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
   */
  "Moved Temporarily": "Moved Temporarily",
  /**
   * @deprecated consider using `FOUND` instead
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
   */
  MOVED_TEMPORARILY: "Moved Temporarily",

  303: "See Other",
  "See Other": "See Other",
  SEE_OTHER: "See Other",

  304: "Not Modified",
  "Not Modified": "Not Modified",
  NOT_MODIFIED: "Not Modified",

  305: "Use Proxy",
  "Use Proxy": "Use Proxy",
  USE_PROXY: "Use Proxy",

  307: "Temporary Redirect",
  "Temporary Redirect": "Temporary Redirect",
  TEMPORARY_REDIRECT: "Temporary Redirect",

  308: "Permanent Redirect",
  "Permanent Redirect": "Permanent Redirect",
  PERMANENT_REDIRECT: "Permanent Redirect",

  400: "Bad Request",
  "Bad Request": "Bad Request",
  BAD_REQUEST: "Bad Request",

  401: "Unauthorized",
  Unauthorized: "Unauthorized",
  UNAUTHORIZED: "Unauthorized",

  402: "Payment Required",
  "Payment Required": "Payment Required",
  PAYMENT_REQUIRED: "Payment Required",

  403: "Forbidden",
  Forbidden: "Forbidden",
  FORBIDDEN: "Forbidden",

  404: "Not Found",
  "Not Found": "Not Found",
  NOT_FOUND: "Not Found",

  405: "Method Not Allowed",
  "Method Not Allowed": "Method Not Allowed",
  METHOD_NOT_ALLOWED: "Method Not Allowed",

  406: "Not Acceptable",
  "Not Acceptable": "Not Acceptable",
  NOT_ACCEPTABLE: "Not Acceptable",

  407: "Proxy Authentication Required",
  "Proxy Authentication Required": "Proxy Authentication Required",
  PROXY_AUTHENTICATION_REQUIRED: "Proxy Authentication Required",

  408: "Request Timeout",
  "Request Timeout": "Request Timeout",
  REQUEST_TIMEOUT: "Request Timeout",

  409: "Conflict",
  Conflict: "Conflict",
  CONFLICT: "Conflict",

  410: "Gone",
  Gone: "Gone",
  GONE: "Gone",

  411: "Length Required",
  "Length Required": "Length Required",
  LENGTH_REQUIRED: "Length Required",

  412: "Precondition Failed",
  "Precondition Failed": "Precondition Failed",
  PRECONDITION_FAILED: "Precondition Failed",

  413: "Payload Too Large",
  "Payload Too Large": "Payload Too Large",
  PAYLOAD_TOO_LARGE: "Payload Too Large",
  "Content Too Large": "Content Too Large",
  CONTENT_TOO_LARGE: "Content Too Large",
  /**
   * @deprecated consider using `Content Too Large` instead
   */
  "Request Too Long": "Request Entity Too Large",
  /**
   * @deprecated consider using `CONTENT_TOO_LARGE` instead
   */
  REQUEST_TOO_LONG: "Request Entity Too Large",
  /**
   * @deprecated consider using `CONTENT_TOO_LARGE` instead
   */
  "Request Entity Too Large": "Request Entity Too Large",
  /**
   * @deprecated consider using `CONTENT_TOO_LARGE` instead
   */
  REQUEST_ENTITY_TOO_LARGE: "Request Entity Too Large",

  414: "URI Too Long",
  "URI Too Long": "URI Too Long",
  URI_TOO_LONG: "URI Too Long",
  /**
   * @deprecated consider using `URI Too Long` instead
   */
  "Request-URI Too Long": "Request-URI Too Long",
  /**
   * @deprecated consider using `URI_TOO_LONG` instead
   */
  REQUEST_URI_TOO_LONG: "Request-URI Too Long",

  415: "Unsupported Media Type",
  "Unsupported Media Type": "Unsupported Media Type",
  UNSUPPORTED_MEDIA_TYPE: "Unsupported Media Type",

  416: "Range Not Satisfiable",
  "Range Not Satisfiable": "Range Not Satisfiable",
  RANGE_NOT_SATISFIABLE: "Range Not Satisfiable",
  /**
   * @deprecated consider using `Range Not Satisfiable` instead
   */
  "Requested Range Not Satisfiable": "Requested Range Not Satisfiable",
  /**
   * @deprecated consider using `RANGE_NOT_SATISFIABLE` instead
   */
  REQUESTED_RANGE_NOT_SATISFIABLE: "Requested Range Not Satisfiable",

  417: "Expectation Failed",
  "Expectation Failed": "Expectation Failed",
  EXPECTATION_FAILED: "Expectation Failed",

  418: "I'm a Teapot",
  "I'm a Teapot": "I'm a Teapot",
  IM_A_TEAPOT: "I'm a Teapot",
  I_AM_A_TEAPOT: "I'm a Teapot",

  421: "Misdirected Request",
  "Misdirected Request": "Misdirected Request",
  MISDIRECTED_REQUEST: "Misdirected Request",

  422: "Unprocessable Entity",
  "Unprocessable Entity": "Unprocessable Entity",
  UNPROCESSABLE_ENTITY: "Unprocessable Entity",

  423: "Locked",
  Locked: "Locked",
  LOCKED: "Locked",

  424: "Failed Dependency",
  "Failed Dependency": "Failed Dependency",
  FAILED_DEPENDENCY: "Failed Dependency",

  425: "Too Early",
  "Too Early": "Too Early",
  TOO_EARLY: "Too Early",

  426: "Upgrade Required",
  "Upgrade Required": "Upgrade Required",
  UPGRADE_REQUIRED: "Upgrade Required",

  428: "Precondition Required",
  "Precondition Required": "Precondition Required",
  PRECONDITION_REQUIRED: "Precondition Required",

  429: "Too Many Requests",
  "Too Many Requests": "Too Many Requests",
  TOO_MANY_REQUESTS: "Too Many Requests",

  431: "Request Header Fields Too Large",
  "Request Header Fields Too Large": "Request Header Fields Too Large",
  REQUEST_HEADER_FIELDS_TOO_LARGE: "Request Header Fields Too Large",

  451: "Unavailable For Legal Reasons",
  "Unavailable For Legal Reasons": "Unavailable For Legal Reasons",
  UNAVAILABLE_FOR_LEGAL_REASONS: "Unavailable For Legal Reasons",

  500: "Internal Server Error",
  "Internal Server Error": "Internal Server Error",
  INTERNAL_SERVER_ERROR: "Internal Server Error",

  501: "Not Implemented",
  "Not Implemented": "Not Implemented",
  NOT_IMPLEMENTED: "Not Implemented",

  502: "Bad Gateway",
  "Bad Gateway": "Bad Gateway",
  BAD_GATEWAY: "Bad Gateway",

  503: "Service Unavailable",
  "Service Unavailable": "Service Unavailable",
  SERVICE_UNAVAILABLE: "Service Unavailable",

  504: "Gateway Timeout",
  "Gateway Timeout": "Gateway Timeout",
  GATEWAY_TIMEOUT: "Gateway Timeout",

  505: "HTTP Version Not Supported",
  "HTTP Version Not Supported": "HTTP Version Not Supported",
  HTTP_VERSION_NOT_SUPPORTED: "HTTP Version Not Supported",

  506: "Variant Also Negotiates",
  "Variant Also Negotiates": "Variant Also Negotiates",
  VARIANT_ALSO_NEGOTIATES: "Variant Also Negotiates",

  507: "Insufficient Storage",
  "Insufficient Storage": "Insufficient Storage",
  INSUFFICIENT_STORAGE: "Insufficient Storage",
  /**
   * @deprecated consider using `Insufficient Storage` instead
   */
  "Insufficient Space on Resource": "Insufficient Space on Resource",
  /**
   * @deprecated consider using `INSUFFICIENT_STORAGE` instead
   */
  INSUFFICIENT_SPACE_ON_RESOURCE: "Insufficient Space on Resource",

  508: "Loop Detected",
  "Loop Detected": "Loop Detected",
  LOOP_DETECTED: "Loop Detected",

  509: "Bandwidth Limit Exceeded",
  "Bandwidth Limit Exceeded": "Bandwidth Limit Exceeded",
  BANDWIDTH_LIMIT_EXCEEDED: "Bandwidth Limit Exceeded",

  510: "Not Extended",
  "Not Extended": "Not Extended",
  NOT_EXTENDED: "Not Extended",

  511: "Network Authentication Required",
  "Network Authentication Required": "Network Authentication Required",
  NETWORK_AUTHENTICATION_REQUIRED: "Network Authentication Required",

  // Internet Information Services
  440: "Login Time-out",
  "Login Time-out": "Login Time-out",
  LOGIN_TIMEOUT: "Login Time-out",

  449: "Retry With",
  "Retry With": "Retry With",
  RETRY_WITH: "Retry With",

  // nginx
  444: "No Response",
  "No Response": "No Response",
  NO_RESPONSE: "No Response",

  494: "Request header too large",
  "Request Header Too Large": "Request header too large",
  REQUEST_HEADER_TOO_LARGE: "Request header too large",

  495: "SSL Certificate Error",
  "SSL Certificate Error": "SSL Certificate Error",
  SSL_CERTIFICATE_ERROR: "SSL Certificate Error",

  496: "SSL Certificate Required",
  "SSL Certificate Required": "SSL Certificate Required",
  SSL_CERTIFICATE_REQUIRED: "SSL Certificate Required",

  497: "HTTP Request Sent to HTTPS Port",
  "HTTP Request Sent to HTTPS Port": "HTTP Request Sent to HTTPS Port",
  HTTP_REQUEST_SENT_TO_HTTPS_PORT: "HTTP Request Sent to HTTPS Port",

  499: "Client Closed Request",
  "Client Closed Request": "Client Closed Request",
  CLIENT_CLOSED_REQUEST: "Client Closed Request",

  // Cloudflare
  520: "Web Server Returned an Unknown Error",
  "Web Server Returned an Unknown Error":
    "Web Server Returned an Unknown Error",
  WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR: "Web Server Returned an Unknown Error",

  521: "Web Server Is Down",
  "Web Server Is Down": "Web Server Is Down",
  WEB_SERVER_IS_DOWN: "Web Server Is Down",

  522: "Connection Timed Out",
  "Connection Timed Out": "Connection Timed Out",
  CONNECTION_TIMED_OUT: "Connection Timed Out",

  523: "Origin Is Unreachable",
  "Origin Is Unreachable": "Origin Is Unreachable",
  ORIGIN_IS_UNREACHABLE: "Origin Is Unreachable",

  524: "A Timeout Occurred",
  "A Timeout Occurred": "A Timeout Occurred",
  A_TIMEOUT_OCCURRED: "A Timeout Occurred",

  525: "SSL Handshake Failed",
  "SSL Handshake Failed": "SSL Handshake Failed",
  SSL_HANDSHAKE_FAILED: "SSL Handshake Failed",

  526: "Invalid SSL Certificate",
  "Invalid SSL Certificate": "Invalid SSL Certificate",
  INVALID_SSL_CERTIFICATE: "Invalid SSL Certificate",

  /**
   * @deprecated Made obsolete by Cloudflare.
   */
  527: "Railgun Error",
  /**
   * @deprecated Made obsolete by Cloudflare.
   */
  "Railgun Error": "Railgun Error",
  /**
   * @deprecated Made obsolete by Cloudflare.
   */
  RAILGUN_ERROR: "Railgun Error",

  // AWS Elastic Load Balancer
  561: "Unauthorized",

  // Non-Standard Codes
  420: "Method Failure",
  "Method Failure": "Method Failure",
  METHOD_FAILURE: "Method Failure",
});
