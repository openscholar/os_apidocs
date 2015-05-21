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
    "url": "api/blog/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Blog",
    "description": "<p>Create a Blog entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/blog/:id"
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
    "description": "<p>Create a Blog entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "post",
    "url": "api/blog",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Blog",
    "description": "<p>Create a Blog entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/blog/1.0/BlogNodeRestfulBase.class.php",
    "groupTitle": "Blog"
  },
  {
    "type": "delete",
    "url": "api/cv/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/cv/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/cv/1.0/CVNodeRestfulBase.class.php",
    "groupTitle": "CV"
  },
  {
    "type": "delete",
    "url": "api/class/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/class/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class/1.0/ClassNodeRestfulBase.class.php",
    "groupTitle": "Class"
  },
  {
    "type": "delete",
    "url": "api/class_material/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Class_material",
    "description": "<p>Create a class entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/class_material/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/class_material/1.0/ClassMaterialNodeRestfulBase.class.php",
    "groupTitle": "Class_material"
  },
  {
    "type": "delete",
    "url": "api/event/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/event/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/event/1.0/EventNodeRestfulBase.class.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "api/faq/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/faq/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/faq/1.0/FAQNodeRestfulBase.class.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "delete",
    "url": "api/feed/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/feed/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/feed/1.0/FeedNodeRestfulBase.class.php",
    "groupTitle": "Feed"
  },
  {
    "type": "delete",
    "url": "api/link/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Link",
    "description": "<p>Create a Link entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/link/:id"
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
    "description": "<p>Create a Link entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "post",
    "url": "api/link",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Link",
    "description": "<p>Create a Link entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/link/1.0/LinkNodeRestfulBase.class.php",
    "groupTitle": "Link"
  },
  {
    "type": "delete",
    "url": "api/media_gallery/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Media_gallery",
    "description": "<p>Create a Media gallery entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "get",
    "url": "api/media_gallery/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "Media_gallery",
    "description": "<p>Consume media_gallery content.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/media_gallery/:id"
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
    "description": "<p>Create a Media gallery entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "post",
    "url": "api/media_gallery",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "Media_gallery",
    "description": "<p>Create a Media gallery entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/media_gallery/1.0/MediaGalleryNodeRestfulBase.class.php",
    "groupTitle": "Media_gallery"
  },
  {
    "type": "delete",
    "url": "api/news/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "News",
    "description": "<p>Create a News entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/news/:id"
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
    "description": "<p>Create a News entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "api/news",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "News",
    "description": "<p>Create a News entry.</p> ",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/news/1.0/NewsNodeRestfulBase.class.php",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "api/page/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/page/:id"
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/page/1.0/PageNodeRestfulBase.class.php",
    "groupTitle": "Page"
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
  },
  {
    "type": "delete",
    "url": "api/book/:id",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "book",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "book"
  },
  {
    "type": "get",
    "url": "api/book/:id",
    "title": "Get",
    "version": "0.1.0",
    "name": "Get",
    "group": "book",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "book",
    "sampleRequest": [
      {
        "url": "http://localhost/OpenScholarMake/www/api/book/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "api/book/:id",
    "title": "Patch",
    "version": "0.1.0",
    "name": "Patch",
    "group": "book",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "book"
  },
  {
    "type": "post",
    "url": "api/book",
    "title": "Post",
    "version": "0.1.0",
    "name": "Post",
    "group": "book",
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
    "filename": "../OpenScholarMake/openscholar/modules/os/modules/os_restful/plugins/restful/node/book/1.0/BookNodeRestfulBase.class.php",
    "groupTitle": "book"
  }
] });