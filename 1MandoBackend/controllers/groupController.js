const express = require("express");
const Group = require("../models/groupModel");
const { default: mongoose } = require("mongoose");

const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();

    // const groups =[
    //     {
    //         "id": 1,
    //         "name": "Group 1",
    //         "description": "This is group 1"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Group 2",
    //         "description": "This is group 2"
    //     }
    // ]

    res.status(200).json(groups);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createGorup = async (req, res) => {
  try {
    // const groups = await Group.find();
    console.log(req.body);
    if (!req.body.name) {
      return res.status(400).json({ message: "Please provide nam" });
    }
    // create a new group instance
    const group = new Group(req.body);

    // actually saves the new instance in the database
    const result = await group.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateGroup = async (req, res) => {
  try {
    // const groups = await Group.find();
    console.log(req.body);

    if (!req.body.id) {
      return res.status(400).json({ message: "Please provide id" });
    }
    if (!req.body.name) {
      return res.status(400).json({ message: "Please provide nam" });
    }
    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    // update based on id , and update the name
    const checkGroup = await Group.findById(req.body.id);
    console.log(checkGroup);
    if (!checkGroup) {
      return res.status(400).json({ message: "Group not found" });
    }
    const result = await Group.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
    });
    console.log(result);
    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGroup = async (req, res) => {
  try {
    // const groups = await Group.find();
    //   we need the id of the group to delete i

    const groupID = req.params.groupID;
    console.log(groupID);

    if (!groupID) {
      return res.status(400).json({ message: "Please provide id" });
    }
    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(groupID)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const deleted = await Group.findByIdAndDelete(groupID);
    console.log(deleted);
    if (!deleted) {
      res.status(400).json({ message: "Group not found" });
    } else {
      res.status(200).json({ message: "Group deleted" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = { getGroups, createGorup, deleteGroup, updateGroup };

// crud operations
// create = post request
// read = get request
// update = put request
// delete = delete request

// req = request sent by fronted
// res = response sent by backend

// R & D
// UX UI  (fimga or adobe xd)
//  static frontend
// backedn or api making
// api integeration

// quality Assu QA
