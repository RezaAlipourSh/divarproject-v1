/**
 * @swagger
 * tags:
 *  name: Option
 *  description: Options For Categories 
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateOption:
 *              type: object
 *              required:
 *                  -   title
 *                  -   key
 *                  -   type
 *                  -   category
 *              properties:
 *                  title:
 *                      type: string
 *                  key:
 *                      type: string
 *                  guide:
 *                      type: string
 *                  required:
 *                      type: boolean
 *                  category:
 *                      type: string
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          -   boolean
 *                          -   array
 *                  enum:
 *                      type: array
 *                      items:
 *                          type: string
 *          UpdateOption:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  key:
 *                      type: string
 *                  guide:
 *                      type: string
 *                  required:
 *                      type: boolean
 *                  category:
 *                      type: string
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          -   boolean
 *                          -   array
 *                  enum:
 *                      type: array
 *                      items:
 *                          type: string
 */

/**
 * @swagger
 * /option:
 *  post:
 *      summary: create new Options for Category
 *      tags:
 *          -   Option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *      responses:
 *          201:
 *              description:  created
 */

/**
 * @swagger
 * /option/{id}:
 *  put:
 *      summary: Update Option
 *      tags:
 *          -   Option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *      responses:
 *          200:
 *              description:  updated
 */


/**
 * @swagger
 * /option/by-category/{categoryId}:
 *  get:
 *      summary: get  Option by CategoryId
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: categoryId
 *              type: string
 *      responses:
 *          200:
 *              description: succesfully
 * 
 */

/**
 * @swagger
 * /option/by-category-slug/{slug}:
 *  get:
 *      summary: get  Option by Categoryslug
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: slug
 *              type: string
 *      responses:
 *          200:
 *              description: succesfully
 * 
 */

/**
 * @swagger
 * /option/{id}:
 *  get:
 *      summary: get Option By Id
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: succesfully
 */


/**
 * @swagger
 * /option/{id}:
 *  delete:
 *      summary:  delete Option By Id
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: deleted succesfully
 * 
 */

/**
 * @swagger
 * /option:
 *  get:
 *      summary: get All Option
 *      tags:
 *          -   Option
 *      responses:
 *          200:
 *              description: succesfully
 * 
 */