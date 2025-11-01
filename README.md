# Bineka

> Project by Super nnova Team

---

## Table of Contents
- [Getting Started](#getting-started)
- [Cara Menjalankan Project](#cara-menjalankan-project)
- [Struktur Project](#struktur-project)
- [Cara Menambahkan Halaman Baru](#cara-menambahkan-halaman-baru)

---

## Getting Started

### Prerequisites
Pastikan sudah install:
- **Node.js** (v18 atau lebih baru)
- **npm** atau **yarn**

---

## Cara Menjalankan Project

Setelah clone dan install dependencies:

1. **Development Mode**
   ```bash
   npm run dev
   ```
   - Server akan jalan di `http://localhost:5173`
   - Hot reload aktif (otomatis refresh kalau ada perubahan)
   - Console akan menampilkan errors/warnings

2. **Preview Production Build**
   ```bash
   npm run build
   npm run preview
   ```
   - Test versi production sebelum deploy
   - Lebih cepat dari dev mode

3. **Berhenti Server**
   - Tekan `Ctrl + C` di terminal
   - Atau Ketik "q" di terminal

---

## 📁 Struktur Project

```
bineka/
├── src/
│   ├── main.jsx          # Entry point, setup React Router
│   ├── App.jsx           
│   ├── index.css         
│   │
│   ├── pages/            # Halaman-halaman aplikasi
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   │
│   └── assets/           # Images, fonts, dll
│
├── public/               # Static files
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

---

## Cara Menambahkan Halaman Baru

### 1. Buat File Halaman Baru

Buat file di folder `src/pages/`, contoh `Profile.jsx`:

```jsx
import { Icon } from '@iconify/react'

function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon="mdi:account-circle" className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">Profile Page</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p>This is your profile page content.</p>
      </div>
    </div>
  )
}

export default Profile
```

### 2. Tambahkan Route di `App.jsx`

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'  // Import halaman baru

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />  {/* Route baru */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
```

### 3. Tambahkan Link di Navigation

Di `Navbar.jsx` atau component navigation:

```jsx
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

<Link to="/profile" className="flex items-center gap-2">
  <Icon icon="mdi:account" className="w-5 h-5" />
  Profile
</Link>
```

**Done!** Akses di url `/profile`

---

### Tailwind classes tidak work
1. Pastikan file ada di `tailwind.config.js` content
2. Restart dev server
3. Check `index.css` sudah import Tailwind directives

---

## 👥 Team

**Super nnova Team**