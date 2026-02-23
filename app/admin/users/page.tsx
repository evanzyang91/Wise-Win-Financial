"use client"

import { useState } from "react"
import { AdminRoute } from "@/components/admin-route"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Search, UserPlus, Shield, MoreVertical } from "lucide-react"
import Link from "next/link"

// Mock data - replace with real data from Supabase
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "active", createdAt: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin", status: "active", createdAt: "2024-01-10" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user", status: "inactive", createdAt: "2024-02-01" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "user", status: "active", createdAt: "2024-02-05" },
]

export default function AdminUsersPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AdminRoute>
      <main className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-24 pb-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold">
                  {language === "en" ? "User Management" : "用户管理"}
                </h1>
              </div>
              <p className="text-muted-foreground">
                {language === "en" 
                  ? "Manage user accounts, roles, and permissions" 
                  : "管理用户账户、角色和权限"}
              </p>
            </div>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              {language === "en" ? "Add User" : "添加用户"}
            </Button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/admin" className="hover:text-foreground">
              {language === "en" ? "Admin" : "管理"}
            </Link>
            <span>/</span>
            <span className="text-foreground">
              {language === "en" ? "Users" : "用户"}
            </span>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={language === "en" ? "Search users..." : "搜索用户..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  {language === "en" ? "Filter" : "筛选"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "en" ? "All Users" : "所有用户"}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? `Showing ${filteredUsers.length} of ${mockUsers.length} users` 
                  : `显示 ${filteredUsers.length} / ${mockUsers.length} 用户`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted">
                    <tr>
                      <th className="px-6 py-3">{language === "en" ? "Name" : "姓名"}</th>
                      <th className="px-6 py-3">{language === "en" ? "Email" : "邮箱"}</th>
                      <th className="px-6 py-3">{language === "en" ? "Role" : "角色"}</th>
                      <th className="px-6 py-3">{language === "en" ? "Status" : "状态"}</th>
                      <th className="px-6 py-3">{language === "en" ? "Created" : "创建时间"}</th>
                      <th className="px-6 py-3">{language === "en" ? "Actions" : "操作"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-muted/50">
                        <td className="px-6 py-4 font-medium">{user.name}</td>
                        <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                        <td className="px-6 py-4">
                          <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                            {user.role === "admin" && <Shield className="mr-1 h-3 w-3" />}
                            {user.role}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{user.createdAt}</td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </AdminRoute>
  )
}
