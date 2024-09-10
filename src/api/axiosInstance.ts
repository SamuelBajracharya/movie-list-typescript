import axios from "axios";

export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjlkN2VjMTIxMTNjOTRjMzkzZjI1M2VjN2EwZmRmOCIsIm5iZiI6MTcyNTM3NTQ4Ny45ODU3NTMsInN1YiI6IjY2ZDcyMjZkMjBiMThhMzNkZDBkYmExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CE0Ka7_2Sgi_sMDXCM7p-bp8VUAL-qkORe9lyAzfv0o'
      }
})