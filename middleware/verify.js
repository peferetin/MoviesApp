import jwt from 'jsonwebtoken';

const verify = (req, res, next) => {

    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }
    try {
        const verified = jwt.verify(token, 'MY_SECRET_KEY');
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

export default verify;