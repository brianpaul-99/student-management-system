import Axios from "axios";

//calls backend api to add student
export function addStudent_api(firstName, lastName, DoB) {
  return new Promise((resolve, reject) => {
    Axios.post("http://localhost:3001/addStudent", { firstName, lastName, DoB })
      .then(() => resolve())
      .catch((e) => reject(e));
  });
}
//calls backend api to get all added students
export async function getStudents_api() {
  return new Promise((resolve, reject) => {
    Axios.get("http://localhost:3001/getStudents")
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e));
  });
}
