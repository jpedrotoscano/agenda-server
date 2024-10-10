import fastify from "fastify"

const app = fastify()

app.get("/", () => {
    return "backend"
})

app.listen({ port: 3333 }).then(() => {
    console.log("Server running")
})