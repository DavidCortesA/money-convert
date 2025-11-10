# 💱 Money Convert

**Money Convert** es una aplicación móvil desarrollada con **React Native (Expo)** que permite convertir dinero entre cuatro divisas principales: **Peso Mexicano (MXN)**, **Dólar Estadounidense (USD)**, **Euro (EUR)** y **Libra Esterlina (GBP)**.  
Su diseño es simple, rápido y pensado para ofrecer conversiones actualizadas en tiempo real.

---

## 🚀 Características principales

- 🌐 Conversión en tiempo real entre:
  - 🇲🇽 **MXN** (Peso Mexicano)
  - 🇺🇸 **USD** (Dólar Estadounidense)
  - 🇪🇺 **EUR** (Euro)
  - 🇬🇧 **GBP** (Libra Esterlina)
- 🔄 Intercambio rápido entre divisas (botón de “swap”).
- 💰 Formato numérico amigable para mostrar montos.
- 🕒 Indicación de la última actualización de los tipos de cambio.
- ⚡ Interfaz ligera, responsiva y optimizada para móviles.

---

## 🛠️ Tecnologías utilizadas

- [Expo](https://expo.dev/) – entorno para desarrollo y compilación móvil.
- [React Native](https://reactnative.dev/) – framework para apps móviles nativas.
- [React Navigation](https://reactnavigation.org/) – navegación entre pantallas.
- [React Native Select Dropdown](https://www.npmjs.com/package/react-native-select-dropdown) – selección de divisas.
- [FastForex API](https://fastforex.io/) – obtención de los tipos de cambio actuales.
- [TypeScript](https://www.typescriptlang.org/) – tipado estático para un código más seguro.

---

## 📦 Instalación y uso

### 1️⃣ Clona el repositorio
```bash
git clone https://github.com/DavidCortesA/money-convert.git
cd money-convert
````

### 2️⃣ Instala las dependencias

```bash
npm install
```

### 3️⃣ Crea un archivo `.env` (opcional si usas una API externa)

Agrega tu **API Key** de [FastForex](https://fastforex.io/):

```
API_KEY=tu_api_key_aqui
```

### 4️⃣ Inicia la app

```bash
npm start
```

Luego elige una de las opciones:

* Presiona `a` para abrir en Android.
* Presiona `i` para abrir en iOS.
* Presiona `w` para abrir en navegador web.

---

## 📁 Estructura principal del proyecto

```
money-convert/
│
├── app/                   # Rutas gestionadas por Expo Router
├── components/            # Componentes reutilizables (Header, InputIn, etc.)
├── hooks/                 # Custom hooks (useChangeMoney, useFormatNumber, etc.)
├── constants/             # Valores estáticos (monedas, símbolos, etc.)
├── scripts/               # Scripts utilitarios
└── package.json           # Configuración del proyecto
```

---

## 🔐 Variables de entorno

| Variable  | Descripción                             | Ejemplo        |
| --------- | --------------------------------------- | -------------- |
| `API_KEY` | Clave para consumir la API de FastForex | `123abc456def` |

---

## 🧮 Ejemplo de uso

1. Selecciona la moneda de origen (por ejemplo, **MXN**).
2. Selecciona la moneda destino (por ejemplo, **USD**).
3. Ingresa un monto y automáticamente verás la conversión.
4. Usa el botón de “swap” 🔁 para invertir las divisas.

---

## 📸 Capturas (opcional)

| Pantalla principal |	Conversión |	Selección de divisas |
| ----------------- | ----------- | --------------------- |
| <img src="./assets/images/Screen 1.jpg" width="250"/>	| <img src="./assets/images/Screen 2.jpg" width="250"/> |	<img src="./assets/images/Screen 3.jpg" width="250"/> |

---

## 🧑‍💻 Autor

Desarrollado con ❤️ por **David Cortez**
📧 Contacto: [[david.cortes.ayala@hotmail.com](mailto:david.cortes.ayala@hotmail.com)]
🌐 [LinkedIn](https://www.linkedin.com/in/davidcortesa/) | [GitHub](https://github.com/DavidCortesA/)

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**.
Puedes usarlo, modificarlo y distribuirlo libremente citando la autoría.

---

## ⭐ Contribuye

Si deseas mejorar el proyecto:

1. Haz un fork.
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Envía un PR (Pull Request).

---

### 💡 Nota:

Los tipos de cambio dependen de la API de terceros (FastForex), por lo que podrían variar según la disponibilidad del servicio.
