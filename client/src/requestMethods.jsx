import axios from "axios";

const BASE_URL = "http://localhost:3000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWZjNjM4NjQ4YWQ2ZTI2YjNmMTliNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjI5Nzg4MywiZXhwIjoxNjU2NTU3MDgzfQ.zaeKKio7XPfnw3ojQcgx2eN8x7nOzfaAvZ1yusQNJhc"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})