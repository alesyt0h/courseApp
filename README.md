# Requisitos 

Para esta aplicación se ha utilizado [`json-server`](https://github.com/typicode/json-server)

Debe ser instalado para que la aplicación funcione correctamente.

`npm i -g json-server`

# Inicio del **json-server**

El proyecto contiene un archivo `db/db.json` que hará de servidor que contiene la data.

Deberemos iniciar primeramente el servidor usando 
`json-server --watch db/db.json`

# Inicio de **Angular**

Se deberá ejecutar primeramente `npm install` desde la raíz del proyecto para que se instalen los modulos de **node**.

Posteriormente `ng serve -o` abrirá una nueva pestaña en el navegador con la aplicación de Angular.

# Resumen

Se ha utilizado un **json-server** para emular una aplicación real donde la información recibida no es estática y se asemeje a una aplicación que nos encontramos en el día a día.

Algunas propiedades del archivo `db.json` no son muy extensas y podrían ser ampliadas, pero para el objetivo de la prueba, cumplen su función.
Por ejemplo, faltaría una categoría de `courses`, para poder englobar ahí todos los **capítulos** y **sesiones**.

No se ha usado ningún sistema de **branches** puesto que la aplicación es muy sencilla para requerirlo.

No hay un CRUD completo en la aplicación puesto que no quería aumentar de complejidad aún más la aplicación, así como no hay testeos unitarios ni de integración por el mismo motivo.

El funcionamiento es simple e intuitivo, tal y como se muestra en los flows de Figma.
