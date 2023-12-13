[x] Foreign key selector & explorer
  [x] With «preferred_key» parameter that can point to a «unique» column so it can be used to replace the ID in the reference field of the UI
[ ] Auto-generate sequelize models
  [ ] depending on process.env.SEQUELIZE_REGENERATE_MODELS
  [ ] hard-generates BaseModel.js but soft-generates Model.js as empty inherited model
[ ] Driver for MySQL at least
[ ] Botón de vista de árbol en:
  [ ] @tiene_vista_de_arbol: "id_padre"
  [ ] Tablas con una columna recursiva [Nodo.id_padre -> Nodo]
  [ ] Tablas con una columna refleja [Fichero.id_padre -> Carpeta]
[x] GetFile & SetFile controllers
[ ] Añadir chat espontáneo con socket.io
[ ] Diseñar un page builder para el served-frontend
  [ ] Con drag'n'drop de widgets para acelerar el proceso de creación de contenidos.
  [ ] Full-featured CMS
    [ ] With a "RESET" button and endpoint
      [ ] by which `nodemon` refreshes the process
    [ ] With command-line interface for simplest (no dependency tracker or guarder) plugin management
    

[ ] Hacer tests de todo el flujo del AUTH y del CRUD
[ ] Documentar todo el proyecto



