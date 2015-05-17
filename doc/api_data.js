define({ "api": [
  {
    "type": "get",
    "url": "/basic/:id",
    "title": "Endpoints",
    "version": "0.3.0",
    "name": "GetEndpoints",
    "group": "Basic",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Basic",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/basic/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/basic/:id",
    "title": "Authentication",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "Basic",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Basic",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/basic/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/basic/:id",
    "title": "Content",
    "version": "0.3.0",
    "name": "GetContent",
    "group": "Content",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/basic/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/basic/:id",
    "title": "Files",
    "version": "0.3.0",
    "name": "GetFiles",
    "group": "Content",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/basic/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/basic/:id",
    "title": "Terms and vocabularies",
    "version": "0.3.0",
    "name": "GetTerms",
    "group": "Content",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/basic/:id"
      }
    ]
  }
] });