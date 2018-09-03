import { readFile } from "fs";
import { promisify } from "util";

const getStudents = () => readFile("students.json", (err,data) => {
    const parsedData = JSON.parse(data.toString())
    console.log(parsedData)
})

getStudents()