import { PORT } from "./const.ts"
import { Application, Router } from "./type.ts"

const router = new Router()

router.get("/(.*)", (context) => {
	context.response.body = "Hello, World!"
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: PORT })

export default app
