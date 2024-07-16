/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth Module
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          sendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *          checkOTP:
 *              type: object
 *              required:
 *                  -   code
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: string
 */

/**
 * @swagger
 *
 * /auth/send-otp:
 *  post:
 *      summary: login with otp
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/sendOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/sendOTP'
 *      responses:
 *          200:
 *              description: success
 */


/**
 * @swagger
 *
 * /auth/check-otp:
 *  post:
 *      summary: checkotp for Login
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/checkOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/checkOTP'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 *
 * /auth/logout:
 *  get:
 *      summary: logout user
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */

// /**
//  * @swagger
//  *
//  * /auth/logout":
//   *  get:
// *      summary: logOut user
//  *      tags:
//  *          -   Auth
//  *      responses:
//  *          200:
//  *              description: sucess
// */

// /**
//  * @swagger
//  * tags:
//  *  name: Auth
//  *  description: Auth Module and Routes
//  */

// /**
//  * @swagger
//  *  components:
//  *      schemas:
//  *          SendOTP:
//  *              type: object
//  *              required:
//  *                  -   mobile
//  *              properties:
//  *                  mobile:
//  *                      type: string
//  *          CheckOTP:
//  *              type: object
//  *              required:
//  *                  -   mobile
//  *                  -   code
//  *              properties:
//  *                  mobile:
//  *                      type: string
//  *                  code:
//  *                      type: string
//  */

// /**
//  * @swagger
//  *
//  * /auth/send-otp:
//  *  post:
//  *      summary: login with OTP in this end-point
//  *      tags:
//  *          -   Auth
//  *      requestBody:
//  *          content:
//  *              application/x-www-form-urlencoded:
//  *                  schema:
//  *                      $ref: '#/components/schemas/SendOTP'
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#/components/schemas/SendOTP'
//  *      responses:
//  *          200:
//  *              description: success
//  */
// /**
//  * @swagger
//  *
//  * /auth/check-otp:
//  *  post:
//  *      summary: check otp for login user
//  *      tags:
//  *          -   Auth
//  *      requestBody:
//  *          content:
//  *              application/x-www-form-urlencoded:
//  *                  schema:
//  *                      $ref: '#/components/schemas/CheckOTP'
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#/components/schemas/CheckOTP'
//  *      responses:
//  *          200:
//  *              description: success
//  */


// /**
//  * @swagger
//  * tags:
//  *  name: Auth
//  *  description: Auth module
//  */

// /**
//  * @swagger
//  *  components:
//  *      schemas:
//  *          sendOTP:
//  *              type: object
//  *              required:
//  *                  -   mobile
//  *              properties:
//  *                  mobile:
//  *                      type: string
//  */

// /**
//  * @swagger
//  *
//  * /auth/send-otp:
//  *  post:
//  *      summary: login with otp
//  *      tags:
//  *          -   Auth
//  *      requestBody:
//  *          content:
//  *              application/x-www-form-urlencoded:
//  *                  schema:
//  *                      $ref: "#/components/schemas/sendOTP"
//  *              application/json:
//  *                  schema:
//  *                      $ref: "#/components/schemas/sendOTP"
//  *      responses:
//  *          200:
//  *              description: sucess
//  */




