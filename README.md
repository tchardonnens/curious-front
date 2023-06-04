
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
curious-front
</h1>
<h3 align="center">📍 Unlock Your Curiosity with Curious-Front on GitHub!</h3>
<h3 align="center">⚙️ Developed with the software and tools below:</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=for-the-badge&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=for-the-badge&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white" alt="Axios" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
</div>

---

## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [💫 Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The Curious project provides a Next.js-based web application that allows users to search for resources across various platforms like YouTube, Reddit, and Twitter. The application offers a dark mode, user authentication, and user profile features. It also includes custom React hooks and typescript types for efficient state management and structural consistency. The project's value proposition lies in its simplicity and user-friendliness, making it easy for users to find and share learning resources.

---

## 💫 Features

Feature | Description |
|---|---|
| **🏗 Structure and Organization** | The codebase follows a standard Next.js project structure with a clear separation of concerns between the components, pages, and styles folders, and uses TypeScript for type checking. |
| **📝 Code Documentation** | The codebase includes some inline comments and README files with installation and usage instructions, but could benefit from more detailed documentation, especially for the custom hooks and components. |
| **🧩 Dependency Management** | The codebase uses Yarn for package management and includes a detailed package.json file with all necessary dependencies and scripts. |
| **♻️ Modularity and Reusability** | The codebase makes use of reusable components, hooks, and interfaces, and follows a modularity pattern that makes it easy to extend and reuse code across the application. |
| **✔️ Testing and Quality Assurance** | The codebase lacks any significant testing and quality assurance measures, apart from a simple ESLint configuration with some basic rules to catch syntax errors and enforce coding standards. |
| **⚡️ Performance and Optimization** | The codebase includes some basic performance optimization techniques, such as code splitting, lazy loading, and caching of resources, but could benefit from more advanced techniques such as server-side rendering, dynamic imports, and image optimization. |
| **🔒 Security Measures** | The codebase includes some basic security measures, such as using HTTPS, hashing passwords, and sanitizing user input, but could benefit from more advanced measures such as implementing OAuth or other authentication protocols, and protecting against common vulnerabilities such as SQL injections and cross-site scripting. |
| **🔄 Version Control and Collaboration** | The codebase uses Git for version control and GitHub for collaboration, including pull requests, code reviews, and issue tracking. |
| **🔌 External Integrations** | The codebase integrates with several external APIs, including YouTube, Reddit, and Twitter, and uses external libraries such as Tailwind CSS, React Icons, and Next.js Image. |
| **📈 Scalability and Extensibility** | The codebase is designed to be scalable and extensible, with a modular architecture, reusable components, and a flexible configuration system using Next.js, TypeScript, and Tailwind CSS. However, it lacks some key features for managing state, such as Redux or MobX, which could limit its scalability for complex applications. |

---


<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## 📂 Project Structure


