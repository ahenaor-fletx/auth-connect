# Frontend

Este documento describe la estructura del archivo HTML que compone la página de inicio de sesión del proyecto **Auth Connect**. El enfoque está en la organización de los contenedores y cómo se ha maquetado el formulario de inicio de sesión.

## Estructura del HTML

El archivo `index.html` sigue una estructura organizada y semántica para crear una página de inicio de sesión limpia y accesible. A continuación, se describen los principales componentes y contenedores utilizados:

### Contenedores Principales

1. **`<main class="sign-in" id="main-content" role="main">`**
   - Este elemento `<main>` contiene el contenido principal de la página. Está identificado con la clase `sign-in` y el atributo `role` está definido como `main` para indicar el propósito principal del contenido.

2. **`<div class="sign-in__container">`**
   - Es un contenedor que envuelve todo el contenido relacionado con el formulario de inicio de sesión. La clase `sign-in__container` se utiliza para aplicar estilos específicos y centrar el contenido dentro del área principal.

3. **`<div class="sign-in__wrapper">`**
   - Dentro del contenedor principal, este `<div>` actúa como un envoltorio adicional para alinear el formulario de inicio de sesión y aplicar estilos adicionales si es necesario.

4. **`<article class="sign-in__form">`**
   - Este elemento `<article>` contiene el formulario de inicio de sesión. La clase `sign-in__form` permite estilizar el artículo para destacar su contenido y estructura dentro de la página.

### Componentes del Formulario

1. **`<form action="#">`**
   - El formulario en sí está definido dentro de este elemento `<form>`. Actualmente, el atributo `action` está establecido como un marcador de posición (`#`).

2. **`<div class="sign-in__input-box">`**
   - Cada campo de entrada (para el nombre de usuario y la contraseña) está contenido en un `<div>` con la clase `sign-in__input-box`. Este contenedor ayuda a encapsular el input y su icono asociado, mejorando la organización visual.

3. **`<div class="sign-in__remember-forgot">`**
   - Este contenedor agrupa el checkbox de "Remember me" y el enlace "Forgot Password?" en una sola línea para facilitar la interacción del usuario.

4. **`<div class="sign-in__btn_submit">`**
   - El botón de envío del formulario está contenido dentro de este `<div>`, permitiendo aplicar estilos centrados y distintivos al botón.

5. **`<div class="sign-in__register-link">`**
   - Un contenedor para el enlace que invita a los usuarios a registrarse si no tienen una cuenta. Está estilizado para integrarse bien con el resto del formulario.

## Consideraciones Adicionales

- El archivo HTML incluye enlaces a hojas de estilo externas (`style.css`) y un conjunto de iconos (`boxicons.min.css`) para mejorar la presentación visual.
- El uso de clases CSS como `sign-in__input-box` y `sign-in__wrapper` permite un enfoque modular en el diseño, facilitando el mantenimiento y la expansión futura del código.

Esta estructura modular y semántica garantiza que el formulario de inicio de sesión sea accesible y fácil de mantener, con un enfoque claro en la separación de estilos y contenido.