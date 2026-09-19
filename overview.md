# 課題

### 問題文

`Dashboard` ページを作成し、その中にネストされたルートで `Profile` と `Settings` を表示できるようにしてください。

共通レイアウトとして `Dashboard` にナビゲーションを持たせます。

### 条件

1. 親ルート `/dashboard` に `<Outlet>` を使用する
2. 子ルートは `/dashboard/profile` と `/dashboard/settings`
3. ナビゲーションは `flex gap-4 p-2 bg-gray-200`
4. TypeScriptで作成する