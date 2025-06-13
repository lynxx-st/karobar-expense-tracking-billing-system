# Karobar - Expense Tracking & Billing System

A modern expense tracking and billing web application built with Laravel 11 and Vue 3, designed for small and medium businesses.

## Features

- 📊 Expense/income tracking with categories
- 📑 Bill/invoice/estimate generation
- 👥 Customer & vendor ledgers
- 📈 Interactive dashboard with charts
- 🔄 Recurring invoices & expenses
- 📱 Mobile-ready responsive design
- 🌙 Dark mode support
- 📸 Receipt OCR scanning
- 📤 CSV/Excel exports
- 🔔 Email notifications
- 💾 Offline mode support
- 👥 Role-based access control
- 🔄 Data backup/restore
- 🏢 Multi-company support
- 📅 Nepali calendar support

## Tech Stack

- **Backend:** Laravel 11 (PHP 8.2+)
- **Frontend:** Vue 3 + TailwindCSS + Headless UI
- **Database:** MySQL 8.0
- **Cache/Queue:** Redis
- **File Storage:** Local + S3-compatible
- **PDF Generation:** Spatie BrowserShot
- **OCR:** Tesseract
- **Testing:** PHPUnit + Laravel Feature Tests

## Prerequisites

- Docker and Docker Compose
- Git
- Make (optional, for using Makefile commands)

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/karobar.git
   cd karobar
   ```

2. Copy environment file:
   ```bash
   cp .env.example .env
   ```

3. Start the Docker containers:
   ```bash
   docker-compose up -d
   ```

4. Install dependencies and set up the application:
   ```bash
   # Install PHP dependencies
   docker-compose exec app composer install

   # Install Node.js dependencies
   docker-compose exec app npm install

   # Generate application key
   docker-compose exec app php artisan key:generate

   # Run database migrations
