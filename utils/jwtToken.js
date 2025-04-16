export const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken();
    const cookieExpires = process.env.COOKIE_EXPIRES ? parseInt(process.env.COOKIE_EXPIRES, 10) : 7; // Default to 7 days if not defined

    res
        .status(statusCode)
        .cookie("token", token, {
            expires: new Date(Date.now() + cookieExpires * 24 * 60 * 60 * 1000),
            httpOnly: true,
        })
        .json({
            success: true,
            message,
            user,
            token,
        });
}