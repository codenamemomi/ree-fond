// REE-FOND API Reference - Complete Endpoint Documentation
// Generated from backend routes - Version 1.1
// Standardized on trailing slashes for collection and action routes.

export const apiData = [
    {
        category: 'Authentication',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/auth/login',
                desc: 'Login - Authenticate user and return JWT token',
                req: `{\n  "email": "user@example.com",\n  "password": "string"\n}`,
                res: `{\n  "access_token": "string",\n  "refresh_token": "string",\n  "token_type": "bearer",\n  "user": {\n    "name": "string",\n    "email": "user@example.com",\n    "id": "uuid",\n    "role": "ADMIN"\n  }\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/refresh',
                desc: 'Refresh Token - Get a new access token using a refresh token',
                req: `{\n  "refresh_token": "string"\n}`,
                res: `{\n  "access_token": "string",\n  "refresh_token": "string",\n  "token_type": "bearer",\n  "user": { ... }\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/register',
                desc: 'Register - Register a new user',
                req: `{\n  "name": "string",\n  "email": "user@example.com",\n  "password": "string",\n  "role": "ACCOUNTANT",\n  "organization_id": "uuid"\n}`,
                res: `{\n  "id": "uuid",\n  "name": "string",\n  "email": "user@example.com",\n  "role": "ACCOUNTANT"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/register-with-organization',
                desc: 'Register With Organization - Register an organization with an admin user',
                req: `{\n  "name": "Company Name",\n  "type": "accounting_firm",\n  "admin_user": {\n    "name": "Admin Name",\n    "email": "admin@example.com",\n    "password": "string"\n  }\n}`,
                res: `{\n  "organization": { "id": "uuid", "name": "Company Name" },\n  "user": { "id": "uuid", "email": "admin@example.com", "role": "ADMIN" }\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/auth/me',
                desc: 'Get Current User Info - Get current authenticated user\'s information',
                req: null,
                res: `{\n  "id": "uuid",\n  "name": "string",\n  "email": "user@example.com",\n  "role": "ADMIN",\n  "organization_id": "uuid"\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/auth/me',
                desc: 'Update Current User - Update current user\'s information',
                req: `{\n  "name": "Updated Name",\n  "email": "updated@example.com"\n}`,
                res: `{ "id": "uuid", "name": "Updated Name", "email": "updated@example.com" }`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/change-password',
                desc: 'Change Password - Change current user\'s password',
                req: `{\n  "current_password": "string",\n  "new_password": "string"\n}`,
                res: `{\n  "message": "Password changed successfully"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/verify-email/{token}',
                desc: 'Verify Email - Verify user\'s email',
                req: null,
                res: `{\n  "message": "Email verification endpoint"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/forgot-password',
                desc: 'Forgot Password - Request password reset',
                req: `{\n  "email": "user@example.com"\n}`,
                res: `{\n  "message": "Password reset email sent"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/auth/google/login',
                desc: 'Google Login - Redirect to Google for authentication',
                req: null,
                res: null
            }
        ]
    },
    {
        category: 'Admin',
        endpoints: [
            {
                method: 'GET',
                path: '/api/v1/admin/dashboard/stats',
                desc: 'Get Dashboard Stats - Overview statistics for the admin dashboard',
                req: null,
                res: `{\n  "total_users": 150,\n  "total_taxpayers": 5000,\n  "total_filings": 12000,\n  "average_compliance_score": 88.5\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/admin/audit-logs',
                desc: 'Get Audit Logs - Paginated system audit logs',
                req: null,
                res: `[\n  {\n    "id": "uuid",\n    "user_id": "uuid",\n    "entity_type": "filing",\n    "action": "create",\n    "timestamp": "2026-03-07T14:30:00Z"\n  }\n]`
            }
        ]
    },
    {
        category: 'Organizations',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/organizations/',
                desc: 'Create Organization - Create a new organization (ADMIN only)',
                req: `{\n  "name": "string",\n  "type": "accounting_firm",\n  "state": "Lagos",\n  "contact_email": "user@example.com"\n}`,
                res: `{\n  "id": "uuid",\n  "name": "string",\n  "type": "accounting_firm",\n  "status": "pending"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/',
                desc: 'Get Organizations - List of organizations with filtering and pagination',
                req: null,
                res: `{\n  "items": [],\n  "total": 0,\n  "page": 1,\n  "size": 20,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/{organization_id}',
                desc: 'Get Organization - Detailed organization information',
                req: null,
                res: `{\n  "id": "uuid",\n  "name": "string",\n  "users": [],\n  "settings": {},\n  "documents": [],\n  "recent_activities": []\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/organizations/{organization_id}',
                desc: 'Update Organization - Update organization information',
                req: `{\n  "name": "Updated Organization",\n  "contact_email": "updated@example.com"\n}`,
                res: `{\n  "id": "uuid",\n  "name": "Updated Organization"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/verify',
                desc: 'Verify Organization - Mark organization as verified (ADMIN only)',
                req: `{\n  "is_verified": true,\n  "verification_notes": "KYC Approved"\n}`,
                res: `{\n  "id": "uuid",\n  "is_verified": true\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/subscription',
                desc: 'Update Subscription - Change organization subscription plan (ADMIN only)',
                req: `{\n  "subscription_plan": "Growth",\n  "subscription_end_date": "2027-01-01"\n}`,
                res: `{\n  "id": "uuid",\n  "subscription_plan": "Growth"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/invitations',
                desc: 'Create Invitation - Invite user to organization',
                req: `{\n  "email": "user@example.com",\n  "role": "ACCOUNTANT"\n}`,
                res: `{\n  "id": "uuid",\n  "token": "string",\n  "status": "pending"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/invitations/accept',
                desc: 'Accept Invitation - Accept organization invite',
                req: `{\n  "token": "string"\n}`,
                res: `{\n  "message": "Invitation accepted successfully",\n  "user_id": "uuid"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/stats/summary',
                desc: 'Get Summary Stats - General organization statistics',
                req: null,
                res: `{\n  "total_organizations": 100,\n  "active_subscriptions": 85\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/{organization_id}/dashboard',
                desc: 'Get Dashboard Data - Aggregate data for organization dashboard',
                req: null,
                res: `{\n  "overview": {},\n  "recent_activities": [],\n  "top_taxpayers": []\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/credit',
                desc: 'Add Credit - Add funds to organization balance (ADMIN only)',
                req: `{\n  "amount": 50000.00,\n  "notes": "Annual credit reward"\n}`,
                res: `{\n  "id": "uuid",\n  "credit_balance": 50000.00\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/search/tin/{tax_identification_number}',
                desc: 'Search by TIN - Find organization by Tax Identification Number',
                req: null,
                res: `{ "id": "uuid", "name": "Org Name", "tin": "123456789" }`
            }
        ]
    },
    {
        category: 'Taxpayers',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/taxpayers/',
                desc: 'Create Taxpayer - Register a new taxpayer (Supports 2026-ready BVN, NIN, Residency)',
                req: `{\n  "full_name": "John Doe",\n  "tin": "1234567890",\n  "bvn": "22222222222",\n  "nin": "33333333333",\n  "residency_status": "resident",\n  "tax_type": "PAYE",\n  "state": "Lagos"\n}`,
                res: `{\n  "id": "uuid",\n  "full_name": "John Doe",\n  "tin": "1234567890",\n  "status": "active"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/',
                desc: 'Get Taxpayers - Paginated list with filtering by state, type, and verification status',
                req: null,
                res: `{\n  "items": [],\n  "total": 0,\n  "page": 1\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/{taxpayer_id}',
                desc: 'Get Taxpayer - Detailed taxpayer profile including filing and refund counts',
                req: null,
                res: `{\n  "id": "uuid",\n  "full_name": "John Doe",\n  "filing_count": 5,\n  "active_refund_cases": 1\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/taxpayers/{taxpayer_id}',
                desc: 'Update Taxpayer - Update profile information',
                req: `{\n  "full_name": "Updated Name",\n  "email": "updated@example.com"\n}`,
                res: `{ "id": "uuid", "full_name": "Updated Name" }`
            },
            {
                method: 'DELETE',
                path: '/api/v1/taxpayers/{taxpayer_id}',
                desc: 'Delete Taxpayer - Soft or hard delete a taxpayer record',
                req: null,
                res: null
            },
            {
                method: 'POST',
                path: '/api/v1/taxpayers/{taxpayer_id}/verify',
                desc: 'Verify Taxpayer - Mark record as verified',
                req: null,
                res: `{ "id": "uuid", "is_verified": true }`
            },
            {
                method: 'POST',
                path: '/api/v1/taxpayers/bulk',
                desc: 'Bulk Create - Batch import multiple taxpayers',
                req: `{\n  "taxpayers": [\n    { "full_name": "Jane Doe", "tin": "0987654321" }\n  ]\n}`,
                res: `{\n  "successful_count": 1,\n  "failed_count": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/stats/summary',
                desc: 'Get Summary Stats - Taxpayer demographics and status breakdown',
                req: null,
                res: `{\n  "total": 5000,\n  "verified": 4800,\n  "by_state": { "Lagos": 2000 }\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/search/tin/{tin}',
                desc: 'Search by TIN - Quick lookup by Tax Identification Number',
                req: null,
                res: `{ "id": "uuid", "full_name": "John Doe", "tin": "1234567890" }`
            }
        ]
    },
    {
        category: 'Filings',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/filings/',
                desc: 'Create Filing - Submit a new tax filing (PAYE, VAT, WHT, DEV_LEVY)',
                req: `{\n  "taxpayer_id": "uuid",\n  "tax_type": "PAYE",\n  "period": "2026-03",\n  "amount_payable": 15000.00,\n  "due_date": "2026-04-10"\n}`,
                res: `{\n  "id": "uuid",\n  "status": "draft"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/',
                desc: 'Get Filings - Filtered list of filings with late status and amendment tracking',
                req: null,
                res: `{\n  "items": [],\n  "total": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/{filing_id}',
                desc: 'Get Filing Detail - Full data including audit logs and attachments',
                req: null,
                res: `{\n  "id": "uuid",\n  "taxpayer": {},\n  "attachments": [],\n  "status": "submitted"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/submit/',
                desc: 'Submit Filing - Finalize and submit to tax office',
                req: `{\n  "submission_reference": "REF123",\n  "notes": "March filing"\n}`,
                res: `{ "id": "uuid", "status": "submitted" }`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/verify/',
                desc: 'Verify Filing - Acknowledge receipt and verify accuracy',
                req: `{\n  "verification_notes": "All checks passed"\n}`,
                res: `{ "id": "uuid", "status": "acknowledged" }`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/reject/',
                desc: 'Reject Filing - Mark filing as rejected with reasons',
                req: `{\n  "rejection_reason": "Incomplete documentation"\n}`,
                res: `{ "id": "uuid", "status": "rejected" }`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/amendments/',
                desc: 'Create Amendment - Generate an amendment for an existing filing',
                req: `{\n  "amount_payable": 16000.00,\n  "notes": "Corrected salary data"\n}`,
                res: `{ "id": "uuid", "parent_filing_id": "uuid", "status": "draft" }`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/stats/summary/',
                desc: 'Get Filing Stats - Aggregate filing amounts and status distribution',
                req: null,
                res: `{\n  "total_filings": 1200,\n  "total_amount_payable": 5000000.00\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/calendar/events/',
                desc: 'Get Calendar Events - Monthly view of upcoming and past filing deadlines',
                req: null,
                res: `[\n  { "filing_id": "uuid", "title": "PAYE - John Doe", "start": "2026-04-10" }\n]`
            }
        ]
    },
    {
        category: 'Refunds',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/refunds/',
                desc: 'Initiate Refund - Create a new refund case claim',
                req: `{\n  "taxpayer_id": "uuid",\n  "tax_year": "2025",\n  "amount_claimed": 75000.00,\n  "reason": "Redundancy relief"\n}`,
                res: `{\n  "id": "uuid",\n  "case_number": "REF-2026-101",\n  "status": "initiated"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/',
                desc: 'Get Refund Cases - Track status and SLA compliance across all claims',
                req: null,
                res: `{\n  "items": [],\n  "total": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/{refund_id}',
                desc: 'Get Refund Detail - Full history, timeline, and associated documents',
                req: null,
                res: `{\n  "id": "uuid",\n  "timeline": [],\n  "updates": []\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/submit-to-tax-office/',
                desc: 'Submit to Tax Office - Move case to official review status',
                req: `{\n  "submission_reference": "TAX-12345"\n}`,
                res: `{ "id": "uuid", "status": "submitted" }`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/approve/',
                desc: 'Approve Refund - Authorize refund payment',
                req: `{\n  "amount_approved": 75000.00,\n  "approval_notes": "Verified"\n}`,
                res: `{ "id": "uuid", "status": "approved" }`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/reject/',
                desc: 'Reject Refund - Deny refund claim with explanation',
                req: `{\n  "rejection_reason": "Ineligible assessment year"\n}`,
                res: `{ "id": "uuid", "status": "rejected" }`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/disburse/',
                desc: 'Mark Disbursed - Confirm funds have been sent to taxpayer',
                req: `{\n  "amount_disbursed": 75000.00,\n  "disbursement_method": "direct_credit"\n}`,
                res: `{ "id": "uuid", "status": "disbursed" }`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/stats/summary/',
                desc: 'Get Refund Stats - Approval rates, disbursement totals, and TAT metrics',
                req: null,
                res: `{\n  "total_claimed": 10000000.00,\n  "total_approved": 8500000.00\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/dashboard/metrics',
                desc: 'Dashboard Metrics - Real-time SLA monitoring and volume tracking',
                req: null,
                res: `{\n  "sla_compliance_rate": 94.2,\n  "pending_review": 12\n}`
            }
        ]
    },
    {
        category: 'Compliance',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/compliance/scores/calculate/',
                desc: 'Calculate Score - Run compliance engine for a specific taxpayer',
                req: `{\n  "taxpayer_id": "uuid",\n  "force_recalculation": true\n}`,
                res: `{\n  "score": 92,\n  "risk_level": "low",\n  "risk_reasons": []\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/scores/',
                desc: 'Get Scores - Monitor compliance trends across the organization',
                req: null,
                res: `{\n  "items": [],\n  "average_score": 85.2\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/scores/{taxpayer_id}',
                desc: 'Get Detailed Score - Breakdown of rules triggered and their impact',
                req: null,
                res: `{\n  "taxpayer": {},\n  "triggered_rules_detail": [\n    { "rule_name": "Late Filing", "score_impact": -10 }\n  ]\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/alerts',
                desc: 'Get Alerts - Critical compliance failures requiring action',
                req: null,
                res: `[\n  {\n    "id": "uuid",\n    "alert_type": "missing_filing",\n    "severity": "high"\n  }\n]`
            },
            {
                method: 'POST',
                path: '/api/v1/compliance/alerts/{alert_id}/resolve',
                desc: 'Resolve Alert - Record resolution of compliance issue',
                req: `{\n  "resolution_notes": "Filing completed manually"\n}`,
                res: `{ "id": "uuid", "is_resolved": true }`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/stats/summary/',
                desc: 'Get Compliance Stats - Organization-wide risk distribution',
                req: null,
                res: `{\n  "average_score": 88.5,\n  "unresolved_alerts": 4\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/health',
                desc: 'System Health - Status of compliance engine and MVP rules',
                req: null,
                res: `{\n  "status": "healthy",\n  "mvp_rules_initialized": true\n}`
            }
        ]
    }
];

export const guides = {
    overview: {
        title: "API Overview",
        description: "The REE-FOND API provides access to tax refund and compliance services. The API follows RESTful conventions and uses standard HTTP methods and status codes.",
        sections: [
            {
                heading: "Base Configuration",
                content: "All API requests should be made to the base URL below with the appropriate headers.",
                list: [
                    "Base URL: /api/v1",
                    "Content-Type: application/json",
                    "Encoding: UTF-8"
                ]
            },
            {
                heading: "RESTful Conventions",
                content: "We use standard HTTP verbs for CRUD operations. Note: Collection and Action endpoints consistently use trailing slashes.",
                list: [
                    "GET: Retrieve resources",
                    "POST: Create new resources / Perform actions",
                    "PUT/PATCH: Update existing resources",
                    "DELETE: Remove resources"
                ]
            }
        ]
    },
    authentication: {
        title: "Authentication Architecture",
        description: "Ree-fond uses a robust JWT-based Stateless Authentication system. All private endpoints require a Bearer Token in the Authorization header.",
        sections: [
            {
                heading: "Authorization Header",
                content: "Include your access token in the header of every private request:",
                code: {
                    lang: "bash",
                    label: "Example Header",
                    snippet: "Authorization: Bearer <your_access_token>"
                }
            },
            {
                heading: "Security Core",
                content: "Our security layer is built on FastAPI and SQLAlchemy, utilizing OAuth2 with Bearer tokens. All passwords are hashed using bcrypt before storage.",
                badges: ["JWT", "Bcrypt", "RBAC", "Stateless"]
            },
            {
                heading: "Role-Based Access Control (RBAC)",
                content: "Access to resources is strictly governed by user roles. The system verifies both authentication status and specific role permissions for protected endpoints.",
                roles: [
                    { name: "ADMIN", desc: "Full system access. Can manage all organizations and platform configurations." },
                    { name: "ORGANIZATION", desc: "Manages a specific accounting firm or payroll provider entity." },
                    { name: "ACCOUNTANT", desc: "Standard user for managing client filings and tax profiles." },
                    { name: "EMPLOYER", desc: "Restricted access to specific employee payroll data." }
                ]
            }
        ]
    },
    schematics: {
        title: "Core Resource Schematics",
        description: "Detailed structure of the core resources as defined in our domain models. All entities typically inherit the base fields (id, created_at, updated_at).",
        sections: [
            {
                heading: "1. User Entity",
                content: "Represents a physical user or system account.",
                table: [
                    { field: "name", type: "String", desc: "Full name." },
                    { field: "email", type: "String", desc: "Unique email address (login credential)." },
                    { field: "role", type: "Enum", desc: "ADMIN, ACCOUNTANT, EMPLOYER, ORGANIZATION." },
                    { field: "organization_id", type: "UUID", desc: "The organization this user belongs to." },
                    { field: "is_active", type: "Boolean", desc: "Defaults to True." }
                ]
            },
            {
                heading: "2. Organization Entity",
                content: "The primary tenant entity representing accounting firms or employers.",
                table: [
                    { field: "name", type: "String", desc: "Legal name of the entity." },
                    { field: "type", type: "Enum", desc: "employer, accounting_firm, fintech, government." },
                    { field: "status", type: "Enum", desc: "pending, active, suspended, verified." },
                    { field: "subscription_plan", type: "Enum", desc: "free, basic, growth, enterprise." },
                    { field: "credit_balance", type: "Decimal", desc: "Organization's internal fund balance." }
                ]
            },
            {
                heading: "3. Taxpayer Entity",
                content: "The subject of tax filings and refund claims with 2026-ready attributes.",
                table: [
                    { field: "full_name", type: "String", desc: "Legal name." },
                    { field: "tin", type: "String", desc: "Tax Identification Number." },
                    { field: "bvn", type: "String", desc: "2026 Ready: Bank Verification Number." },
                    { field: "nin", type: "String", desc: "2026 Ready: National Identity Number." },
                    { field: "residency_status", type: "Enum", desc: "resident, non_resident." },
                    { field: "worldwide_income_flag", type: "Boolean", desc: "Flag for global tax assessment." }
                ]
            }
        ]
    },
    pricing: {
        title: "Ree-fond Pricing Plans",
        description: "Scale your tax infrastructure with our flexible pricing tiers. From developer-friendly starters to full-scale enterprise solutions.",
        sections: [
            {
                heading: "Starter (Free Tier)",
                content: "Best for small startups and developer sandbox testing.",
                badges: ["Free", "Distribution Engine"],
                list: [
                    "1 organization / 2 users",
                    "50 taxpayers / 50 filings per month",
                    "1 active refund case",
                    "Basic compliance scoring",
                    "API Sandbox access"
                ]
            },
            {
                heading: "Basic Plan — “Compliance Starter”",
                content: "₦25,000 – ₦40,000 per month. Designed for small businesses and payroll startups.",
                badges: ["Popular", "SME Ready"],
                list: [
                    "1 organization / 5 users",
                    "1,000 taxpayers",
                    "Unlimited filings",
                    "Refund case tracking",
                    "Document storage & Audit trail",
                    "Usage: ₦10 per extra taxpayer, ₦3k/mo extra storage"
                ]
            },
            {
                heading: "Growth Plan — “Compliance Pro”",
                content: "₦120,000 – ₦200,000 per month. The standard for accounting firms and mid-size platforms.",
                badges: ["Pro", "High Volume"],
                list: [
                    "3 organizations / 20 users",
                    "10,000 taxpayers",
                    "Priority refund tracking (SLA: 24h response)",
                    "Custom compliance rules engine",
                    "Bulk filing API",
                    "Advanced analytics and reporting"
                ]
            }
        ]
    }
};
