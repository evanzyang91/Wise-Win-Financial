"use client"

import { AdminRoute } from "@/components/admin-route"
import { Navbar } from "@/components/navbar"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Settings, BarChart3, Shield } from "lucide-react"

export default function AdminDashboardPage() {
  const { user, role } = useAuth()
  const { language } = useLanguage()

  return (
    <AdminRoute>
      <main className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-24 pb-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">
                {language === "en" ? "Admin Dashboard" : "管理员控制台"}
              </h1>
            </div>
            <p className="text-muted-foreground">
              {language === "en" 
                ? "Welcome back, administrator. Manage your application from here." 
                : "欢迎回来，管理员。从这里管理您的应用程序。"}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Badge variant="default" className="capitalize">
                {role}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {user?.email}
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {language === "en" ? "Total Users" : "总用户数"}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +20% {language === "en" ? "from last month" : "较上月"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {language === "en" ? "Applications" : "申请数"}
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-muted-foreground">
                  +12% {language === "en" ? "from last month" : "较上月"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {language === "en" ? "Revenue" : "营收"}
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground">
                  +8% {language === "en" ? "from last month" : "较上月"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {language === "en" ? "Active Now" : "当前活跃"}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "users online" : "用户在线"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Quick Actions" : "快速操作"}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "Common administrative tasks" 
                  : "常用管理任务"}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Button variant="outline" className="justify-start h-auto py-4">
                <Users className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">
                    {language === "en" ? "Manage Users" : "管理用户"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === "en" ? "View and edit user accounts" : "查看和编辑用户账户"}
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4">
                <FileText className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">
                    {language === "en" ? "View Applications" : "查看申请"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === "en" ? "Review pending applications" : "审核待处理申请"}
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4">
                <Settings className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">
                    {language === "en" ? "System Settings" : "系统设置"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === "en" ? "Configure application settings" : "配置应用程序设置"}
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4">
                <BarChart3 className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">
                    {language === "en" ? "Analytics" : "数据分析"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === "en" ? "View detailed reports" : "查看详细报告"}
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4">
                <Shield className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">
                    {language === "en" ? "Security" : "安全"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === "en" ? "Manage security settings" : "管理安全设置"}
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4">
                <Users className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">
                    {language === "en" ? "Roles & Permissions" : "角色与权限"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === "en" ? "Manage user roles" : "管理用户角色"}
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </AdminRoute>
  )
}
