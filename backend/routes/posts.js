//노드는 웹팩을 안씀 임포트 안하고 리콰이어랑 익스포트씀

const express = require('express');
const {response} = require("express");

const router = express.Router();
router.post('/',(request,response) =>{
    response.json({ id:1, content: "this is test"});
});

//Delete
router.delete('/',(request, response) =>{
    res.json({id:1});
});

module.exports = router;