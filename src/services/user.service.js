import User from "../models/User.js";

const getAll = async () => {
  return await User.find();
};

const getById = async (id) => {
  return await User.findById(id);
};


const createUser = async (data) => {
  return await User.create(data);
};

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {new: data });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default { createUser, getAll, getById, updateUser, deleteUser };
