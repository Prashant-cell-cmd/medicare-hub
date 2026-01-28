🏥 Hospital Management System

Major Project | B.Tech Computer Science & Engineering

📌 Project Overview

The Hospital Management System (HMS) is a full-stack, role-based web application designed to automate and digitize the daily operations of hospitals and healthcare institutions.
It efficiently manages patients, doctors, appointments, medical records, billing, and reporting, reducing manual paperwork and improving accuracy, security, and operational efficiency.

This project is developed as a final-year major project and follows real-world Indian hospital workflows similar to AIIMS, Apollo, and Fortis Healthcare.

🎯 Objectives

Digitize hospital administrative and clinical processes

Reduce paperwork and human errors

Improve patient experience and service efficiency

Maintain secure and centralized medical records

Provide role-based access and accountability

Make the system scalable and production-ready

👥 User Roles & Access Control
🔑 Admin

Manage doctors, departments, and staff

View hospital statistics and KPIs

Generate monthly and yearly reports

Control system configuration

👨‍⚕️ Doctor

View assigned appointments

Update diagnosis and prescriptions

Access patient medical history

Manage follow-up visits

🧾 Receptionist

Register new patients

Book and manage appointments

Handle admissions and discharges

Generate billing and invoices

🧑‍🦽 Patient

Register and login securely

Book appointments based on doctor availability

View prescriptions and medical history

Download invoices and reports

⚙️ Core Modules
🧾 Patient Management

Unique patient ID generation

Personal details and medical history

Admission and discharge tracking

👨‍⚕️ Doctor & Department Management

Doctor profiles and specializations

Department allocation

Availability scheduling

📅 Appointment Management

Slot-based appointment booking

Conflict prevention (no double booking)

Appointment lifecycle tracking

🧠 Electronic Medical Records (EMR)

Diagnosis records

Prescriptions

Lab test reports

💰 Billing & Payment

Automatic bill calculation

Consultation and test charges

Invoice generation and payment status

🔐 Security Features

Secure authentication using JWT / session-based login

Password encryption and hashing

Role-based authorization (RBAC)

Input validation and exception handling

Protection against SQL Injection and XSS

Activity and audit logs

🛠 Technology Stack
Layer	Technology
Backend	Java, Spring Boot
Database	MySQL
ORM	Hibernate / JPA
API	RESTful Web Services
Frontend	Dashboard-based Web UI
Security	Spring Security, JWT
Build Tool	Maven
Deployment	Local / Docker (optional)
🏗 System Architecture
Client (Web UI)
      ↓
REST Controller Layer
      ↓
Service Layer (Business Logic)
      ↓
Repository Layer (JPA/Hibernate)
      ↓
MySQL Database


The system follows a layered architecture to ensure maintainability, scalability, and separation of concerns.

🗄 Database Design

Key tables used in the system:

users

patients

doctors

departments

appointments

medical_records

billing

payments

audit_logs

The database is normalized to reduce redundancy and maintain data integrity.

🧪 Testing & Validation

Unit testing for core services

Input validation on all forms

Error handling using custom exceptions

Sample test data for demo and viva

📊 UI / UX Highlights

Role-specific dashboards

Professional hospital-style design

Responsive layout (desktop & tablet)

Search, filter, and pagination in tables

📈 Future Enhancements

Telemedicine (video consultation)

SMS / Email appointment reminders

AI-based disease prediction

Mobile application integration