```bash
repo
├── README.md
└── curious
    ├── README.md
    ├── hooks
    │   ├── useColorMode.tsx
    │   └── useLocalStorage.tsx
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── PP-test.png
    │   ├── favicon.ico
    │   └── sf-dream.png
    ├── src
    │   ├── components
    │   │   ├── card.tsx
    │   │   ├── head.tsx
    │   │   ├── header.tsx
    │   │   ├── input.tsx
    │   │   ├── loadingSkeleton.tsx
    │   │   ├── post.tsx
    │   │   └── sidebar.tsx
    │   ├── pages
    │   │   ├── _app.tsx
    │   │   ├── _document.tsx
    │   │   ├── feed.tsx
    │   │   ├── index.tsx
    │   │   ├── profile.tsx
    │   │   ├── search.tsx
    │   │   ├── signin.tsx
    │   │   └── signup.tsx
    │   ├── styles
    │   │   └── globals.css
    │   └── types
    │       └── props.ts
    ├── tailwind.config.js
    └── tsconfig.json

9 directories, 30 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 🧩 Modules

<details closed><summary>Components</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                   | Module                                     |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| post.tsx            | The code defines a functional component called Post that renders a set of Card components in a grid. The component receives and sets its own props, including a default username and prompt. It also displays a timestamp and a horizontal rule. The Card component itself takes in several props that define its visual and text content.                                                | curious/src/components/post.tsx            |
| card.tsx            | This code snippet exports a React functional component called "Card" that takes in a set of props including a title, a description, an image, and a URL. It returns an anchor element with the provided URL and a styled card with the provided image, title, and description.                                                                                                            | curious/src/components/card.tsx            |
| head.tsx            | The provided code is a React component that dynamically sets the page title and meta tags based on the current URL path using the useRouter hook from Next.js. It also includes the website's favicon image and Open Graph metadata for social sharing.                                                                                                                                   | curious/src/components/head.tsx            |
| loadingSkeleton.tsx | Error generating file summary. Exception:                                                                                                                                                                                                                                                                                                                                                 | curious/src/components/loadingSkeleton.tsx |
| header.tsx          | The code snippet is a React component for a website header. It uses the Next.js framework and various React hooks and interfaces to handle dynamic rendering of header content based on the current URL path, as well as toggling a sidebar menu for certain pages. The header includes links to search, feed, and profile pages, as well as sign up and sign in buttons on the homepage. | curious/src/components/header.tsx          |
| sidebar.tsx         | This code snippet is a React component for a sidebar menu with options to switch between light and dark mode, clear search history, and navigate to the user's profile. It uses the useRouter and useState hooks, and conditionally renders based on the isSidebarOpen prop. The component also imports and uses several icons from the react-icons library.                              | curious/src/components/sidebar.tsx         |
| input.tsx           | The provided code snippet defines a React component called Input that creates an input element with a label. The Input component takes in some props such as id, onChange, value, label, and type and renders an input element with those props. When the user interacts with the input element, the label moves up to become a placeholder.                                              | curious/src/components/input.tsx           |

</details>

<details closed><summary>Curious</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                 | Module                     |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
| tailwind.config.js | This code snippet exports a configuration file for Tailwind CSS with content paths and themes for dark and light modes. It also extends keyframes and animations, sets grid template columns and rows, defines custom colors, and specifies width. Finally, it includes plugins.                        | curious/tailwind.config.js |
| next.config.js     | The provided code snippet is a Next.js configuration file that sets the `reactStrictMode` option to `true`. This option enforces stricter React standards, which can help catch potential issues early in development. The configuration object is then exported to be used in the Next.js application. | curious/next.config.js     |
| postcss.config.js  | The provided code exports a configuration object that includes two plugins: Tailwind CSS and Autoprefixer. Both plugins are used in conjunction with a build tool, and are responsible for generating optimized and compatible CSS styles based on the development code.                                | curious/postcss.config.js  |

</details>

<details closed><summary>Hooks</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                        | Module                            |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| useColorMode.tsx    | The code snippet is a custom React hook called "useColorMode" that enables toggling between light and dark theme modes with the help of "useLocalStorage" hook. It uses useEffect to add/remove a "dark" class to the body according to the current color mode and returns the current color mode and a function to set it.                                                                                                                    | curious/hooks/useColorMode.tsx    |
| useLocalStorage.tsx | The code defines a custom hook called "useLocalStorage" that allows for storing stateful data in the browser's local storage. It uses the "useState" and "useEffect" hooks from React to manage updates to the stored value and to synchronize the value between the local storage and the component's state. The hook accepts a key and an initial value as arguments and returns an array with the stored value and a function to update it. | curious/hooks/useLocalStorage.tsx |

</details>

<details closed><summary>Pages</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Module                          |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| index.tsx     | The code defines a React component for a homepage that displays a typewriter effect with a rotating list of phrases, using the'react-simple-typewriter' library. It also includes a header and some static text. A disabled button and some commented-out sections suggest that additional functionality may be added later.                                                                                                                                            | curious/src/pages/index.tsx     |
| feed.tsx      | The code is a React component that renders a page with a header, a sidebar, and a feed of posts. It uses useState hooks to manage state for user input prompt, resources, loading, and sidebar history. The page also contains a loading skeleton for when resources are being fetched.                                                                                                                                                                                 | curious/src/pages/feed.tsx      |
| search.tsx    | The provided code snippet is a React functional component that fetches and displays resources based on a user's input prompt. It includes state hooks for the prompt, resources, loading, and history, as well as event handlers for updating the prompt and fetching resources. The component also includes subcomponents for displaying loading skeletons, page header and sidebar, and cards for displaying the fetched resources from YouTube, Reddit, and Twitter. | curious/src/pages/search.tsx    |
| _document.tsx | The provided code snippet is a default Next.js `Document` component that defines the structure of the HTML document returned by the server. It imports `Html`, `Head`, `Main`, and `NextScript` components from the Next.js package and includes them in the HTML document structure. The `Html` component includes the `lang` attribute with the value of `en`.                                                                                                        | curious/src/pages/_document.tsx |
| signup.tsx    | The code is a React component for user registration with error handling and feedback. It uses Next.js and fetches a REST API to register a user with their full name, email, password, and username. It also includes input validation and a toast notification system for displaying success or error messages.                                                                                                                                                        | curious/src/pages/signup.tsx    |
| profile.tsx   | The code imports various components and libraries, including Next.js Image and React, and defines a Profile component that displays user profile data, such as name, username, bio, followers, and following, along with profile and header images. The component is fully responsive and includes conditional rendering of certain props.                                                                                                                              | curious/src/pages/profile.tsx   |
| _app.tsx      | The provided code snippet is an implementation of a Next.js application's main App component. It uses the next/app package to receive and render the page component and its associated page props. It also imports the Analytics component from the @vercel/analytics package, which provides analytics functionality for Next.js applications, although it is currently commented out.                                                                                 | curious/src/pages/_app.tsx      |
| signin.tsx    | The code snippet is a React component for handling user authentication. It includes components for displaying page head, header, input fields, and a link for signing up. It also has functions for logging in and displaying toast notifications. Upon successful login, the user is redirected to the search page.                                                                                                                                                    | curious/src/pages/signin.tsx    |

</details>

<details closed><summary>Styles</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                                                                   | Module                         |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
| globals.css | This code snippet sets the base, components, and utilities for the Tailwind CSS framework. The `html` and `body` elements are styled to use a variety of system fonts, have a tab size of 4, and take up the full height and width of the viewport. The `#__next` element is applied with the `h-full`, `w-full`, `flex`, and `flex-col` utility classes. | curious/src/styles/globals.css |

</details>

<details closed><summary>Types</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                   | Module                     |
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
| props.ts | The code snippet defines various TypeScript types for different objects used in the application. These types include SidebarProps, SubjectsList, YoutubeVideoSimple, CleanGoogleResults, AllSourcesCleanGoogleResult, Prompt, and Resources. These types specify the structure and data types for the respective objects. | curious/src/types/props.ts |

</details>

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - [📌  PREREQUISITE-1]
> - [📌  PREREQUISITE-2]
> - ...

### 🖥 Installation

1. Clone the curious-front repository:
```sh
git clone https://github.com/tchardonnens/curious-front
```

2. Change to the project directory:
```sh
cd curious-front
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using curious-front

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] [📌  Task 1: Implement X]
> - [ ] [📌  Task 2: Refactor Y]
> - [ ] [📌  Task 3: Optimize Z]
> - [ ] ...


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a pull request to the original repository.
Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `[📌  INSERT-LICENSE-TYPE]` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - [📌  List any resources, contributors, inspiration, etc.]

---
