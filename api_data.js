define({ "api": [
  {
    "type": "get",
    "url": "api/login-token",
    "title": "Access Token",
    "version": "0.1.0",
    "name": "Access_token",
    "group": "Basic",
    "description": "<p>Access token uses us for request which done outside the Drupal installation. A good example will be a mobile application try to access content which not accessible to anonymous users. Since the request is done outside the Drupal installation we need a way to verify which user involve in the request.</p> <p>In the example you can see how a request to get the access token is done using Angular JS. Once the request succeeded you will get back a JSON with three important parameters:</p> <ul> <li><code>access_token</code> will keep the access token that you can use in order to make a successful rest request.</li> <li><code>expires_in</code> define for how many times the access token is valid. Usually for one day.</li> <li><code>refresh_token</code> will used you to get a new access token once the previous has expired.</li> </ul> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/session/token",
    "title": "X CSRF token",
    "version": "0.1.0",
    "name": "Basic",
    "group": "Basic",
    "description": "<p>When running a REST request inside a Drupal installation RESTful will validate you need to pass an X-CSRF-TOKEN as a header for each request. This will make sure that the user of the cookie was not hijacked.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"X-CSRF-Token\": \"pgaSEyNaDELTBuPXy-Jpx_6I-mrEruxH3_-BEcMtnU0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "get",
    "url": "api/",
    "title": "End points",
    "version": "0.1.0",
    "name": "End_points",
    "group": "Basic",
    "description": "<p>One of RESTful good features is the API discovery.</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/"
      }
    ],
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/documentation/doc.class.php",
    "groupTitle": "Basic"
  },
  {
    "type": "delete",
    "url": "api/bio/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Biography",
    "description": "<p>Create a Biography entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "get",
    "url": "api/bio/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Biography",
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
            "type": "<p>Object[]</p> ",
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
            "type": "<p>Object[]</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/bio/:id"
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
    "description": "<p>Create a Biography entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "post",
    "url": "api/bio",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Biography",
    "description": "<p>Create a Biography entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/bio/1.0/BioNodeRestfulBase.class.php",
    "groupTitle": "Biography"
  },
  {
    "type": "delete",
    "url": "api/biblio/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/biblio/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/biblio/1.0/BiblioNodeRestfulBase.class.php",
    "groupTitle": "Publication"
  }
] });