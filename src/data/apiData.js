// REE-FOND API Reference - Complete Endpoint Documentation
// Generated from backend routes - Version 1.0

export const apiData = [
    {
        category: 'Authentication',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/auth/login',
                desc: 'Login - Authenticate user and return JWT token',
                req: `{\n  "email": "user@example.com",\n  "password": "string"\n}`,
                res: `{\n  "access_token": "string",\n  "token_type": "bearer",\n  "user": {\n    "name": "string",\n    "email": "user@example.com",\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "role": "ADMIN",\n    "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "is_active": true,\n    "is_verified": true,\n    "created_at": "2026-01-15T23:44:14.627Z"\n  }\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/register',
                desc: 'Register - Register a new user',
                req: `{\n  "name": "string",\n  "email": "user@example.com",\n  "password": "stringst",\n  "role": "ACCOUNTANT",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`,
                res: `{\n  "name": "string",\n  "email": "user@example.com",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ACCOUNTANT",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_active": true,\n  "is_verified": false,\n  "created_at": "2026-01-15T23:44:14.650Z"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/auth/register-with-organization',
                desc: 'Register With Organization - Register an organization with an admin user',
                req: `{\n  "name": "string",\n  "type": "accounting_firm",\n  "state": "Lagos",\n  "admin_user": {\n    "name": "string",\n    "email": "user@example.com",\n    "password": "stringst"\n  }\n}`,
                res: `{\n  "organization": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "name": "string",\n    "status": "pending"\n  },\n  "user": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "email": "user@example.com",\n    "role": "ADMIN"\n  }\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/auth/me',
                desc: 'Get Current User Info - Get current authenticated user\'s information',
                req: null,
                res: `{\n  "name": "string",\n  "email": "user@example.com",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ADMIN",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_active": true,\n  "is_verified": true,\n  "created_at": "2026-01-15T23:44:14.690Z"\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/auth/me',
                desc: 'Update Current User - Update current user\'s information',
                req: `{\n  "name": "string",\n  "email": "user@example.com"\n}`,
                res: `{\n  "name": "string",\n  "email": "user@example.com",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ADMIN",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_active": true,\n  "is_verified": true,\n  "created_at": "2026-01-15T23:44:14.709Z"\n}`
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
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "name": "string",\n  "type": "accounting_firm",\n  "status": "pending",\n  "is_verified": false,\n  "created_at": "2026-01-15T23:44:16.665Z"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/',
                desc: 'Get Organizations - Get list of organizations with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "name": "string",\n      "type": "accounting_firm",\n      "status": "active"\n    }\n  ],\n  "total": 0,\n  "page": 1,\n  "size": 20,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/{organization_id}',
                desc: 'Get Organization - Get organization by ID with detailed information',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "name": "string",\n  "type": "accounting_firm",\n  "status": "active",\n  "users": [],\n  "settings": {},\n  "documents": [],\n  "recent_activities": []\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/organizations/{organization_id}',
                desc: 'Update Organization - Update organization information',
                req: `{\n  "name": "string",\n  "contact_email": "user@example.com",\n  "address": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "name": "string",\n  "status": "active"\n}`
            },
            {
                method: 'DELETE',
                path: '/api/v1/organizations/{organization_id}',
                desc: 'Delete Organization - Delete an organization (ADMIN only)',
                req: null,
                res: null
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/verify',
                desc: 'Verify Organization - Verify an organization (ADMIN only)',
                req: `{\n  "is_verified": true,\n  "verification_notes": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_verified": true,\n  "status": "active"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/subscription',
                desc: 'Update Organization Subscription - Update organization subscription (ADMIN only)',
                req: `{\n  "subscription_plan": "professional",\n  "subscription_start_date": "2026-01-15",\n  "subscription_end_date": "2027-01-15",\n  "is_auto_renew": true\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "subscription_plan": "professional",\n  "subscription_is_active": true\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/invitations',
                desc: 'Create Invitation - Create an invitation to join an organization',
                req: `{\n  "email": "user@example.com",\n  "role": "ACCOUNTANT"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "email": "user@example.com",\n  "role": "ACCOUNTANT",\n  "token": "string",\n  "status": "pending",\n  "expires_at": "2026-02-15"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/{organization_id}/invitations',
                desc: 'Get Organization Invitations - Get invitations for an organization',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "email": "user@example.com",\n    "role": "ACCOUNTANT",\n    "status": "pending"\n  }\n]`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/invitations/accept',
                desc: 'Accept Invitation - Accept an organization invitation',
                req: `{\n  "token": "string"\n}`,
                res: `{\n  "message": "Invitation accepted successfully",\n  "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ACCOUNTANT"\n}`
            },
            {
                method: 'DELETE',
                path: '/api/v1/organizations/invitations/{invitation_id}',
                desc: 'Revoke Invitation - Revoke an invitation',
                req: null,
                res: null
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/{organization_id}/users',
                desc: 'Get Organization Users - Get users in an organization',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "name": "string",\n    "email": "user@example.com",\n    "role": "ACCOUNTANT"\n  }\n]`
            },
            {
                method: 'POST',
                path: '/api/v1/organizations/{organization_id}/credit',
                desc: 'Add Organization Credit - Add credit to organization balance (ADMIN only)',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "credit_balance": "1000.00"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/stats/summary',
                desc: 'Get Organizations Stats - Get organization statistics',
                req: null,
                res: `{\n  "total_organizations": 0,\n  "by_type": {},\n  "by_status": {},\n  "average_compliance_score": 85.5\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/organizations/{organization_id}/dashboard',
                desc: 'Get Organization Dashboard - Get organization dashboard data',
                req: null,
                res: `{\n  "overview": {},\n  "recent_activities": [],\n  "top_taxpayers": [],\n  "compliance_summary": {},\n  "subscription_status": {},\n  "usage_metrics": {}\n}`
            }
        ]
    },
    {
        category: 'Taxpayers',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/taxpayers',
                desc: 'Create Taxpayer - Create a new taxpayer with 2026-ready attributes (BVN, NIN, Residency, Worldwide Income Flag)',
                req: `{\n  "full_name": "string",\n  "tin": "12345678901",\n  "bvn": "22345678901",\n  "nin": "12345678901",\n  "residency_status": "resident",\n  "worldwide_income_flag": true,\n  "email": "user@example.com",\n  "phone_number": "+234XXXXXXXXXX",\n  "state": "Lagos",\n  "tax_type": "PAYE",\n  "employer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "full_name": "string",\n  "tin": "12345678901",\n  "status": "active",\n  "is_verified": false,\n  "created_at": "2026-01-15T23:44:14.627Z"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers',
                desc: 'Get Taxpayers - Get list of taxpayers with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "full_name": "string",\n      "tin": "12345678901",\n      "status": "active"\n    }\n  ],\n  "total": 0,\n  "page": 1,\n  "size": 20,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/{taxpayer_id}',
                desc: 'Get Taxpayer - Get taxpayer by ID with detailed information',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "full_name": "string",\n  "tin": "12345678901",\n  "bvn": "22345678901",\n  "nin": "12345678901",\n  "status": "active",\n  "filing_count": 0,\n  "active_refund_cases": 0\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/taxpayers/{taxpayer_id}',
                desc: 'Update Taxpayer - Update taxpayer information',
                req: `{\n  "full_name": "string",\n  "email": "user@example.com",\n  "phone_number": "+234XXXXXXXXXX"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "full_name": "string",\n  "status": "active"\n}`
            },
            {
                method: 'DELETE',
                path: '/api/v1/taxpayers/{taxpayer_id}',
                desc: 'Delete Taxpayer - Delete a taxpayer (soft or hard delete)',
                req: null,
                res: null
            },
            {
                method: 'POST',
                path: '/api/v1/taxpayers/{taxpayer_id}/verify',
                desc: 'Verify Taxpayer - Mark taxpayer as verified',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_verified": true\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/taxpayers/bulk',
                desc: 'Bulk Create Taxpayers - Create multiple taxpayers at once',
                req: `{\n  "taxpayers": [\n    {\n      "full_name": "string",\n      "tin": "12345678901",\n      "employer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n    }\n  ]\n}`,
                res: `{\n  "successful": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "full_name": "string"\n    }\n  ],\n  "failed": [],\n  "total_processed": 1,\n  "successful_count": 1,\n  "failed_count": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/{taxpayer_id}/filings',
                desc: 'Get Taxpayer Filings - Get all filings for a taxpayer',
                req: null,
                res: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "filings": []\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/stats/summary',
                desc: 'Get Taxpayer Stats - Get taxpayer statistics',
                req: null,
                res: `{\n  "total": 0,\n  "active": 0,\n  "by_state": {},\n  "by_tax_type": {}\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/taxpayers/search/tin/{tin}',
                desc: 'Search By TIN - Search for taxpayer by TIN',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "full_name": "string",\n  "tin": "12345678901",\n  "status": "active"\n}`
            }
        ]
    },
    {
        category: 'Filings',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/filings',
                desc: 'Create Filing - Create a new filing (Supports PAYE, WHT, VAT, DEV_LEVY)',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "tax_type": "PAYE",\n  "period": "2026-01",\n  "due_date": "2026-02-15",\n  "state": "Lagos",\n  "amount_payable": 50000.00\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft",\n  "created_at": "2026-01-15T23:44:14.627Z"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings',
                desc: 'Get Filings - Get list of filings with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "tax_type": "PAYE",\n      "status": "draft"\n    }\n  ],\n  "total": 0,\n  "page": 1,\n  "size": 20,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/{filing_id}',
                desc: 'Get Filing - Get filing by ID with detailed information',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft",\n  "taxpayer": {},\n  "attachments": []\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/filings/{filing_id}',
                desc: 'Update Filing - Update filing information',
                req: `{\n  "status": "submitted",\n  "amount_paid": 50000.00\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "submitted"\n}`
            },
            {
                method: 'DELETE',
                path: '/api/v1/filings/{filing_id}',
                desc: 'Delete Filing - Delete a filing',
                req: null,
                res: null
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/submit',
                desc: 'Submit Filing - Submit a filing (change status to submitted)',
                req: `{\n  "filing_date": "2026-01-15",\n  "submission_reference": "REF123"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "submitted"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/verify',
                desc: 'Verify Filing - Verify a filing (change status to acknowledged)',
                req: `{\n  "verification_notes": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "acknowledged"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/reject',
                desc: 'Reject Filing - Reject a filing',
                req: `{\n  "rejection_reason": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "rejected"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/amendments',
                desc: 'Create Amendment - Create an amendment filing',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "amount_payable": 55000.00\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "parent_filing_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/{filing_id}/amendments',
                desc: 'Get Amendments - Get all amendments for a filing',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "parent_filing_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "status": "draft"\n  }\n]`
            },
            {
                method: 'POST',
                path: '/api/v1/filings/{filing_id}/attachments',
                desc: 'Add Attachment - Add attachment to filing',
                req: `{\n  "filename": "receipt.pdf",\n  "file_url": "https://s3.amazonaws.com/...",\n  "file_type": "PDF"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "filename": "receipt.pdf",\n  "filing_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/{filing_id}/attachments',
                desc: 'Get Attachments - Get all attachments for a filing',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "filename": "receipt.pdf",\n    "file_url": "string"\n  }\n]`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/stats/summary',
                desc: 'Get Filing Stats - Get filing statistics',
                req: null,
                res: `{\n  "total_filings": 0,\n  "by_status": {},\n  "by_tax_type": {},\n  "total_amount_payable": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/filings/calendar',
                desc: 'Get Calendar Events - Get filings for calendar view',
                req: null,
                res: `[\n  {\n    "filing_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "taxpayer_name": "string",\n    "due_date": "2026-02-15",\n    "status": "pending"\n  }\n]`
            }
        ]
    },
    {
        category: 'Refunds',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/refunds',
                desc: 'Create Refund Case - Create a new refund case',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "tax_year": 2025,\n  "amount_claimed": 100000.00,\n  "reason": "Overpayment of PAYE",\n  "description": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "case_number": "REF-2026-001",\n  "status": "initiated",\n  "created_at": "2026-01-15T23:44:14.627Z"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds',
                desc: 'Get Refund Cases - Get list of refund cases with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "case_number": "REF-2026-001",\n      "status": "initiated",\n      "amount_claimed": 100000.00\n    }\n  ],\n  "total": 0,\n  "page": 1,\n  "size": 20,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/{refund_id}',
                desc: 'Get Refund Case - Get refund case by ID with detailed information',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "case_number": "REF-2026-001",\n  "status": "initiated",\n  "taxpayer": {},\n  "timeline": [],\n  "documents": []\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/refunds/{refund_id}',
                desc: 'Update Refund Case - Update refund case information',
                req: `{\n  "status": "under_review",\n  "priority": "high"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "under_review"\n}`
            },
            {
                method: 'DELETE',
                path: '/api/v1/refunds/{refund_id}',
                desc: 'Delete Refund Case - Delete a refund case',
                req: null,
                res: null
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/submit',
                desc: 'Submit To Tax Office - Submit refund case to tax office',
                req: `{\n  "submitted_date": "2026-01-15",\n  "submission_reference": "TAX-REF-123"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "submitted"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/approve',
                desc: 'Approve Refund - Approve a refund case',
                req: `{\n  "amount_approved": 95000.00,\n  "approval_date": "2026-02-01",\n  "approval_notes": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "approved",\n  "amount_approved": 95000.00\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/reject',
                desc: 'Reject Refund - Reject a refund case',
                req: `{\n  "rejection_reason": "Insufficient documentation",\n  "rejection_date": "2026-02-01"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "rejected"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/disburse',
                desc: 'Disburse Refund - Mark refund as disbursed',
                req: `{\n  "amount_disbursed": 95000.00,\n  "disbursement_date": "2026-02-15",\n  "disbursement_method": "Bank Transfer"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "disbursed",\n  "amount_disbursed": 95000.00\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/appeal',
                desc: 'Appeal Refund - Appeal a rejected refund case',
                req: `{\n  "appeal_reason": "string",\n  "additional_documents": []\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "under_appeal"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/withdraw',
                desc: 'Withdraw Refund - Withdraw a refund case',
                req: `{\n  "withdrawal_reason": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "withdrawn"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/{refund_id}/timeline',
                desc: 'Get Refund Timeline - Get timeline of events for a refund case',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "event_type": "status_change",\n    "description": "Case initiated",\n    "created_at": "2026-01-15T23:44:14.627Z"\n  }\n]`
            },
            {
                method: 'POST',
                path: '/api/v1/refunds/{refund_id}/updates',
                desc: 'Add Refund Update - Add an update to a refund case',
                req: `{\n  "update_type": "progress_update",\n  "message": "string",\n  "is_internal": false\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "update_type": "progress_update",\n  "message": "string"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/{refund_id}/updates',
                desc: 'Get Refund Updates - Get all updates for a refund case',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "update_type": "progress_update",\n    "message": "string",\n    "created_at": "2026-01-15T23:44:14.627Z"\n  }\n]`
            },
            {
                method: 'GET',
                path: '/api/v1/refunds/stats/summary',
                desc: 'Get Refund Stats - Get refund statistics',
                req: null,
                res: `{\n  "total_cases": 0,\n  "by_status": {},\n  "total_amount_claimed": 0,\n  "total_amount_approved": 0,\n  "total_amount_disbursed": 0\n}`
            }
        ]
    },
    {
        category: 'Compliance',
        endpoints: [
            {
                method: 'POST',
                path: '/api/v1/compliance/rules',
                desc: 'Create Compliance Rule - Create a new compliance rule (ADMIN only)',
                req: `{\n  "rule_code": "FILING_DEADLINE",\n  "name": "Filing Deadline Check",\n  "rule_type": "deadline",\n  "is_active": true\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "rule_code": "FILING_DEADLINE",\n  "name": "Filing Deadline Check"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/rules',
                desc: 'Get Compliance Rules - Get list of compliance rules',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "rule_code": "FILING_DEADLINE",\n    "name": "Filing Deadline Check",\n    "is_active": true\n  }\n]`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/rules/{rule_id}',
                desc: 'Get Compliance Rule - Get compliance rule by ID',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "rule_code": "FILING_DEADLINE",\n  "name": "Filing Deadline Check",\n  "is_active": true\n}`
            },
            {
                method: 'PUT',
                path: '/api/v1/compliance/rules/{rule_id}',
                desc: 'Update Compliance Rule - Update compliance rule (ADMIN only)',
                req: `{\n  "name": "Updated Rule Name",\n  "is_active": false\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "rule_code": "FILING_DEADLINE",\n  "is_active": false\n}`
            },
            {
                method: 'DELETE',
                path: '/api/v1/compliance/rules/{rule_id}',
                desc: 'Delete Compliance Rule - Delete (deactivate) a compliance rule (ADMIN only)',
                req: null,
                res: null
            },
            {
                method: 'POST',
                path: '/api/v1/compliance/scores/calculate',
                desc: 'Calculate Compliance Score - Calculate compliance score for a taxpayer',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "force_recalculation": false\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "score": 85.5,\n  "risk_level": "low",\n  "exposure_level": "low",\n  "calculated_at": "2026-01-15T23:44:14.627Z"\n}`
            },
            {
                method: 'POST',
                path: '/api/v1/compliance/scores/bulk-calculate',
                desc: 'Bulk Calculate Compliance Scores - Calculate compliance scores for multiple taxpayers',
                req: `{\n  "taxpayer_ids": [\n    "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n  ],\n  "force_recalculation": false\n}`,
                res: `{\n  "successful": [\n    {\n      "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "score": 85.5\n    }\n  ],\n  "failed": [],\n  "total_processed": 1\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/scores',
                desc: 'Get Compliance Scores - Get list of compliance scores with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "score": 85.5,\n      "risk_level": "low"\n    }\n  ],\n  "total": 0,\n  "page": 1,\n  "size": 20,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/scores/taxpayers/{taxpayer_id}',
                desc: 'Get Taxpayer Compliance Score - Get current compliance score for a taxpayer',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "score": 85.5,\n  "risk_level": "low",\n  "exposure_level": "low",\n  "risk_reasons": [],\n  "calculated_at": "2026-01-15T23:44:14.627Z"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/scores/taxpayers/{taxpayer_id}/history',
                desc: 'Get Taxpayer Compliance History - Get compliance score history for a taxpayer',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "score": 85.5,\n    "risk_level": "low",\n    "calculated_at": "2026-01-15T23:44:14.627Z"\n  }\n]`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/alerts',
                desc: 'Get Compliance Alerts - Get compliance alerts',
                req: null,
                res: `[\n  {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "alert_type": "missing_filing",\n    "severity": "high",\n    "is_resolved": false\n  }\n]`
            },
            {
                method: 'POST',
                path: '/api/v1/compliance/alerts/{alert_id}/resolve',
                desc: 'Resolve Compliance Alert - Resolve a compliance alert',
                req: `{\n  "resolution_notes": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_resolved": true,\n  "resolved_at": "2026-01-15T23:44:14.627Z"\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/stats/summary',
                desc: 'Get Compliance Stats - Get compliance statistics',
                req: null,
                res: `{\n  "average_score": 85.5,\n  "by_risk_level": {},\n  "by_exposure_level": {},\n  "total_alerts": 0,\n  "unresolved_alerts": 0\n}`
            },
            {
                method: 'GET',
                path: '/api/v1/compliance/dashboard',
                desc: 'Get Compliance Dashboard - Get compliance dashboard data',
                req: null,
                res: `{\n  "overview": {},\n  "risk_distribution": {},\n  "recent_alerts": [],\n  "trending_scores": []\n}`
            }
        ]
    }
];

export const guides = {
    authentication: {
        title: "Authentication Architecture",
        description: "Ree-fond uses a robust JWT-based Stateless Authentication system with Role-Based Access Control (RBAC).",
        sections: [
            {
                heading: "Security Core",
                content: "Our security layer is built on FastAPI and SQLAlchemy, utilizing OAuth2 with Bearer tokens. All passwords are hashed using bcrypt before storage.",
                badges: ["JWT", "Bcrypt", "RBAC", "Stateless"]
            },
            {
                heading: "Authentication Flow",
                content: "The login process authenticates credentials against the database and issues a signed JWT access token containing the user's identity and role.",
                code: {
                    lang: "python",
                    label: "Auth Service Logic",
                    snippet: `@staticmethod
async def login(db: AsyncSession, login_data: LoginRequest):
    user = await AuthService.authenticate_user(db, login_data)
    
    if not user:
        raise UnauthorizedException("Incorrect email or password")
    
    # Create access token with strictly typed payload
    access_token = create_access_token(
        data={"sub": str(user.id), "email": user.email, "role": user.role.value}
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }`
                }
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
            },
            {
                heading: "Protected Route Dependencies",
                content: "Routes are protected using composable dependencies that verify the token and check for required roles.",
                code: {
                    lang: "python",
                    label: "Dependency Injection",
                    snippet: `# Role-specific dependencies
async def require_admin(current_user: User = Depends(get_current_user)):
    AuthService.require_role(current_user, [UserRole.ADMIN.value])
    return current_user

async def require_accountant(current_user: User = Depends(get_current_user)):
    AuthService.require_role(current_user, [UserRole.ACCOUNTANT.value, UserRole.ADMIN.value])
    return current_user`
                }
            },
            {
                heading: "Standardized Exceptions",
                content: "The API uses a unified exception handling strategy to ensure consistent error responses across the platform.",
                list: [
                    "401 Unauthorized: Invalid credentials or expired token.",
                    "403 Forbidden: Insufficient permissions for the requested resource.",
                    "404 Not Found: Resource does not exist.",
                    "409 Conflict: Data integrity violation (e.g., duplicate email)."
                ]
            }
        ]
    },
    taxpayerManagement: {
        title: "Taxpayer Management - 2026 Ready",
        description: "Advanced taxpayer identity and compliance management with support for BVN, NIN, residency tracking, and worldwide income flags.",
        sections: [
            {
                heading: "Identity Verification Layer",
                content: "Taxpayers are uniquely identified using TIN (Tax Identification Number), BVN (Bank Verification Number), and NIN (National Identification Number) to meet 2026 FIRS requirements.",
                badges: ["TIN", "BVN", "NIN", "2026-Ready"]
            },
            {
                heading: "Residency & Worldwide Income",
                content: "Track taxpayer residency status (resident/non-resident) and worldwide income flags to properly handle cross-border tax obligations and treaty benefits.",
                list: [
                    "residency_status: Determines tax obligations and rates",
                    "worldwide_income_flag: Tracks global income reporting requirements",
                    "Automatic compliance scoring adjustments based on residency"
                ]
            }
        ]
    }
};
