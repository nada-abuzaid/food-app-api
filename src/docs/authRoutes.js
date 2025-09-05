/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - address
 *               - phone
 *             properties:
 *               username:
 *                 type: string
 *                 example: JohnDoe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               address:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["123 Street, City"]
 *               phone:
 *                 type: string
 *                 example: "1234567890"
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: SUCCESS SIGNUP
 *                 data:
 *                   type: object
 *                   properties:
*                     _id:
*                       type: string
*                       example: "68ba2285b4109b2990ddb342"
*                     username:
*                       type: string
*                       example: John
*                     email:
*                       type: string
*                       example: john@example.com
*                     address:
*                       type: array
*                       items:
*                         type: string
*                       example: ["123 Street, City"]
*                     phone:
*                       type: string
*                       example: '0599098857'
*                     role:
*                       type: string
*                       example: client
*                     profile:
*                       type: string
*                       example: https://res.cloudinary.com/dzcmadjl1/image/upload/v1696229266/default_profile_oqtq9r.png
*                     createdAt:
*                       type: string
*                       format: date-time
*                       example: 2025-09-05T00:09:31.158Z
*                     updatedAt:
*                       type: string
*                       format: date-time
*                       example: 2025-09-05T00:09:31.158Z
 *       400:
 *         description: Missing fields
 *       409:
 *         description: Email already exists
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: User login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: SUCCESS LOGIN
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 68ba2285b4109b2990ddb342
 *                     username:
 *                       type: string
 *                       example: john
 *                     email:
 *                       type: string
 *                       example: john@example.com
 *                     address:
 *                       type: array
 *                       items:
 *                         type: string
 *                         example: 123 Street, City
 *                     phone:
 *                       type: string
 *                       example: '0599098857'
 *                     role:
 *                       type: string
 *                       example: client
 *                     profile:
 *                       type: string
 *                       example: https://res.cloudinary.com/dzcmadjl1/image/upload/v1696229266/default_profile_oqtq9r.png
 *                     createdAt:
 *                       type: string
 *                       example: 2025-09-05T00:09:31.158Z
 *                     updatedAt:
 *                       type: string
 *                       example: 2025-09-05T00:09:31.158Z
 *       400:
 *         description: Missing fields
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 */