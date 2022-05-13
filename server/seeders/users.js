const { user } = require('../models');

module.exports = async () => {
  const count = await user.count();
  if (count > 0) return false;
  // 없는 경우에만 데이터 넣기.
  const users = [
    {
      id: '0',
      userId: 'defat',
      password: '123123',
      nickname: 'defat',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
  return user.bulkCreate(users); //일괄등록
};