define({ "api": [
  {
    "type": "delete",
    "url": "/biblio/:id",
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
    "type": "get",
    "url": "/biblio/:id",
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
    "url": "/biblio/:id",
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
    "url": "/biblio",
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