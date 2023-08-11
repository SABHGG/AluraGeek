import { create, router as _router, defaults, rewriter } from "json-server";
const server = create();
const router = _router("db.json");
const middlewares = defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  rewriter({
    "/api/categorias/*": "/categorias/$1",
    "/api/productos/*": "/productos/$1",
  })
);
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server está corriendo en el puerto ${port}`);
});

// Export the Server API
export default server;
