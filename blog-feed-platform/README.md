# Next.js Blog Mini Project

A full-stack blog application built with Next.js App Router and Prisma, focused on modern server-first architecture, custom authentication, and clean UX flows.

This project was built intentionally as a learning + portfolio mini project to demonstrate real-world patterns used in production Next.js apps.

---

## 🚀 Features

- Server Components for data fetching
- Server Actions for all mutations (create, update, delete, auth)
- Custom session-based authentication
- HttpOnly cookies (no client-side auth state)
- Middleware route protection
- Ownership-based authorization (edit/delete only by author)
- Optimistic navigation with <Link />
- Cache revalidation (revalidatePath)
- Error boundaries & not-found handling
- No page reloads

---

## 🧠 Key Concepts Demonstrated

- Server vs Client Component boundaries
- Server Actions ('use server')
- Form actions & progressive enhancement
- Custom session auth (no libraries)
- Middleware authorization logic
- Secure cookie handling
- UX-driven redirects & navigation flow
- Prisma data modeling & queries
- Intentional feature scoping

---

## 🏗 Project Structure

```code
blog-feed-platform/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── posts/
│   │   │   └── [id]/
│   │   │       ├── edit/
│   │   │       ├── page.tsx
│   │   │       └── layout.tsx
│   │   ├── actions.ts
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AddPostForm.tsx
│   │   ├── EditPostForm.tsx
│   │   ├── DeletePostButton.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostList.tsx
│   │   ├── SlowSection.tsx
│   │   ├── NewPostButton.tsx
│   │   ├── HomeClient.tsx
│   │   └── FeaturedPostList.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── posts.ts
│   │   ├── auth.ts
│   │   ├── password.ts
│   │   └── types.ts
│   └── middleware.ts
```

---

## 🔐 Authentication & Authorization

This project uses custom session-based authentication instead of third-party auth libraries.

**How it works:**

- Login creates a session record in the database
- A secure HttpOnly cookie stores the session token
- Middleware validates sessions on every request
- Expired or invalid sessions are rejected
- Ownership checks are enforced server-side for edits/deletes

**Why custom auth?**    
- To deeply understand auth fundamentals
- To demonstrate security awareness
- To avoid hiding logic behind abstractions

---

## 🗄 Database & ORM

- Prisma ORM
- SQLite (for simplicity in a mini project)
- Models include:
    - User
    - Post
    - Session

All data access is server-only.

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Prisma
- SQLite
- Tailwind CSS

---

## ❌ Intentional Omissions

These were deliberate decisions:
- ❌ No roles (single-author ownership model)
- ❌ No OAuth (focus on auth fundamentals)
- ❌ No client-side auth state
- ❌ No state management libraries

The goal was correctness, clarity, and fundamentals, not feature bloat.

---

## 🚀 Getting Started
```bash
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

---

## 👤 Author
**Seth Nkwo**

Built as a learning-focused mini project to master:
- Modern Next.js architecture
- Server-first thinking
- Authentication & authorization fundamentals
- UX-driven full-stack design
