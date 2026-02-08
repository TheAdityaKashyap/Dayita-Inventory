import { body, validationResult } from 'express-validator';

export const validateChatMessage = [
    body('message')
        .isString()
        .withMessage('Message must be a string')
        .notEmpty()
        .withMessage('Message cannot be empty'),
];

export const validateProductQuery = [
    body('query')
        .isString()
        .withMessage('Query must be a string')
        .notEmpty()
        .withMessage('Query cannot be empty'),
];

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};