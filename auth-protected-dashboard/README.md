# Auth-Protected Dashboard (Next.js App Router)

A secure, server-first authentication dashboard built with Next.js App Router, demonstrating modern best practices such as middleware-based route protection, Server Actions, HTTP-only cookies, and server-side redirects.

---

## 🔧 Tech Stack
- Next.js (App Router)
- TypeScript
- Server Actions
- Middleware
- HTTP-only cookies
- Tailwind CSS

---

## ✨ Features

- 🔐 Server-side authentication
    - Login & login using Server Actions
    - Auth state stored in HTTP-only cookies
- 🛡 Route protection with middleware
    - Unauthorized users are redirected before render
    - No client-side auth checks or flicker
- 🧠 Server-first architecture
    - Zero client auth state
    - No localStorage, no useEffect guards
- 🧩 Clean project structure
    - Feature-based organization
    - Centralized auth logic
- ⚡️ Modern Next.js patterns
    - App Router
    - Layouts
    - Metadata
    - Server Components by default

---

## 📂 Project Structure

```code
my-next-app/
└── src/
    ├── app/
    │    ├── login/
    │    ├── page.tsx
    │    │   └── layout.tsx
    │    ├── dashboard/
    │    │   ├── page.tsx
    │    │   └── layout.tsx
    │    ├── layout.tsx
    │    └── page.tsx
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Sidebar.tsx
    │   └── LogoutButton.tsx
    ├── lib/
    │   └── auth-actions.ts
    └── middleware.ts
```

---

## 🔁 Authentication Flow
1.	User tries to access /dashboard
2.	Middleware checks for authToken cookie
3.	If missing → redirect to /login
4.	Login form submits to a Server Action
5.	Server sets HTTP-only cookie and redirects
6.	Middleware allows access to dashboard
7.	Logout clears cookie and redirects back to login

---

## 🧠 Key Learnings
-	Why authentication should live on the server
-	How middleware prevents unauthorized rendering
-	When to use Server Actions vs API routes
-	How Next.js handles routing, caching, and redirects

---

## 📌 Notes
This project intentionally avoids:
-	Client-side auth state
-	localStorage
-	useEffect-based redirects

To demonstrate secure, production-ready patterns.

---

## 🚀 Getting Started
```bash
npm install
npm run dev
```

---

## 👤 Author
**Seth Nkwo**
