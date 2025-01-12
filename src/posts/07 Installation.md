# 06 - Dec - 2024

### How many ports are there?

Ports are identified by numbers, ranging from 0 to 65535.

#### Overview:

- **Ports 0-1023:** Known as well-known ports. These are reserved for core services like:

  - HTTP (port 80)
  - HTTPS (port 443)
  - FTP (port 21)
  - And so on.

- **Ports 1024-49151:** Registered ports. Typically used by applications and software that require a specific port number.

- **Ports 49152-65535:** Dynamic or private ports. Often used for temporary or private purposes, such as dynamic allocation by client applications when initiating outbound connections.

---

### npm vs npx

- **npm** (Node Package Manager / Installer):

  - Compulsorily downloads all packages and libraries in your system. This means you are downloading the packages first and then using them.

- **npx** (Node Package Executor):
  - npx will download only the necessary packages and the remaining packages can be accessed without downloading them.

#### Analogy:

If you want to use Facebook on mobile, there are two ways:

1. **Downloading the Facebook app**, which is similar to the npm way, meaning we download the entire app before using it.
2. **Downloading the browser** (necessary package). Here, we don’t download Facebook itself but download the necessary package (the browser) to execute and use Facebook through it.

---

### React Installation Methods

#### Way 1: Using Vite (already done)

- **JSX extension** remains.
- We cannot write JSX components in `.js` files.
- **File size:** ~55MB
- **Default port:** 5173

#### Way 2: Using `npx create-react-app`

- **JS extension** remains, but we can write JSX components in `.js` files as well.
- **File size:** ~308MB
- **Default port:** 3000

#### Folder Structure for `create-react-app`:

- `node_modules`
- `public`
- `src`
- `.gitignore`

---

### How does `npx` save space?

- **`npm create-react-app deleteme`**: ~500-600MB
- **`npx create-react-app deleteme`**: ~300-400MB
- **`npm create vite`**: ~60MB

This is because `npx` only downloads the necessary dependencies for the current execution, whereas `npm` downloads everything in advance.
