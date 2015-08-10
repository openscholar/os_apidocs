define({ "api": [
  {
    "type": "get",
    "url": "api/login-token",
    "title": "Access Token",
    "version": "0.1.0",
    "name": "Access_token",
    "group": "Basic",
    "description": "<p>Access token uses us for request which done outside the Drupal installation. A good example will be a mobile application try to access content which not accessible to anonymous users. Since the request is done outside the Drupal installation we need a way to verify which user involve in the request.</p> <p>The example below will show you how you can generate access token for a user. Once the request succeeded you will get back a JSON with three important parameters:</p> <ul> <li><code>access_token</code> -  This is the token which represent the user in any rest request.</li> <li><code>expires_in</code> - Amount of seconds in which the access token is valid.</li> <li><code>refresh_token</code> - Once the the amount of seconds reached to maximum the refresh token isn't not valid any more. You'll need to ask for a new one using the refresh token.</li> </ul> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.get(backend + 'login-token', {\n  headers: {'Authorization': 'Basic ' + Base64.encode($scope.user.name + ':' + $scope.user.pass)}\n}).success(function(data) {\n  localStorageService.set('access_token', data.access_token);\n});",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header example:",
          "content": "{\n  \"Authorization\": \"Basic YWRtaW46YWRtaW4=\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  access_token: \"Y3wQua-qFY-mukslgPaLqKdNmlGdBQK4dly-UhlJcYk\",\n  type: \"Bearer\",\n  expires_in: 86400,\n  refresh_token: \"xRP-nnKA05GGsN-jr80Z_hfPHqrkpyjAtevDSeTLbYU\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Failed response:",
          "content": "{\n  type: \"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.2\",\n  title: \"Bad credentials\",\n  status: 401,\n  detail: \"Unauthorized.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/login-token",
    "title": "Access Token",
    "version": "0.1.0",
    "name": "Access_token",
    "group": "Basic",
    "description": "<p>Access token uses us for request which done outside the Drupal installation. A good example will be a mobile application try to access content which not accessible to anonymous users. Since the request is done outside the Drupal installation we need a way to verify which user involve in the request.</p> <p>The example below will show you how you can generate access token for a user. Once the request succeeded you will get back a JSON with three important parameters:</p> <ul> <li><code>access_token</code> -  This is the token which represent the user in any rest request.</li> <li><code>expires_in</code> - Amount of seconds in which the access token is valid.</li> <li><code>refresh_token</code> - Once the the amount of seconds reached to maximum the refresh token isn't not valid any more. You'll need to ask for a new one using the refresh token.</li> </ul> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.get(backend + 'login-token', {\n  headers: {'Authorization': 'Basic ' + Base64.encode($scope.user.name + ':' + $scope.user.pass)}\n}).success(function(data) {\n  localStorageService.set('access_token', data.access_token);\n});",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header example:",
          "content": "{\n  \"Authorization\": \"Basic YWRtaW46YWRtaW4=\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  access_token: \"Y3wQua-qFY-mukslgPaLqKdNmlGdBQK4dly-UhlJcYk\",\n  type: \"Bearer\",\n  expires_in: 86400,\n  refresh_token: \"xRP-nnKA05GGsN-jr80Z_hfPHqrkpyjAtevDSeTLbYU\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Failed response:",
          "content": "{\n  type: \"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.2\",\n  title: \"Bad credentials\",\n  status: 401,\n  detail: \"Unauthorized.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/session/token",
    "title": "X CSRF token",
    "version": "0.1.0",
    "name": "Basic",
    "group": "Basic",
    "description": "<p>Unlike the access token situation, when running a REST request inside a Drupal installation RESTful will validate the available cookies. You'll need to pass X-CSRF-TOKEN header for each request. This will make sure that the user's cookie was not hijacked.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"X-CSRF-Token\": \"pgaSEyNaDELTBuPXy-Jpx_6I-mrEruxH3_-BEcMtnU0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/session/token",
    "title": "X CSRF token",
    "version": "0.1.0",
    "name": "Basic",
    "group": "Basic",
    "description": "<p>Unlike the access token situation, when running a REST request inside a Drupal installation RESTful will validate the available cookies. You'll need to pass X-CSRF-TOKEN header for each request. This will make sure that the user's cookie was not hijacked.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"X-CSRF-Token\": \"pgaSEyNaDELTBuPXy-Jpx_6I-mrEruxH3_-BEcMtnU0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/",
    "title": "End points",
    "version": "0.1.0",
    "name": "End_points",
    "group": "Basic",
    "description": "<p>One of RESTful good features is the API discovery. This end point will provide for you all the available end points and their description. Very handy during development.</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/"
      }
    ],
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/",
    "title": "End points",
    "version": "0.1.0",
    "name": "End_points",
    "group": "Basic",
    "description": "<p>One of RESTful good features is the API discovery. This end point will provide for you all the available end points and their description. Very handy during development.</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/"
      }
    ],
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "delete",
    "url": "api/bio/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Biography",
    "description": "<p>Delete a biography entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "delete",
    "url": "api/bio/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Biography",
    "description": "<p>Delete a biography entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "get",
    "url": "api/bio/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Biography",
    "description": "<p>Consume biography content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/bio/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/bio/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Biography",
    "description": "<p>Consume biography content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/bio/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/bio/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Biography",
    "description": "<p>Update a biography entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "patch",
    "url": "api/bio/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Biography",
    "description": "<p>Update a biography entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "post",
    "url": "api/bio",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Biography",
    "description": "<p>Create a biography entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "post",
    "url": "api/bio",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Biography",
    "description": "<p>Create a biography entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The biography ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "delete",
    "url": "api/blog/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Blog",
    "description": "<p>Delete a blog entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "delete",
    "url": "api/blog/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Blog",
    "description": "<p>Delete a blog entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "api/blog/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Blog",
    "description": "<p>Consume blog content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/blog/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/blog/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Blog",
    "description": "<p>Consume blog content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/blog/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/blog/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Blog",
    "description": "<p>Update a blog entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "patch",
    "url": "api/blog/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Blog",
    "description": "<p>Update a blog entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "post",
    "url": "api/blog",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Blog",
    "description": "<p>Create a blog entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "post",
    "url": "api/blog",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Blog",
    "description": "<p>Create a blog entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The blog ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "delete",
    "url": "api/book/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Book",
    "description": "<p>Delete a book entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book"
  },
  {
    "type": "delete",
    "url": "api/book/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Book",
    "description": "<p>Delete a book entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book"
  },
  {
    "type": "get",
    "url": "api/book/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Book",
    "description": "<p>Consume book content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/book/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/book/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Book",
    "description": "<p>Consume book content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/book/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/book/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Book",
    "description": "<p>Update a book entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book"
  },
  {
    "type": "patch",
    "url": "api/book/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Book",
    "description": "<p>Update a book entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "api/book",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Book",
    "description": "<p>Create a book entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "api/book",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Book",
    "description": "<p>Create a book entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The book ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "Book"
  },
  {
    "type": "delete",
    "url": "api/cv/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "CV",
    "description": "<p>Delete a cv entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "delete",
    "url": "api/cv/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "CV",
    "description": "<p>Delete a cv entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "get",
    "url": "api/cv/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "CV",
    "description": "<p>Consume cv content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/cv/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/cv/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "CV",
    "description": "<p>Consume cv content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/cv/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/cv/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "CV",
    "description": "<p>Update a cv entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "patch",
    "url": "api/cv/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "CV",
    "description": "<p>Update a cv entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "post",
    "url": "api/cv",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "CV",
    "description": "<p>Create a cv entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "post",
    "url": "api/cv",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "CV",
    "description": "<p>Create a cv entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The cv ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "delete",
    "url": "api/class/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Class",
    "description": "<p>Delete a class entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "delete",
    "url": "api/class/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Class",
    "description": "<p>Delete a class entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "api/class/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Class",
    "description": "<p>Consume class content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/class/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/class/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Class",
    "description": "<p>Consume class content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/class/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/class/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Class",
    "description": "<p>Update a class entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "patch",
    "url": "api/class/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Class",
    "description": "<p>Update a class entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "post",
    "url": "api/class",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Class",
    "description": "<p>Create a class entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "post",
    "url": "api/class",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Class",
    "description": "<p>Create a class entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "delete",
    "url": "api/class_material/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Class_material",
    "description": "<p>Delete a class material entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class material ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "delete",
    "url": "api/class_material/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Class_material",
    "description": "<p>Delete a class material entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class material ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "get",
    "url": "api/class_material/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Class_material",
    "description": "<p>Consume class material content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "parent",
            "description": "<p>The class which the current object belong to.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/class_material/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/class_material/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Class_material",
    "description": "<p>Consume class material content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "parent",
            "description": "<p>The class which the current object belong to.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/class_material/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/class_material/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Class_material",
    "description": "<p>Update a class material entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "patch",
    "url": "api/class_material/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Class_material",
    "description": "<p>Update a class material entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "post",
    "url": "api/class_material",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Class_material",
    "description": "<p>Create a class material entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "post",
    "url": "api/class_material",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Class_material",
    "description": "<p>Create a class material entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The class ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "delete",
    "url": "api/event/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Event",
    "description": "<p>Delete a event entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "api/event/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Event",
    "description": "<p>Delete a event entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "api/event/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Event",
    "description": "<p>Consume event content.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "start_date",
            "description": "<p>Event start date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "end_date",
            "description": "<p>Event end date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "field_event_registration",
            "description": "<p>The event type. Use event_signup_simple. Populate with [registration_type: event_signup_simple]</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/event/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/event/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Event",
    "description": "<p>Consume event content.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "start_date",
            "description": "<p>Event start date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "end_date",
            "description": "<p>Event end date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "field_event_registration",
            "description": "<p>The event type. Use event_signup_simple. Populate with [registration_type: event_signup_simple]</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/event/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/event/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Event",
    "description": "<p>Update a event entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "patch",
    "url": "api/event/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Event",
    "description": "<p>Update a event entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "api/event",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Event",
    "description": "<p>Create a event entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "api/event",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Event",
    "description": "<p>Create a event entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "api/faq/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "FAQ",
    "description": "<p>Delete a faq entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "delete",
    "url": "api/faq/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "FAQ",
    "description": "<p>Delete a faq entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "get",
    "url": "api/faq/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "FAQ",
    "description": "<p>Consume faq content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/faq/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/faq/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "FAQ",
    "description": "<p>Consume faq content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/faq/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/faq/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "FAQ",
    "description": "<p>Update a faq entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "patch",
    "url": "api/faq/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "FAQ",
    "description": "<p>Update a faq entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "post",
    "url": "api/faq",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "FAQ",
    "description": "<p>Create a faq entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "post",
    "url": "api/faq",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "FAQ",
    "description": "<p>Create a faq entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The faq ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "delete",
    "url": "api/feed/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Feed",
    "description": "<p>Delete a feed entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "delete",
    "url": "api/feed/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Feed",
    "description": "<p>Delete a feed entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "get",
    "url": "api/feed/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Feed",
    "description": "<p>Consume feed content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/feed/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/feed/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Feed",
    "description": "<p>Consume feed content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/feed/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/feed/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Feed",
    "description": "<p>Update a feed entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "patch",
    "url": "api/feed/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Feed",
    "description": "<p>Update a feed entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "post",
    "url": "api/feed",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Feed",
    "description": "<p>Create a feed entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "post",
    "url": "api/feed",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Feed",
    "description": "<p>Create a feed entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The feed ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "delete",
    "url": "api/files/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Files",
    "description": "<p>Delete a file entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The file ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files"
  },
  {
    "type": "delete",
    "url": "api/files/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Files",
    "description": "<p>Delete a file entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The file ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "api/files/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Files",
    "description": "<p>Consume files.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The file ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>File mame.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Size in bytes.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mimetype",
            "description": "<p>File mimetype.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>The direct URL.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>file type: image, document, audio etc. etc.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>File mame.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "timestamp",
            "description": "<p>The timestamp when the file copied to the server.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "preview",
            "description": "<p>The html representation of the file.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "Terms",
            "description": "<p>Terms attached to the file.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/files/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/files/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Files",
    "description": "<p>Consume files.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The file ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>File mame.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Size in bytes.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mimetype",
            "description": "<p>File mimetype.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>The direct URL.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>file type: image, document, audio etc. etc.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>File mame.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "timestamp",
            "description": "<p>The timestamp when the file copied to the server.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "preview",
            "description": "<p>The html representation of the file.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "Terms",
            "description": "<p>Terms attached to the file.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/files/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/bio/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Files",
    "description": "<p>Update a file entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>The file object. Look on the post documentation.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files"
  },
  {
    "type": "patch",
    "url": "api/bio/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Files",
    "description": "<p>Update a file entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>The file object. Look on the post documentation.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "api/files",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Files",
    "description": "<p>Upload a file.</p> <p>Unlike other data we can send via REST request files are a different animal. You can use for example extension such as <a href=\"https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm\">Postman</a> or other tools to send to the file. The most important thing is that the file object will be attached to the file property in the request.</p> <p>Once the request passed, you will get back a result representing the file object in OpenScholar's database. In order to attach files to content you'll need to pass the file ID from the file you uploaded.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>The file object. Look on the post documentation.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": [\n   {\n     \"id\": \"14\",\n     \"label\": \"picture0010.jpg\",\n     \"self\": \"http://localhost/openscholar/api/v1.0/files/14\",\n     \"size\": \"83830\",\n     \"mimetype\": \"image/png\",\n     \"url\": \"http://localhost/openscholar/sites/default/files/picture0010.jpg\",\n     \"type\": \"image\",\n     \"name\": \"picture0010.jpg\",\n     \"timestamp\": \"83830\",\n     \"description\": null,\n     \"image_alt\": null,\n     \"image_title\": null,\n     \"preview\": \"field_view\",\n     \"terms\": null\n   }\n ],\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.post(backend + 'files', {\n  data: {\n    file: fileObject\n  },\n  headers: {\n    \"X-CSRF-Token\": \"pgaSEyNaDELTBuPXy-Jpx_6I-mrEruxH3_-BEcMtnU0\"\n  }\n});",
        "type": "json"
      }
    ],
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "api/files",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Files",
    "description": "<p>Upload a file.</p> <p>Unlike other data we can send via REST request files are a different animal. You can use for example extension such as <a href=\"https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm\">Postman</a> or other tools to send to the file. The most important thing is that the file object will be attached to the file property in the request.</p> <p>Once the request passed, you will get back a result representing the file object in OpenScholar's database. In order to attach files to content you'll need to pass the file ID from the file you uploaded.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>The file object. Look on the post documentation.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": [\n   {\n     \"id\": \"14\",\n     \"label\": \"picture0010.jpg\",\n     \"self\": \"http://localhost/openscholar/api/v1.0/files/14\",\n     \"size\": \"83830\",\n     \"mimetype\": \"image/png\",\n     \"url\": \"http://localhost/openscholar/sites/default/files/picture0010.jpg\",\n     \"type\": \"image\",\n     \"name\": \"picture0010.jpg\",\n     \"timestamp\": \"83830\",\n     \"description\": null,\n     \"image_alt\": null,\n     \"image_title\": null,\n     \"preview\": \"field_view\",\n     \"terms\": null\n   }\n ],\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.post(backend + 'files', {\n  data: {\n    file: fileObject\n  },\n  headers: {\n    \"X-CSRF-Token\": \"pgaSEyNaDELTBuPXy-Jpx_6I-mrEruxH3_-BEcMtnU0\"\n  }\n});",
        "type": "json"
      }
    ],
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/files/1.0/OsFilesResource.class.php",
    "groupTitle": "Files"
  },
  {
    "type": "delete",
    "url": "api/group/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Group",
    "description": "<p>Delete a group entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "api/group/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Group",
    "description": "<p>Delete a group entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "api/group",
    "title": "Get",
    "version": "0.1.0",
    "name": "Group",
    "group": "Group",
    "description": "<p>OpenScholar uses <a href=\"http://drupal.org/project/og\">Organic Groups</a> in order to have content attached to vsite. Actually, each vsite is a group. This give us the options to override site wide settings(roles and permission).</p> <p>There are 3 types of groups: personal, project and department when personal can have sub-sites.</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/group"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "users",
            "description": "<p>The group users.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "users.id",
            "description": "<p>The user ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "users.name",
            "description": "<p>The user name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "preset",
            "description": "<p>The group preset.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "purl",
            "description": "<p>The group persistent URL.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The group type(i.e node type).</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "api/group",
    "title": "Get",
    "version": "0.1.0",
    "name": "Group",
    "group": "Group",
    "description": "<p>OpenScholar uses <a href=\"http://drupal.org/project/og\">Organic Groups</a> in order to have content attached to vsite. Actually, each vsite is a group. This give us the options to override site wide settings(roles and permission).</p> <p>There are 3 types of groups: personal, project and department when personal can have sub-sites.</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/group"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "users",
            "description": "<p>The group users.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "users.id",
            "description": "<p>The user ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "users.name",
            "description": "<p>The user name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "preset",
            "description": "<p>The group preset.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "purl",
            "description": "<p>The group persistent URL.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The group type(i.e node type).</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "patch",
    "url": "api/group/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Group",
    "description": "<p>Update a group entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "patch",
    "url": "api/group/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Group",
    "description": "<p>Update a group entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "api/group",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Group",
    "description": "<p>Create a group entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "api/group",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Group",
    "description": "<p>Create a group entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/group/1.0/GroupNodeRestfulBase.class.php",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "api/layouts",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Layout",
    "description": "<p>Delete a box from a layout.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>Identifier of the layout object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "delta",
            "description": "<p>The delta of the block.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n   vsite: 2,\n   object_id: os_pages-page-582:reaction:block,\n   delta: boxes-1419335380\n}",
        "type": "js"
      }
    ],
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout"
  },
  {
    "type": "delete",
    "url": "api/layouts",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Layout",
    "description": "<p>Delete a box from a layout.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>Identifier of the layout object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "delta",
            "description": "<p>The delta of the block.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n   vsite: 2,\n   object_id: os_pages-page-582:reaction:block,\n   delta: boxes-1419335380\n}",
        "type": "js"
      }
    ],
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout"
  },
  {
    "type": "get",
    "url": "api/layouts/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Layout",
    "description": "<p>Get a layout structure from a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The override type. Default is OG.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The override identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_type",
            "description": "<p>The object type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>Teh override definitions.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/layouts/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/layouts/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Layout",
    "description": "<p>Get a layout structure from a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The override type. Default is OG.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The override identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_type",
            "description": "<p>The object type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>Teh override definitions.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/layouts/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/layouts",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Layout",
    "description": "<p>Update a layout structure in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The identifier of the layout object.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>Identifier of the layout object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "blocks",
            "description": "<p>Array of blocks.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "vsite: 2,\nobject_id: os_pages-page-581,\nblocks: [\n  os_search_db-site-search: [\n    region: \"sidebar_first\"\n  ]\n]",
        "type": "js"
      }
    ],
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout"
  },
  {
    "type": "patch",
    "url": "api/layouts",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Layout",
    "description": "<p>Update a layout structure in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The identifier of the layout object.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>Identifier of the layout object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "blocks",
            "description": "<p>Array of blocks.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "vsite: 2,\nobject_id: os_pages-page-581,\nblocks: [\n  os_search_db-site-search: [\n    region: \"sidebar_first\"\n  ]\n]",
        "type": "js"
      }
    ],
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout"
  },
  {
    "type": "post",
    "url": "api/layouts",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Layout",
    "description": "<p>Create a layout in a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>Identifier of the layout object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "blocks",
            "description": "<p>Array of blocks.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.module",
            "description": "<p>The name of the module which provide the block.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.delta",
            "description": "<p>The delta of the box.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.region",
            "description": "<p>The region In the body.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.weight",
            "description": "<p>The weight of the module. Will affect the order of the blocks in the same region.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "blocks.status",
            "description": "<p>Determine if the block will be display or not.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "vsite: 2,\nobject_id: os_pages-page-581,\nboxes: [\n  boxes-1419335380: [\n    module: \"boxes\",\n    delta: \"1419335380\",\n    region: \"sidebar_second\",\n    weight: 2,\n    status: 0\n  ]\n]",
        "type": "js"
      }
    ],
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout"
  },
  {
    "type": "post",
    "url": "api/layouts",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Layout",
    "description": "<p>Create a layout in a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>Identifier of the layout object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "blocks",
            "description": "<p>Array of blocks.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.module",
            "description": "<p>The name of the module which provide the block.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.delta",
            "description": "<p>The delta of the box.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.region",
            "description": "<p>The region In the body.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "blocks.weight",
            "description": "<p>The weight of the module. Will affect the order of the blocks in the same region.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "blocks.status",
            "description": "<p>Determine if the block will be display or not.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "vsite: 2,\nobject_id: os_pages-page-581,\nboxes: [\n  boxes-1419335380: [\n    module: \"boxes\",\n    delta: \"1419335380\",\n    region: \"sidebar_second\",\n    weight: 2,\n    status: 0\n  ]\n]",
        "type": "js"
      }
    ],
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_layout/1.0/OsRestfulLayout.class.php",
    "groupTitle": "Layout"
  },
  {
    "type": "delete",
    "url": "api/link/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Link",
    "description": "<p>Delete a link entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "delete",
    "url": "api/link/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Link",
    "description": "<p>Delete a link entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "get",
    "url": "api/link/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Link",
    "description": "<p>Consume link content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/link/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/link/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Link",
    "description": "<p>Consume link content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/link/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/link/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Link",
    "description": "<p>Update a Link entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "patch",
    "url": "api/link/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Link",
    "description": "<p>Update a Link entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "post",
    "url": "api/link",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Link",
    "description": "<p>Update a link entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "post",
    "url": "api/link",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Link",
    "description": "<p>Update a link entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The link ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "delete",
    "url": "api/media_gallery/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Media_gallery",
    "description": "<p>Delete a media gallery entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "delete",
    "url": "api/media_gallery/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Media_gallery",
    "description": "<p>Delete a media gallery entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "get",
    "url": "api/media_gallery/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Media_gallery",
    "description": "<p>Consume media gallery content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rows",
            "description": "<p>Number of rows for the images.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "columns",
            "description": "<p>Number of columns for the images.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/media_gallery/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/media_gallery/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Media_gallery",
    "description": "<p>Consume media gallery content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rows",
            "description": "<p>Number of rows for the images.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "columns",
            "description": "<p>Number of columns for the images.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/media_gallery/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/media_gallery/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Media_gallery",
    "description": "<p>Update a media gallery entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "patch",
    "url": "api/media_gallery/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Media_gallery",
    "description": "<p>Update a media gallery entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "post",
    "url": "api/media_gallery",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Media_gallery",
    "description": "<p>Create a media gallery entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "post",
    "url": "api/media_gallery",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Media_gallery",
    "description": "<p>Create a media gallery entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media gallery ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "delete",
    "url": "api/news/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "News",
    "description": "<p>Delete a news entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "api/news/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "News",
    "description": "<p>Delete a news entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "api/news/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "News",
    "description": "<p>Consume news content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "date",
            "description": "<p>The date which the news created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "photo",
            "description": "<p>The date which the news created.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/news/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/news/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "News",
    "description": "<p>Consume news content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>The attached files.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "date",
            "description": "<p>The date which the news created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "photo",
            "description": "<p>The date which the news created.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/news/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/news/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "News",
    "description": "<p>Update a news entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "patch",
    "url": "api/news/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "News",
    "description": "<p>Update a news entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "api/news",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "News",
    "description": "<p>Create a news entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "api/news",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "News",
    "description": "<p>Create a news entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "api/og_vocab/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Og_Vocabulary",
    "description": "<p>Delete an og vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The og vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary"
  },
  {
    "type": "delete",
    "url": "api/og_vocab/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Og_Vocabulary",
    "description": "<p>Delete an og vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The og vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary"
  },
  {
    "type": "get",
    "url": "api/og_vocab/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Og_Vocabulary",
    "description": "<p>Consume og vocabulary content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the entity</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The OG vocab ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "vid",
            "description": "<p>The real vocabulary ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "entity_type",
            "description": "<p>The entity type the og vocab relate to.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bundle",
            "description": "<p>The bundle which the vocab relate to.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "field_name",
            "description": "<p>The field name which contains the reference to the terms.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "settings",
            "description": "<p>Settings for the OG vocabulary.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Bool</p> ",
            "optional": false,
            "field": "settings.required",
            "description": "<p>Determine if the field is required.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settings.widget_type",
            "description": "<p>The widget of the vocabulary when editing entities.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "settings.cardinality",
            "description": "<p>Number of terms the user can reference. -1 for unlimited.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/og_vocab/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/og_vocab/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Og_Vocabulary",
    "description": "<p>Consume og vocabulary content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the entity</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The OG vocab ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "vid",
            "description": "<p>The real vocabulary ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "entity_type",
            "description": "<p>The entity type the og vocab relate to.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bundle",
            "description": "<p>The bundle which the vocab relate to.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "field_name",
            "description": "<p>The field name which contains the reference to the terms.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "settings",
            "description": "<p>Settings for the OG vocabulary.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Bool</p> ",
            "optional": false,
            "field": "settings.required",
            "description": "<p>Determine if the field is required.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settings.widget_type",
            "description": "<p>The widget of the vocabulary when editing entities.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "settings.cardinality",
            "description": "<p>Number of terms the user can reference. -1 for unlimited.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/og_vocab/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/og_vocab/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Og_Vocabulary",
    "description": "<p>Update an og vocabulary.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The entity type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bundle",
            "description": "<p>The entity bundle</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The og vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary"
  },
  {
    "type": "patch",
    "url": "api/og_vocab/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Og_Vocabulary",
    "description": "<p>Update an og vocabulary.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The entity type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bundle",
            "description": "<p>The entity bundle</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The og vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary"
  },
  {
    "type": "post",
    "url": "api/og_vocab",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Og_Vocabulary",
    "description": "<p>Create an og vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The entity type</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bundle",
            "description": "<p>The entity bundle</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The entity ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary"
  },
  {
    "type": "post",
    "url": "api/og_vocab",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Og_Vocabulary",
    "description": "<p>Create an og vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The entity type</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bundle",
            "description": "<p>The entity bundle</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The entity ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/og_vocab/1.0/OsOgVocab.class.php",
    "groupTitle": "Og_Vocabulary"
  },
  {
    "type": "delete",
    "url": "api/page/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Page",
    "description": "<p>Delete a Page entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
  },
  {
    "type": "delete",
    "url": "api/page/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Page",
    "description": "<p>Delete a Page entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "api/page/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Page",
    "description": "<p>Consume page content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "path",
            "description": "<p>The page of the page.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/page/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/page/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Page",
    "description": "<p>Consume page content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "path",
            "description": "<p>The page of the page.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/page/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/page/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Page",
    "description": "<p>Update a Page entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
  },
  {
    "type": "patch",
    "url": "api/page/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Page",
    "description": "<p>Update a Page entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "api/page",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Page",
    "description": "<p>Create a Page entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "api/page",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Page",
    "description": "<p>Create a Page entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The page ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
  },
  {
    "type": "delete",
    "url": "api/person/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Person",
    "description": "<p>Delete a person entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "api/person/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Person",
    "description": "<p>Delete a person entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "api/person/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Person",
    "description": "<p>Consume person content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Person address.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "middle_name",
            "description": "<p>Middle name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "prefix",
            "description": "<p>Full name prefix.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "professional_title",
            "description": "<p>List of professional titles.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/person/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/person/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Person",
    "description": "<p>Consume person content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Person address.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "middle_name",
            "description": "<p>Middle name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "prefix",
            "description": "<p>Full name prefix.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "professional_title",
            "description": "<p>List of professional titles.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/person/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/person/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Person",
    "description": "<p>Update a person entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person"
  },
  {
    "type": "patch",
    "url": "api/person/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Person",
    "description": "<p>Update a person entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person"
  },
  {
    "type": "post",
    "url": "api/person",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Person",
    "description": "<p>Create a person entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person"
  },
  {
    "type": "post",
    "url": "api/person",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Person",
    "description": "<p>Create a person entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The person ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/person/1.0/PersonNodeRestfulBase.class.php",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "api/presentation/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Presentation",
    "description": "<p>Delete a Presentation entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation"
  },
  {
    "type": "delete",
    "url": "api/presentation/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Presentation",
    "description": "<p>Delete a Presentation entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation"
  },
  {
    "type": "get",
    "url": "api/presentation/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Presentation",
    "description": "<p>Consume presentation content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Date",
            "description": "<p>The presentation date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the presentation.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/presentation/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/presentation/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Presentation",
    "description": "<p>Consume presentation content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Date",
            "description": "<p>The presentation date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the presentation.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/presentation/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/presentation/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Presentation",
    "description": "<p>Update a Presentation entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation"
  },
  {
    "type": "patch",
    "url": "api/presentation/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Presentation",
    "description": "<p>Update a Presentation entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation"
  },
  {
    "type": "post",
    "url": "api/presentation",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Presentation",
    "description": "<p>Update a Presentation entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation"
  },
  {
    "type": "post",
    "url": "api/presentation",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Presentation",
    "description": "<p>Update a Presentation entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The presentation ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/presentation/1.0/PresentationNodeRestfulBase.class.php",
    "groupTitle": "Presentation"
  },
  {
    "type": "delete",
    "url": "api/biblio/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Publication",
    "description": "<p>Delete a Publication entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  },
  {
    "type": "delete",
    "url": "api/biblio/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Publication",
    "description": "<p>Delete a Publication entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "api/biblio/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Publication",
    "description": "<p>Consume publications content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/biblio/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/biblio/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Publication",
    "description": "<p>Consume publications content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/biblio/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/biblio/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Publication",
    "description": "<p>Update a Publication entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  },
  {
    "type": "patch",
    "url": "api/biblio/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Publication",
    "description": "<p>Update a Publication entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  },
  {
    "type": "post",
    "url": "api/biblio",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Publication",
    "description": "<p>Create a Publication entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  },
  {
    "type": "post",
    "url": "api/biblio",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Publication",
    "description": "<p>Create a Publication entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>List of file IDs.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The publication type ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  },
  {
    "type": "post",
    "url": "api/roles/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Roles",
    "description": "<p>Create a layout in a vsite.</p> ",
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "api/roles/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Roles",
    "description": "<p>Create a layout in a vsite.</p> ",
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "api/roles?vsite=:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Roles",
    "description": "<p>Consume user roles inside the group.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rid",
            "description": "<p>Role's ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "gid",
            "description": "<p>Group ID. Not in use.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_bundle",
            "description": "<p>Group type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_type",
            "description": "<p>Group Entity.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/roles?vsite=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/roles?vsite=:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Roles",
    "description": "<p>Consume user roles inside the group.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rid",
            "description": "<p>Role's ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "gid",
            "description": "<p>Group ID. Not in use.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_bundle",
            "description": "<p>Group type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_type",
            "description": "<p>Group Entity.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/roles?vsite=:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/roles/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Roles",
    "description": "<p>Create a layout in a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rid",
            "description": "<p>Role's ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "gid",
            "description": "<p>Group ID. Not in use.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_bundle",
            "description": "<p>Group type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_type",
            "description": "<p>Group Entity.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles"
  },
  {
    "type": "patch",
    "url": "api/roles/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Roles",
    "description": "<p>Create a layout in a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rid",
            "description": "<p>Role's ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "gid",
            "description": "<p>Group ID. Not in use.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_bundle",
            "description": "<p>Group type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_type",
            "description": "<p>Group Entity.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "api/roles?vsite=:id",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Roles",
    "description": "<p>Create a layout in a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rid",
            "description": "<p>Role's ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "gid",
            "description": "<p>Group ID. Not in use.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_bundle",
            "description": "<p>Group type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_type",
            "description": "<p>Group Entity.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "api/roles?vsite=:id",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Roles",
    "description": "<p>Create a layout in a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "rid",
            "description": "<p>Role's ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "gid",
            "description": "<p>Group ID. Not in use.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_bundle",
            "description": "<p>Group type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_type",
            "description": "<p>Group Entity.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/roles/1.0/OsRestfulRoles.class.php",
    "groupTitle": "Roles"
  },
  {
    "type": "delete",
    "url": "api/slideshow_slide/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Slideshow",
    "description": "<p>Delete a Slideshow entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow"
  },
  {
    "type": "delete",
    "url": "api/slideshow_slide/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Slideshow",
    "description": "<p>Delete a Slideshow entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow"
  },
  {
    "type": "get",
    "url": "api/slideshow_slide/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Slideshow",
    "description": "<p>Consume slideshow content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Label of the slideshow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>The direct URl of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/slideshow_slide/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/slideshow_slide/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Slideshow",
    "description": "<p>Consume slideshow content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Label of the slideshow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>The direct URl of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/slideshow_slide/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/slideshow_slide/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Slideshow",
    "description": "<p>Update a Slideshow entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow"
  },
  {
    "type": "patch",
    "url": "api/slideshow_slide/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Slideshow",
    "description": "<p>Update a Slideshow entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow"
  },
  {
    "type": "post",
    "url": "api/slideshow_slide",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Slideshow",
    "description": "<p>Create a Slideshow entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow"
  },
  {
    "type": "post",
    "url": "api/slideshow_slide",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Slideshow",
    "description": "<p>Create a Slideshow entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The slideshow ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/slideshow_slide/1.0/SlideshowSlideNodeRestfulBase.class.php",
    "groupTitle": "Slideshow"
  },
  {
    "type": "delete",
    "url": "api/software_project/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Software_project",
    "description": "<p>Delete a software project entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project"
  },
  {
    "type": "delete",
    "url": "api/software_project/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Software_project",
    "description": "<p>Delete a software project entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project"
  },
  {
    "type": "get",
    "url": "api/software_project/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Software_project",
    "description": "<p>Consume software project content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Date",
            "description": "<p>The presentation date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the presentation.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/software_project/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/software_project/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Software_project",
    "description": "<p>Consume software project content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "body",
            "description": "<p>The body of the publication.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.fid",
            "description": "<p>file ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.filemime",
            "description": "<p>Mime type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.uri",
            "description": "<p>Uniform Resource Identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "files.url",
            "description": "<p>The address url.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Date",
            "description": "<p>The presentation date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the presentation.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/software_project/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/software_project/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Software_project",
    "description": "<p>Update a software project entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project"
  },
  {
    "type": "patch",
    "url": "api/software_project/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Software_project",
    "description": "<p>Update a software project entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project"
  },
  {
    "type": "post",
    "url": "api/software_project",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Software_project",
    "description": "<p>Create a software project entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project"
  },
  {
    "type": "post",
    "url": "api/software_project",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Software_project",
    "description": "<p>Create a software project entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software project ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_project/1.0/SoftwareProjectNodeRestfulBase.class.php",
    "groupTitle": "Software_project"
  },
  {
    "type": "delete",
    "url": "api/software_release/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Software_release",
    "description": "<p>Delete a software release entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release"
  },
  {
    "type": "delete",
    "url": "api/software_release/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Software_release",
    "description": "<p>Delete a software release entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release"
  },
  {
    "type": "get",
    "url": "api/software_release/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Software_release",
    "description": "<p>Consume software release content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "software_release",
            "description": "<p>The software project reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "software_release.id",
            "description": "<p>Software project ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "software_release.label",
            "description": "<p>Software project label</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Bool</p> ",
            "optional": false,
            "field": "recommended",
            "description": "<p>If this release recommended or not</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "version",
            "description": "<p>The version of the release</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package",
            "description": "<p>The file object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.fid",
            "description": "<p>File ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.filemime",
            "description": "<p>File filemime.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.uri",
            "description": "<p>URI of the file.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.url",
            "description": "<p>File URL.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/software_release/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/software_release/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Software_release",
    "description": "<p>Consume software release content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The publication ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vsite.title",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite.id",
            "description": "<p>Group ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "software_release",
            "description": "<p>The software project reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "software_release.id",
            "description": "<p>Software project ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "software_release.label",
            "description": "<p>Software project label</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Bool</p> ",
            "optional": false,
            "field": "recommended",
            "description": "<p>If this release recommended or not</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "version",
            "description": "<p>The version of the release</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package",
            "description": "<p>The file object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.fid",
            "description": "<p>File ID</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.filemime",
            "description": "<p>File filemime.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.name",
            "description": "<p>File name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.uri",
            "description": "<p>URI of the file.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "package.url",
            "description": "<p>File URL.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/software_release/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/software_release/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Software_release",
    "description": "<p>Update a software release entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release"
  },
  {
    "type": "patch",
    "url": "api/software_release/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Software_release",
    "description": "<p>Update a software release entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release"
  },
  {
    "type": "post",
    "url": "api/software_release",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Software_release",
    "description": "<p>Create a software release entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release"
  },
  {
    "type": "post",
    "url": "api/software_release",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Software_release",
    "description": "<p>Create a software release entry.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The software release ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/node/software_release/1.0/SoftwareReleaseNodeRestful.class.php",
    "groupTitle": "Software_release"
  },
  {
    "type": "delete",
    "url": "api/taxonomy/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Term",
    "description": "<p>Delete a taxonomy term.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The term ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term"
  },
  {
    "type": "delete",
    "url": "api/taxonomy/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Term",
    "description": "<p>Delete a taxonomy term.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The term ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term"
  },
  {
    "type": "get",
    "url": "api/taxonomy?vsite=:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Term",
    "description": "<p>Consume taxonomy term content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the VSite</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The term ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The term label.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>The direct url of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vocab",
            "description": "<p>The vocabulary end machine name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "vid",
            "description": "<p>The vocabulary ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/taxonomy?vsite=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/taxonomy?vsite=:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Term",
    "description": "<p>Consume taxonomy term content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the VSite</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The term ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The term label.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>The direct url of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vocab",
            "description": "<p>The vocabulary end machine name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "vid",
            "description": "<p>The vocabulary ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/taxonomy?vsite=:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/taxonomy/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Term",
    "description": "<p>Update a taxonomy term.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the term</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The term ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term"
  },
  {
    "type": "patch",
    "url": "api/taxonomy/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Term",
    "description": "<p>Update a taxonomy term.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the term</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The term ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term"
  },
  {
    "type": "post",
    "url": "api/taxonomy",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Term",
    "description": "<p>Create taxonomy term content.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the term</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vocabulary",
            "description": "<p>The name of the vocabulary for the term</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/taxonomy"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/taxonomy",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Term",
    "description": "<p>Create taxonomy term content.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the term</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "vocabulary",
            "description": "<p>The name of the vocabulary for the term</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/taxonomy/1.0/OsTaxonomyTerm.class.php",
    "groupTitle": "Term",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/taxonomy"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "User",
    "description": "<p>Consume the user entity.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the user</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>User name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>Direct url of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mail",
            "description": "<p>User mail.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>User password. Not accessed via get only for update/create/delete</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the user - active or not.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>User site wide role.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "og_group_ref",
            "description": "<p>Groups which the user belong.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "og_group_ref.title",
            "description": "<p>Title of the group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "og_group_ref.id",
            "description": "<p>Group ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/user/1.0/OsRestfulUser.class.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "User",
    "description": "<p>Consume the user entity.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the user</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>User name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>Direct url of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mail",
            "description": "<p>User mail.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>User password. Not accessed via get only for update/create/delete</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the user - active or not.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>User site wide role.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "og_group_ref",
            "description": "<p>Groups which the user belong.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "og_group_ref.title",
            "description": "<p>Title of the group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "og_group_ref.id",
            "description": "<p>Group ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/user/1.0/OsRestfulUser.class.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/users/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/users/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "User",
    "description": "<p>Update a user entity.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mail",
            "description": "<p>The email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password for the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>The role ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The VSite of the user</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/user/1.0/OsRestfulUser.class.php",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "api/users/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "User",
    "description": "<p>Update a user entity.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mail",
            "description": "<p>The email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password for the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>The role ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The VSite of the user</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/user/1.0/OsRestfulUser.class.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "User",
    "description": "<p>Create a user entity.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mail",
            "description": "<p>The email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password for the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>The role ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The VSite of the user</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/user/1.0/OsRestfulUser.class.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "User",
    "description": "<p>Create a user entity.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mail",
            "description": "<p>The email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password for the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>The role ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The VSite of the user</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/user/1.0/OsRestfulUser.class.php",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/variables",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Variables",
    "description": "<p>Delete a variable in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The variable name.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables"
  },
  {
    "type": "delete",
    "url": "api/variables",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Variables",
    "description": "<p>Delete a variable in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The variable name.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables"
  },
  {
    "type": "get",
    "url": "api/variables/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Variables",
    "description": "<p>Get a variable from a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The space override type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The space override ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The space override object ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "object_type",
            "description": "<p>The space override object type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The space override value.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/variables/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/variables/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Variables",
    "description": "<p>Get a variable from a vsite.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>The space override type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The space override ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The space override object ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "object_type",
            "description": "<p>The space override object type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The space override value.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/variables/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/variables",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Variables",
    "description": "<p>Update a variable in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The variable name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The body of the publication.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables"
  },
  {
    "type": "patch",
    "url": "api/variables",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Variables",
    "description": "<p>Update a variable in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The variable name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The body of the publication.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables"
  },
  {
    "type": "post",
    "url": "api/variables",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Variables",
    "description": "<p>Create a variable in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The variable name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The body of the publication.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables"
  },
  {
    "type": "post",
    "url": "api/variables",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Variables",
    "description": "<p>Create a variable in a vsite.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The publication ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object_id",
            "description": "<p>The variable name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The body of the publication.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vsite_variables/1.0/OsRestfulVariables.class.php",
    "groupTitle": "Variables"
  },
  {
    "type": "delete",
    "url": "api/vocabulary/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Vocabulary",
    "description": "<p>Delete a vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "delete",
    "url": "api/vocabulary/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Vocabulary",
    "description": "<p>Delete a vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "get",
    "url": "api/vocabulary?vsite=:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Vocabulary",
    "description": "<p>Consume vocabulary content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the VSite</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Vocabulary label.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>Direct url of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "machine_name",
            "description": "<p>Vocabulary machine name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/vocabulary?vsite=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/vocabulary?vsite=:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Vocabulary",
    "description": "<p>Consume vocabulary content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the VSite</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>Vocabulary label.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "self",
            "description": "<p>Direct url of the current end point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "machine_name",
            "description": "<p>Vocabulary machine name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "vsite",
            "description": "<p>The vsite ID.</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary",
    "sampleRequest": [
      {
        "url": "http://localhost/openscholar/www/api/vocabulary?vsite=:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/vocabulary/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Vocabulary",
    "description": "<p>Update a vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the vocabulary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "patch",
    "url": "api/vocabulary/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "Vocabulary",
    "description": "<p>Update a vocabulary.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the vocabulary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The vocabulary ID</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "post",
    "url": "api/vocabulary",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Vocabulary",
    "description": "<p>Create vocabulary content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the vocabulary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the VSite</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/www/profiles/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "post",
    "url": "api/vocabulary",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Vocabulary",
    "description": "<p>Create vocabulary content.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "label",
            "description": "<p>The name of the vocabulary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the VSite</p> "
          }
        ]
      }
    },
    "filename": "/var/www/html/openscholar/openscholar/modules/os/modules/os_restful/plugins/restful/vocabulary/1.0/OsVocabulary.class.php",
    "groupTitle": "Vocabulary"
  }
] });