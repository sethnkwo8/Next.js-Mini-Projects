# Next.js Blog Mini Project

A modern Next.js 15+ blog application demonstrating Server Components,
Server Actions, authentication with middleware, and clean client/server separation.

---

## 🚀 Features

- Server Components for data fetching
- Client Components for UI interactivity
- Server Actions for mutations (login, logout, create post)
- Cookie-based authentication
- Middleware route protection
- No client-side auth logic
- No page reloads
- Optimistic navigation with `<Link />`

---

## 🧠 Key Concepts Demonstrated

- Server vs Client Components
- Server Actions (`'use server'`)
- Form Actions
- Middleware authentication
- Route protection
- Cookie handling
- Layouts & metadata
- Cache revalidation

---

## 🏗 Project Structure

```code
blog-feed-platform/
└── src/
    ├── app/
    │    ├── login/
    │    │   ├── actions.ts
    │    │   ├── page.tsx
    │    │   └── layout.tsx
    │    ├── posts/
    │    │   └── [id]/
    │    │       ├── page.tsx
    │    │       ├── loading.tsx
    │    │       └── layout.tsx
    │    ├── actions.ts
    │    ├── globals.css
    │    ├── layout.tsx
    │    └── page.tsx
    ├── components/
    │   ├── AddPostForm.tsx
    │   ├── FeaturedPostsList.tsx
    │   ├── HomeClient.tsx
    │   ├── NewPostButton.tsx
    │   ├── PostCard.tsx
    │   ├── PostList.tsx
    │   └── SlowSection.tsx
    ├── lib/
    │   ├── posts.ts
    │   └── types.ts
    └── middleware.ts
```

---

## 🔐 Authentication Flow

- Login sets an HttpOnly cookie via Server Action
- Middleware checks auth before rendering pages
- Unauthorized users are redirected to `/login`
- Authenticated users are redirected away from `/login`
- Logout clears cookie server-side

---

## 📡 Data Source

Posts are fetched from:
```
https:/jsonplaceholder.typicode.com/posts
```
Used for demonstration purposes.

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Server Actions
- Middleware

---

## 📌 Next Steps

- Add database (Prisma)
- Persist users & posts
- Add ownership and relations
- Integrate real authentication
- Build full-stack Next.js + DRF portfolio project

---

## 🚀 Getting Started
```bash
npm install
npm run dev
```

---

## 👤 Author
**Seth Nkwo**

Built as a learning-focused mini project to master modern Next.js architecture.
