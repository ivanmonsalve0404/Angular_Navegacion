#****************************************************************************
1. Crear el proyecto
#****************************************************************************
ng new taller05_navegacion --standalone=false
#****************************************************************************
2. Instalación de librerías
#****************************************************************************
npm i bootstrap
npm i @fortawesome/fontawesome-free
npm ngx-bootstrap
npm i ngx-toastr
#****************************************************************************
3. Incluir archivos Css y Js en Angular.json Assests
#****************************************************************************
"assets": [
              {
                "glob": "**/*",
                "input": "public"
              },
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/@fontawesome/fontawesome-free/css/all.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
4. Cambia el puerto de desarrollo y de producción angular.json
#**************************************************************************
"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "taller04_modelos:build:production",
              "port": 8095
            },
            "development": {
              "buildTarget": "taller04_modelos:build:development",
              "port": 8094
            }
          },

#****************************************************************************
5. Limpiar la plantilla del componente principal app.component.html
#**************************************************************************
6. Crear componentes del contenedor
#**************************************************************************
ng g c components/container/header --skip-tests
ng g c components/container/home --skip-tests
ng g c components/container/error --skip-tests
ng g c components/container/contacto --skip-tests
ng g c components/container/acercaDe --skip-tests
#**************************************************************************
7. Crear componentes del modelo
#****************************************************************************
ng g c components/municipio/listarMunicipio --skip-tests
ng g c components/municipio/crearMunicipio --skip-tests
ng g c components/municipio/administrarMunicipio --skip-tests
ng g c components/municipio/actualizarMunicipio --skip-tests
#****************************************************************************
7. Contenido plantilla componente cabecera/header (header.component.html)
#**************************************************************************
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <!--Acá va mi imagen-->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca de</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Operaciones
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Listar</a></li>
              <li><a class="dropdown-item" href="#">Registrar</a></li>
            </ul>
          </li>
        </ul>
        <div class="nabvar-nav">
            <span class="nav-item">
                <a href="#" class="nav-link">Iniciar Sesión</a>
            </span>
        </div>
      </div>
    </div>
  </nav>
#**************************************************************************
8. Agregar el selector del header en el componente principal (app.component.html)
#**************************************************************************
<main>
  <app-header></app-header>
</main>
#**************************************************************************
#**************************************************************************