/**
 * @swagger
 * tags:
 *  name: Category
 *  description: Category model  and routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   name
 *                  -   icon
 *              properties:
 *                  name:
 *                      type: string
 *                  slug:
 *                      type: string
 *                  icon:
 *                      type: string
 *                  parent:
 *                      type: string
 */

/**
 * @swagger
 * /category:
 *  post:
 *      summary: create new Category
 *      tags:
 *          -   Category
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *      responses:
 *          200:
 *              description: succesfully
 */

/**
 * @swagger
 * /category:
 *  get:
 *      summary: get Category
 *      tags:
 *          -   Category
 *      responses:
 *          200:
 *              description: succesfully
 * 
 */