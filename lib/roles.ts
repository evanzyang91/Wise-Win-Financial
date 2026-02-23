/**
 * User Role System
 * 
 * This file defines user roles and provides helper functions
 * to check user permissions.
 */

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
} as const

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]

/**
 * Check if user has admin privileges
 */
export function isAdmin(role?: string): boolean {
  return role === USER_ROLES.ADMIN || role === USER_ROLES.SUPER_ADMIN
}

/**
 * Check if user has super admin privileges
 */
export function isSuperAdmin(role?: string): boolean {
  return role === USER_ROLES.SUPER_ADMIN
}

/**
 * Check if user has at least a specific role level
 */
export function hasRole(userRole?: string, requiredRole?: string): boolean {
  if (!userRole || !requiredRole) return false
  
  const roleHierarchy = {
    [USER_ROLES.USER]: 0,
    [USER_ROLES.ADMIN]: 1,
    [USER_ROLES.SUPER_ADMIN]: 2,
  }
  
  const userLevel = roleHierarchy[userRole as UserRole] ?? -1
  const requiredLevel = roleHierarchy[requiredRole as UserRole] ?? -1
  
  return userLevel >= requiredLevel
}

/**
 * Get user role from user object
 */
export function getUserRole(user: any): UserRole | null {
  // Check app_metadata first (set by Supabase admin)
  if (user?.app_metadata?.role) {
    return user.app_metadata.role
  }
  
  // Check user_metadata (set by application)
  if (user?.user_metadata?.role) {
    return user.user_metadata.role
  }
  
  // Default to regular user
  return USER_ROLES.USER
}
