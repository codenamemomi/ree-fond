export const apiData = [
    {
        category: 'Authentication',
        endpoints: [
            {
                method: 'POST',
                path: '/auth/login',
                desc: 'Login - Authenticate user and return JWT token',
                req: `{\n  "email": "user@example.com",\n  "password": "string"\n}`,
                res: `{\n  "access_token": "string",\n  "token_type": "bearer",\n  "user": {\n    "name": "string",\n    "email": "user@example.com",\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "role": "ADMIN",\n    "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "is_active": true,\n    "is_verified": true,\n    "created_at": "2026-01-15T23:44:14.627Z"\n  }\n}`
            },
            {
                method: 'POST',
                path: '/auth/register',
                desc: 'Register - Register a new user',
                req: `{\n  "name": "string",\n  "email": "user@example.com",\n  "password": "stringst",\n  "role": "ACCOUNTANT",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`,
                res: `{\n  "name": "string",\n  "email": "user@example.com",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ADMIN",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_active": true,\n  "is_verified": true,\n  "created_at": "2026-01-15T23:44:14.650Z"\n}`
            },
            {
                method: 'POST',
                path: '/auth/register-with-organization',
                desc: 'Register With Organization - Register an organization with an admin user',
                req: `{\n  "name": "string",\n  "legal_name": "string",\n  "type": "other",\n  "registration_number": "string",\n  "tax_identification_number": "string",\n  "cac_number": "string",\n  "rc_number": "string",\n  "contact_email": "user@example.com",\n  "contact_phone": "+5(3 ((-86430 96 1892)9",\n  "website": "string",\n  "address": "string",\n  "city": "string",\n  "state": "string",\n  "country": "Nigeria",\n  "postal_code": "string",\n  "industry": "string",\n  "business_type": "string",\n  "year_established": 0,\n  "employee_count": 0,\n  "annual_revenue_range": "string",\n  "primary_tax_office": "string",\n  "tax_office_code": "string",\n  "tax_jurisdiction": "string",\n  "vat_registered": false,\n  "vat_registration_number": "string",\n  "wht_registered": false,\n  "subscription_plan": "free",\n  "subscription_start_date": "2026-01-15",\n  "subscription_end_date": "2026-01-15",\n  "is_auto_renew": true,\n  "billing_email": "user@example.com",\n  "billing_contact": "string",\n  "billing_address": "string",\n  "max_users": 5,\n  "max_taxpayers": 50,\n  "max_filings_per_month": 100,\n  "notes": "string",\n  "tags": [\n    "string"\n  ],\n  "extra_data": {},\n  "status": "pending",\n  "admin_user": {\n    "name": "string",\n    "email": "user@example.com",\n    "password": "stringst",\n    "role": "ACCOUNTANT",\n    "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n  }\n}`,
                res: `"string"`
            },
            {
                method: 'GET',
                path: '/auth/me',
                desc: 'Get Current User Info - Get current authenticated user\'s information',
                req: null,
                res: `{\n  "name": "string",\n  "email": "user@example.com",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ADMIN",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_active": true,\n  "is_verified": true,\n  "created_at": "2026-01-15T23:44:14.690Z"\n}`
            },
            {
                method: 'PUT',
                path: '/auth/me',
                desc: 'Update Current User - Update current user\'s information',
                req: `{\n  "name": "string",\n  "email": "user@example.com"\n}`,
                res: `{\n  "name": "string",\n  "email": "user@example.com",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "role": "ADMIN",\n  "organization_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_active": true,\n  "is_verified": true,\n  "created_at": "2026-01-15T23:44:14.709Z"\n}`
            },
            {
                method: 'POST',
                path: '/auth/change-password',
                desc: 'Change Password - Change current user\'s password',
                req: `{\n  "current_password": "string",\n  "new_password": "string"\n}`,
                res: `"string"`
            },
            {
                method: 'POST',
                path: '/auth/verify-email/{token}',
                desc: 'Verify Email - Verify user\'s email',
                req: null,
                res: `"string"`
            },
            {
                method: 'POST',
                path: '/auth/forgot-password',
                desc: 'Forgot Password - Request password reset',
                req: null,
                res: `"string"`
            }
        ]
    },
    {
        category: 'Organizations',
        endpoints: [
            {
                method: 'POST',
                path: '/organizations/',
                desc: 'Create Organization - Create a new organization',
                req: `{\n  "name": "string",\n  "legal_name": "string",\n  "type": "accounting_firm",\n  "registration_number": "string",\n  "tax_identification_number": "string",\n  "cac_number": "string",\n  "rc_number": "string",\n  "contact_email": "user@example.com",\n  "contact_phone": "+7(885( 59--34) ))6455( 0558(9541)3541(407(73691-0",\n  "website": "string",\n  "address": "string",\n  "city": "string",\n  "state": "string",\n  "country": "Nigeria",\n  "postal_code": "string",\n  "industry": "string",\n  "business_type": "string",\n  "year_established": 0,\n  "employee_count": 0,\n  "annual_revenue_range": "string",\n  "primary_tax_office": "string",\n  "tax_office_code": "string",\n  "tax_jurisdiction": "string",\n  "vat_registered": false,\n  "vat_registration_number": "string",\n  "wht_registered": false,\n  "subscription_plan": "free",\n  "subscription_start_date": "2026-01-15",\n  "subscription_end_date": "2026-01-15",\n  "is_auto_renew": true,\n  "billing_email": "user@example.com",\n  "billing_contact": "string",\n  "billing_address": "string",\n  "max_users": 5,\n  "max_taxpayers": 50,\n  "max_filings_per_month": 100,\n  "notes": "string",\n  "tags": [\n    "string"\n  ],\n  "extra_data": {},\n  "status": "pending"\n}`,
                res: `{\n  "name": "string",\n  "legal_name": "string",\n  "type": "consultancy",\n  "registration_number": "string",\n  "tax_identification_number": "string",\n  "cac_number": "string",\n  "rc_number": "string",\n  "contact_email": "user@example.com",\n  "contact_phone": "+- ( 2((77(9824990)-6765(56551 082(5 7(35959(6269)",\n  "website": "string",\n  "address": "string",\n  "city": "string",\n  "state": "string",\n  "country": "Nigeria",\n  "postal_code": "string",\n  "industry": "string",\n  "business_type": "string",\n  "year_established": 0,\n  "employee_count": 0,\n  "annual_revenue_range": "string",\n  "primary_tax_office": "string",\n  "tax_office_code": "string",\n  "tax_jurisdiction": "string",\n  "vat_registered": false,\n  "vat_registration_number": "string",\n  "wht_registered": false,\n  "subscription_plan": "free",\n  "subscription_start_date": "2026-01-15",\n  "subscription_end_date": "2026-01-15",\n  "is_auto_renew": true,\n  "billing_email": "user@example.com",\n  "billing_contact": "string",\n  "billing_address": "string",\n  "max_users": 5,\n  "max_taxpayers": 50,\n  "max_filings_per_month": 100,\n  "notes": "string",\n  "tags": [\n    "string"\n  ],\n  "extra_data": {},\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "active",\n  "is_verified": true,\n  "verification_date": "2026-01-15",\n  "verified_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "credit_balance": "string",\n  "outstanding_balance": "string",\n  "total_spent": "string",\n  "current_month_filings": 0,\n  "compliance_score": 0,\n  "last_compliance_check": "2026-01-15",\n  "compliance_status": "string",\n  "is_active": true,\n  "subscription_is_active": true,\n  "days_until_subscription_end": 0,\n  "taxpayer_count": 0,\n  "active_user_count": 0,\n  "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "created_at": "2026-01-15T23:44:16.665Z",\n  "updated_at": "2026-01-15T23:44:16.665Z"\n}`
            },
            {
                method: 'GET',
                path: '/organizations/',
                desc: 'Get Organizations - Get list of organizations with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "name": "string",\n      "legal_name": "string",\n      "type": "accounting_firm",\n      "registration_number": "string",\n      "tax_identification_number": "string",\n      "cac_number": "string",\n      "rc_number": "string",\n      "contact_email": "user@example.com",\n      "contact_phone": "+245-914394(0-9)3 422 785985--942-(7 2)(364317 8(4",\n      "website": "string",\n      "address": "string",\n      "city": "string",\n      "state": "string",\n      "country": "Nigeria",\n      "postal_code": "string",\n      "industry": "string",\n      "business_type": "string",\n      "year_established": 0,\n      "employee_count": 0,\n      "annual_revenue_range": "string",\n      "primary_tax_office": "string",\n      "tax_office_code": "string",\n      "tax_jurisdiction": "string",\n      "vat_registered": false,\n      "vat_registration_number": "string",\n      "wht_registered": false,\n      "subscription_plan": "free",\n      "subscription_start_date": "2026-01-15",\n      "subscription_end_date": "2026-01-15",\n      "is_auto_renew": true,\n      "billing_email": "user@example.com",\n      "billing_contact": "string",\n      "billing_address": "string",\n      "max_users": 5,\n      "max_taxpayers": 50,\n      "max_filings_per_month": 100,\n      "notes": "string",\n      "tags": [\n        "string"\n      ],\n      "extra_data": {},\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "status": "active",\n      "is_verified": true,\n      "verification_date": "2026-01-15",\n      "verified_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "credit_balance": "string",\n      "outstanding_balance": "string",\n      "total_spent": "string",\n      "current_month_filings": 0,\n      "compliance_score": 0,\n      "last_compliance_check": "2026-01-15",\n      "compliance_status": "string",\n      "is_active": true,\n      "subscription_is_active": true,\n      "days_until_subscription_end": 0,\n      "taxpayer_count": 0,\n      "active_user_count": 0,\n      "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "created_at": "2026-01-15T23:44:16.737Z",\n      "updated_at": "2026-01-15T23:44:16.737Z"\n    }\n  ],\n  "total": 0,\n  "page": 0,\n  "size": 0,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/organizations/{organization_id}',
                desc: 'Get Organization',
                req: null,
                res: `{\n  "name": "string",\n  "legal_name": "string",\n  "type": "accounting_firm",\n  "registration_number": "string",\n  "tax_identification_number": "string",\n  "cac_number": "string",\n  "rc_number": "string",\n  "contact_email": "user@example.com",\n  "contact_phone": "string",\n  "website": "string",\n  "address": "string",\n  "city": "string",\n  "state": "string",\n  "country": "Nigeria",\n  "postal_code": "string",\n  "industry": "string",\n  "business_type": "string",\n  "year_established": 0,\n  "employee_count": 0,\n  "annual_revenue_range": "string",\n  "primary_tax_office": "string",\n  "tax_office_code": "string",\n  "tax_jurisdiction": "string",\n  "vat_registered": false,\n  "vat_registration_number": "string",\n  "wht_registered": false,\n  "subscription_plan": "free",\n  "subscription_start_date": "2026-01-15",\n  "subscription_end_date": "2026-01-15",\n  "is_auto_renew": true,\n  "billing_email": "user@example.com",\n  "billing_contact": "string",\n  "billing_address": "string",\n  "max_users": 5,\n  "max_taxpayers": 50,\n  "max_filings_per_month": 100,\n  "notes": "string",\n  "tags": [\n    "string"\n  ],\n  "extra_data": {},\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "active",\n  "is_verified": true,\n  "verification_date": "2026-01-15",\n  "verified_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "credit_balance": "string",\n  "outstanding_balance": "string",\n  "total_spent": "string",\n  "current_month_filings": 0,\n  "compliance_score": 0,\n  "last_compliance_check": "2026-01-15",\n  "compliance_status": "string",\n  "is_active": true,\n  "subscription_is_active": true,\n  "days_until_subscription_end": 0,\n  "taxpayer_count": 0,\n  "active_user_count": 0,\n  "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "created_at": "2026-01-15T23:44:16.737Z",\n  "updated_at": "2026-01-15T23:44:16.737Z"\n}`
            },
            {
                method: 'PUT',
                path: '/organizations/{organization_id}',
                desc: 'Update Organization - Update organization information',
                req: `{\n  "name": "string",\n  "legal_name": "string",\n  "status": "active",\n  "contact_email": "user@example.com",\n  "contact_phone": "string",\n  "website": "string",\n  "address": "string",\n  "city": "string",\n  "state": "string",\n  "country": "string",\n  "postal_code": "string",\n  "industry": "string",\n  "business_type": "string",\n  "employee_count": 0,\n  "annual_revenue_range": "string",\n  "primary_tax_office": "string",\n  "tax_office_code": "string",\n  "vat_registered": true,\n  "vat_registration_number": "string",\n  "wht_registered": true,\n  "subscription_plan": "free",\n  "is_auto_renew": true,\n  "billing_email": "user@example.com",\n  "billing_contact": "string",\n  "billing_address": "string",\n  "max_users": 0,\n  "max_taxpayers": 0,\n  "max_filings_per_month": 0,\n  "notes": "string",\n  "tags": [\n    "string"\n  ],\n  "extra_data": {}\n}`,
                res: `{\n  "name": "string",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "active"\n}`
            },
            {
                method: 'DELETE',
                path: '/organizations/{organization_id}',
                desc: 'Delete Organization - Delete an organization',
                req: null,
                res: `"string"`
            }
        ]
    },
    {
        category: 'Taxpayers',
        endpoints: [
            {
                method: 'POST',
                path: '/taxpayers',
                desc: 'Create Taxpayer - Create a new taxpayer',
                req: `{\n  "full_name": "string",\n  "tin": "7230864469",\n  "bvn": "61150404389",\n  "nin": "56190717637",\n  "email": "user@example.com",\n  "phone_number": "+3868( (144)6",\n  "address": "string",\n  "city": "string",\n  "state": "Abia",\n  "tax_type": "PAYE",\n  "business_name": "string",\n  "rc_number": "string",\n  "business_type": "string",\n  "industry": "string",\n  "employment_status": "string",\n  "job_title": "string",\n  "employment_date": "2026-01-15",\n  "metadata": {},\n  "employer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`,
                res: `{\n  "full_name": "string",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "active"\n}`
            },
            {
                method: 'GET',
                path: '/taxpayers',
                desc: 'Get Taxpayers - Get list of taxpayers with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "full_name": "string",\n      "tin": "21652178506",\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n    }\n  ],\n  "total": 0,\n  "page": 0,\n  "size": 0,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/taxpayers/{taxpayer_id}',
                desc: 'Get Taxpayer - Get taxpayer by ID',
                req: null,
                res: `{\n  "full_name": "string",\n  "tin": "555421032683",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`
            },
            {
                method: 'PUT',
                path: '/taxpayers/{taxpayer_id}',
                desc: 'Update Taxpayer - Update taxpayer information',
                req: `{\n  "full_name": "string",\n  "email": "user@example.com"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "active"\n}`
            },
            {
                method: 'DELETE',
                path: '/taxpayers/{taxpayer_id}',
                desc: 'Delete Taxpayer - Delete a taxpayer',
                req: null,
                res: `"string"`
            },
            {
                method: 'POST',
                path: '/taxpayers/{taxpayer_id}/verify',
                desc: 'Verify Taxpayer - Mark taxpayer as verified',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "is_verified": true\n}`
            },
            {
                method: 'POST',
                path: '/taxpayers/bulk',
                desc: 'Bulk Create Taxpayers - Create multiple taxpayers at once',
                req: `{\n  "taxpayers": [\n    {\n      "full_name": "string",\n      "tin": "17329744834"\n    }\n  ]\n}`,
                res: `{\n  "successful": [\n    {\n      "full_name": "string",\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n    }\n  ],\n  "failed": [],\n  "total_processed": 1\n}`
            },
            {
                method: 'GET',
                path: '/taxpayers/{taxpayer_id}/filings',
                desc: 'Get Taxpayer Filings - Get all filings for a taxpayer',
                req: null,
                res: `[]`
            },
            {
                method: 'GET',
                path: '/taxpayers/stats/summary',
                desc: 'Get Taxpayer Stats',
                req: null,
                res: `{\n  "total": 0,\n  "active": 0\n}`
            },
            {
                method: 'GET',
                path: '/taxpayers/search/tin/{tin}',
                desc: 'Search By Tin - Search for taxpayer by TIN',
                req: null,
                res: `{\n  "full_name": "string",\n  "tin": "40755843601",\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`
            }
        ]
    },
    {
        category: 'Filings',
        endpoints: [
            {
                method: 'POST',
                path: '/filings',
                desc: 'Create Filing - Create a new filing',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "tax_type": "PAYE",\n  "period": "2037-47",\n  "period_type": "monthly",\n  "due_date": "2026-01-15",\n  "state": "Abia",\n  "amount_payable": 0\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft"\n}`
            },
            {
                method: 'GET',
                path: '/filings',
                desc: 'Get Filings - Get list of filings with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "status": "draft"\n    }\n  ],\n  "total": 0,\n  "page": 0,\n  "size": 0,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/filings/{filing_id}',
                desc: 'Get Filing - Get filing by ID',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft",\n  "taxpayer": { ... }\n}`
            },
            {
                method: 'PUT',
                path: '/filings/{filing_id}',
                desc: 'Update Filing',
                req: `{\n  "status": "draft",\n  "amount_paid": 0\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft"\n}`
            },
            {
                method: 'DELETE',
                path: '/filings/{filing_id}',
                desc: 'Delete Filing',
                req: null,
                res: `"string"`
            },
            {
                method: 'POST',
                path: '/filings/{filing_id}/submit',
                desc: 'Submit Filing - Submit a filing (change status to submitted)',
                req: `{\n  "filing_date": "2026-01-15",\n  "submission_reference": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "submitted"\n}`
            },
            {
                method: 'POST',
                path: '/filings/{filing_id}/verify',
                desc: 'Verify Filing - Verify a filing (change status to acknowledged)',
                req: `{\n  "verification_notes": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "acknowledged"\n}`
            },
            {
                method: 'POST',
                path: '/filings/{filing_id}/reject',
                desc: 'Reject Filing',
                req: `{\n  "rejection_reason": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "rejected"\n}`
            },
            {
                method: 'POST',
                path: '/filings/{filing_id}/amendments',
                desc: 'Create Amendment - Create an amendment filing',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "amount_payable": 0\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "draft"\n}`
            },
            {
                method: 'GET',
                path: '/filings/{filing_id}/amendments',
                desc: 'Get Amendments - Get all amendments for a filing',
                req: null,
                res: `[]`
            },
            {
                method: 'POST',
                path: '/filings/{filing_id}/attachments',
                desc: 'Add Attachment',
                req: `{\n  "filename": "string",\n  "file_url": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "filename": "string"\n}`
            }
        ]
    },
    {
        category: 'Refunds',
        endpoints: [
            {
                method: 'POST',
                path: '/refunds',
                desc: 'Create Refund Case',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "amount_claimed": 1,\n  "reason": "stringstri"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "initiated"\n}`
            },
            {
                method: 'GET',
                path: '/refunds',
                desc: 'Get Refund Cases - Get list of refund cases with filtering and pagination',
                req: null,
                res: `{\n  "items": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "status": "initiated"\n    }\n  ],\n  "total": 0,\n  "page": 0,\n  "size": 0,\n  "pages": 0\n}`
            },
            {
                method: 'GET',
                path: '/refunds/{refund_id}',
                desc: 'Get Refund Case - Get refund case by ID',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "initiated"\n}`
            },
            {
                method: 'PUT',
                path: '/refunds/{refund_id}',
                desc: 'Update Refund Case',
                req: `{\n  "status": "initiated",\n  "priority": "low"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "initiated"\n}`
            },
            {
                method: 'DELETE',
                path: '/refunds/{refund_id}',
                desc: 'Delete Refund Case',
                req: null,
                res: `"string"`
            },
            {
                method: 'POST',
                path: '/refunds/{refund_id}/submit',
                desc: 'Submit To Tax Office',
                req: `{\n  "submitted_date": "2026-01-15"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "submitted"\n}`
            },
            {
                method: 'POST',
                path: '/refunds/{refund_id}/approve',
                desc: 'Approve Refund',
                req: `{\n  "amount_approved": 1\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "approved"\n}`
            },
            {
                method: 'POST',
                path: '/refunds/{refund_id}/reject',
                desc: 'Reject Refund',
                req: `{\n  "rejection_reason": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "rejected"\n}`
            },
            {
                method: 'POST',
                path: '/refunds/{refund_id}/disburse',
                desc: 'Disburse Refund',
                req: `{\n  "amount_disbursed": 1\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "disbursed"\n}`
            }
        ]
    },
    {
        category: 'Compliance',
        endpoints: [
            {
                method: 'POST',
                path: '/compliance/rules',
                desc: 'Create Compliance Rule',
                req: `{\n  "rule_code": "string",\n  "name": "string"\n}`,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "rule_code": "string"\n}`
            },
            {
                method: 'GET',
                path: '/compliance/rules',
                desc: 'Get Compliance Rules',
                req: null,
                res: `[]`
            },
            {
                method: 'GET',
                path: '/compliance/rules/{rule_id}',
                desc: 'Get Compliance Rule',
                req: null,
                res: `{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`
            },
            {
                method: 'POST',
                path: '/compliance/scores/calculate',
                desc: 'Calculate Compliance Score',
                req: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}`,
                res: `{\n  "taxpayer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "score": 0\n}`
            },
            {
                method: 'GET',
                path: '/compliance/scores',
                desc: 'Get Compliance Scores',
                req: null,
                res: `{\n  "items": [],\n  "total": 0\n}`
            },
            {
                method: 'GET',
                path: '/compliance/alerts',
                desc: 'Get Compliance Alerts',
                req: null,
                res: `[]`
            }
        ]
    }
];
