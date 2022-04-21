const { User } = require("../schemas/user")

const userModel = {
  create: async ({ newUser }) => {
    const createdNewUser = await User.create(newUser)
    return createdNewUser
  },

  findByEmail: async ({ email }) => {
    const user = await User.findOne({ email })
    return user
  },

  findById: async ({ userId }) => {
    const user = await User.findOne({ id: userId })
    return user
  },

  findAll: async () => {
    const users = await User.find({})
    return users
  },

  update: async ({ userId, newValue }) => {
    const filter = { id: userId }
    const update = { $set: newValue }
    const option = { returnOriginal: false }

    const updatedUser = await User.findOneAndUpdate(filter, update, option)
    return updatedUser
  },

  delete: async ({ userId }) => {
    await userModel.deleteOne({ id: userId })
    return "삭제완료"
  },
}

module.exports = { userModel }
