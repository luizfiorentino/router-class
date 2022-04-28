const express = require("express");

const app = express();
const PORT = 4002;

const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");

app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
