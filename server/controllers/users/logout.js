module.exports = (req, res) => {
  res.clearCookie('accessToken')
  res.status(205).end('Logged out successfully')
}
