# React Router Nested Route App

React Routerを使用して、**ネストルート・`<Outlet>`・`NavLink`** の基本的な使い方を学習するための練習アプリです。

## 1. 学習内容

* ネストルート
* `<Outlet>` の使い方
* `NavLink` の使い方
* `NavLink` の `isActive`
* 相対パスによるルーティング
* TypeScriptでのReact Router実装

---

## 2. 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS
* Vite

---

## 3. アプリ構成

```text
src/
├── components/
│   └── DashboardLayout.tsx
│
├── pages/
│   ├── Profile.tsx
│   └── Settings.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

### DashboardLayout.tsx

Dashboardの共通レイアウトを担当します。

```text
DashboardLayout
├── Navigation
│   ├── Profile
│   └── Settings
│
└── Outlet
    ├── Profile
    └── Settings
```

---

## 4. ルーティング

```text
/dashboard/profile
/dashboard/settings
```

### `/dashboard/profile`

```text
DashboardLayout
├── Profile
└── Outlet
     └── Profile
```

### `/dashboard/settings`

```text
DashboardLayout
├── Settings
└── Outlet
     └── Settings
```

---

## 5. `<Outlet>`

`<Outlet>` は、親Routeの中でマッチした**子Routeを表示する場所**です。

```tsx
const DashboardLayout = () => {
  return (
    <div>
      <nav>
        ...
      </nav>

      <Outlet />
    </div>
  );
};
```

ルーティング側では、親Routeの中に子Routeを定義します。

```tsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

`/dashboard/profile` にアクセスすると、`Profile` が `<Outlet />` の位置に表示されます。

---

## 6. `NavLink`

`NavLink` は、現在のURLがリンク先と一致しているかを判定できます。

```tsx
<NavLink
  to="profile"
  className={({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : "text-gray-500"
  }
>
  Profile
</NavLink>
```

`isActive` が `true` の場合、現在表示しているページとしてスタイルを変更できます。

---

## 7. 相対パス

親Routeが、

```text
/dashboard
```

の場合、

```tsx
<NavLink to="profile">Profile</NavLink>
```

は、

```text
/dashboard/profile
```

として解決されます。

同様に、

```tsx
<NavLink to="settings">Settings</NavLink>
```

は、

```text
/dashboard/settings
```

になります。

---

## 8. App.tsx

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./components/DashboardLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 9. DashboardLayout.tsx

```tsx
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-500"
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-500"
          }
        >
          Settings
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
```

---

## 10. 動作確認

開発サーバーを起動します。

```bash
npm run dev
```

以下のURLにアクセスします。

```text
http://localhost:5173/dashboard/profile
```

```text
http://localhost:5173/dashboard/settings
```

ProfileとSettingsを切り替え、`NavLink` のアクティブスタイルが切り替わることを確認します。

---

## 11. 重要ポイント

### ネストルート

```tsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

親Routeの中に子Routeを定義します。

### Outlet

```tsx
<Outlet />
```

子Routeを表示する場所です。

### NavLink

```tsx
<NavLink to="profile">
```

通常の`Link`と同じようにページ遷移できますが、`isActive`によって現在のページを判定できます。

### 構造

```text
親Route
  ↓
DashboardLayout
  ↓
Outlet
  ↓
子Route
  ↓
Profile / Settings
```

---

## 12. まとめ

このアプリでは、React Routerの**ネストルート**を使って、Dashboardの共通レイアウトを作成しました。

```text
/dashboard
    │
    ▼
DashboardLayout
    │
    ├── NavLink
    │    ├── Profile
    │    └── Settings
    │
    └── Outlet
         │
         ├── Profile
         └── Settings
```

`<Outlet>` はReactの`children`と似ていますが、React Routerでは**ネストされた子Routeを表示するための場所**として使用します。
