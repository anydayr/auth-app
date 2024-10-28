# Mi Prueba Técnica

¡Esta es mi prueba técnica! Este proyecto está construido con React, Vite, TypeScript y Material-UI.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida y ligera para proyectos de front-end.
- **TypeScript**: Un superset de JavaScript que añade tipos estáticos.
- **Material-UI**: Biblioteca de componentes de React que implementa el diseño de Material Design.
- **pnpm**: Gestor de paquetes rápido y eficiente.

## Instalación
Instrucciones para instalar y configurar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   https://github.com/anydayr/auth-app.git

2. Navega al directorio de Auth-app
3. Instala las dependencias usando :
   ```bash
   pnpm i
4. Inicia el proyecto utilizando :
   ```bash
   pnpm run dev

Por último, Accede a la aplicación en tu navegador en http://localhost:5173 !

## Tecnologías Utilizadas
En este momento se tienen dos páginas : Home y list.
Las rutas válidas son : 
1. "/private/dashboard/home" : Bienvenida al usuario
2. "/private/dashboard/list" : Página que contiene una tabla de datos para poder interactuar. 
3. "/": Inicio de sesión
4. "/login: Mismo punto que el anterior
5. "/private/dashboard/my-account": Vista previa de datos del perfil 

## Estructura del Proyecto

He seguido el concepto de Clean Architecture
```bash📦src
 ┣ 📂adapters
 ┣ 📂assets
 ┃ ┣ 📜app-logo.png
 ┃ ┣ 📜home.svg
 ┃ ┣ 📜login-layout.jpg
 ┃ ┣ 📜not-found.svg
 ┃ ┣ 📜profile.svg
 ┃ ┗ 📜user.jpg
 ┣ 📂components
 ┃ ┣ 📜Alert.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Dialog.tsx
 ┃ ┣ 📜DialogGroup.tsx
 ┃ ┗ 📜TextField.tsx
 ┣ 📂constants
 ┃ ┗ 📜input-validations.ts
 ┣ 📂guards
 ┃ ┣ 📜auth.guard.tsx
 ┃ ┗ 📜roles.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useValidation.ts
 ┣ 📂layout
 ┣ 📂models
 ┃ ┣ 📜roles.ts
 ┃ ┣ 📜routes.ts
 ┃ ┗ 📜user.model.ts
 ┣ 📂pages
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useLoginForm.ts
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜login.ts
 ┃ ┃ ┣ 📜AuthLayout.tsx
 ┃ ┃ ┣ 📜login-scheme.ts
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂private
 ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┣ 📂adapters
 ┃ ┃ ┃ ┃ ┗ 📜list-placeholder.ts
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜AccountMenu.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AppNavbar.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AvatarComponent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Columns.tsx
 ┃ ┃ ┃ ┃ ┣ 📜DataGrid.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MenuButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MenuContent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavbarBreadcrumbs.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SideMenu.tsx
 ┃ ┃ ┃ ┃ ┗ 📜SideMenuMobile.tsx
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┃ ┣ 📜useCreatePlaceholders.ts
 ┃ ┃ ┃ ┃ ┣ 📜useEditPlaceholders.ts
 ┃ ┃ ┃ ┃ ┗ 📜useGetPlaceholders.ts
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜placeholder-data.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜create-placeholder.ts
 ┃ ┃ ┃ ┃ ┣ 📜delete-placeholder.ts
 ┃ ┃ ┃ ┃ ┣ 📜edit-placeholder.ts
 ┃ ┃ ┃ ┃ ┗ 📜get-placeholders.ts
 ┃ ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┃ ┣ 📜create.ts
 ┃ ┃ ┃ ┃ ┗ 📜edit.ts
 ┃ ┃ ┃ ┣ 📂utilities
 ┃ ┃ ┃ ┃ ┣ 📜create-scheme.ts
 ┃ ┃ ┃ ┃ ┗ 📜edit-scheme.ts
 ┃ ┃ ┃ ┣ 📜Create.tsx
 ┃ ┃ ┃ ┣ 📜Dashboard.tsx
 ┃ ┃ ┃ ┣ 📜Edit.tsx
 ┃ ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┃ ┣ 📜HomeLayout.tsx
 ┃ ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┃ ┣ 📜ListLayout.tsx
 ┃ ┃ ┃ ┗ 📜ProfilePreviewInfo.tsx
 ┃ ┃ ┗ 📜Private.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂redux
 ┃ ┣ 📜modal-slice.ts
 ┃ ┣ 📜snakcbar-slice.ts
 ┃ ┣ 📜store.ts
 ┃ ┣ 📜table-slice.ts
 ┃ ┗ 📜user-slice.ts
 ┣ 📂services
 ┃ ┗ 📜axios-client.ts
 ┣ 📂theme
 ┃ ┗ 📜theme.ts
 ┣ 📂utilities
 ┃ ┣ 📜capitalize-first-letter.ts
 ┃ ┣ 📜local-storage-utilities.ts
 ┃ ┗ 📜routes-not-found.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
