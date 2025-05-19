# Admin Dashboard

A responsive and modern Admin Dashboard built with **React 19**, **TypeScript**, and **Tailwind CSS**, demonstrating component-based architecture, API integration, state management, performance optimization, and responsive UI/UX.

## Live Demo

🔗 [View Live Site](https://admin-dashboard-iota-rouge.vercel.app/)  
💡 You can **sign in with any email and password** to access the dashboard.

# 1. Clone the Repository

1. git clone https://github.com/jonwarsunil/admin-dashboard.git
2. cd admin-dashboard
3. Yarn
4. Yarn dev

## 📸 Overview

This Admin Dashboard includes:

- Sidebar with navigation (Dashboard, Users, Reports)
- Top navbar with profile and notification icons
- Dashboard summary cards
- Paginated and filterable user table
- Dark mode toggle
- Error and loading states
- Mobile-responsive design

---

## 📦 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM v7**
- **Lucide React** (for icons)
- **React Icons**
- **Recharts** (charts)
- **ESLint** (linting)

---

## 📁 Project Structure

```bash
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Button.tsx
│   │   ├── DataTable.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Input.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Spinner.tsx
│   │   ├── StatCard.tsx
│   │   ├── StatusFilter.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── UserGrowthChart.tsx
├── features/
│   ├── dashboard/
│   │   ├── DashboardPage.tsx
│   │   ├── dashboardSlice.ts
│   │   └── DashboardSummary.tsx
│   ├── reports/
│   │   └── ReportsPage.tsx
├── hooks/
│   ├── useFetchUsers.ts
│   ├── useFilter.ts
│   └── useUser.tsx
├── pages/
│   ├── Setting.tsx
│   ├── SignIn.tsx
│   └── User.tsx
├── types/
├── App.css




```
