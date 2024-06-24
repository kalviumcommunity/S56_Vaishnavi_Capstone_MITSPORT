const express = require('express');
const { check, validationResult } = require('express-validator'); // Import check and validationResult
const router = express.Router();
const { Mitsport } = require('./models/sport.js');

router.get('/sport', async (req, res) => {
    try {
        const sports = await Mitsport.find({});
        res.status(200).json({ sports });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put(
    '/updateuser/:id',
    [
        check('Batch').optional().isString().withMessage('Batch must be a string'),
        check('Sport').optional().isString().withMessage('Sport must be a string'),
        check('Timing').optional().isString().withMessage('Timing must be a string'),
    ],
    async (req, res) => {
        const { id } = req.params;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const updateData = req.body;
        try {
            const updatedUser = await Mitsport.findByIdAndUpdate(id, updateData, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);


router.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Mitsport.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const result = await Mitsport.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
