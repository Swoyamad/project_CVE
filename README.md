
# CVE Aggregator – Technical Setup Manual

## Project Overview

CVE Aggregator is a Laravel-based web platform that consolidates recent cybersecurity news and vulnerability reports from sources like Hacker News, enabling real-time access to tech alerts, CVE details, and email notifications for subscribed users.

## System Requirements

### Technical Requirements
| Component             | Recommended Version      |
|----------------------|--------------------------|
| PHP                  | 8.2.12                   |
| Laravel Framework    | 11                   |
| Composer             | 2.8.5                     |
| Node.js              | 18.x                     |
| npm                  | 9.x                      |
| MySQL                | 8.x                      |
| Git                  | Latest                   |
| OS                   | Windows, macOS, Linux    |
| Web Server           | Apache (via XAMPP)       |

### Non-Technical Requirements
- Internet access for downloading dependencies
- Basic knowledge of Laravel and databases
- Familiarity with command line usage

## Tech Stack & Versions

| Technology   | Usage             |
|--------------|------------------|
| Laravel 11 | Backend framework |
| Inertia.js   | Frontend routing  |
| Vue.js       | SPA frontend      |
| Tailwind CSS | Styling           |
| Vite         | Asset bundler     |
| MySQL        | Database          |
| API          | Hacker News API   |

## Software & Applications Used

| Software          | Purpose                               | Version |
|------------------|----------------------------------------|---------|
| XAMPP             | Apache & MySQL server environment      | 8.1+    |
| Visual Studio Code| Code editor                            | Latest  |
| Git               | Version control                        | Latest  |
| Composer          | PHP dependency manager                 | 2.x     |
| Node.js & npm     | JS runtime and package manager         | 18.x / 9.x |
| Laravel Framework | PHP backend framework                  | 10.x    |
| Postman (optional)| API testing                            | Latest  |

## XAMPP Installation & Configuration

### Installing XAMPP
1. Go to: https://www.apachefriends.org/index.html
2. Download XAMPP for your OS.
3. Install with default settings.
4. Launch XAMPP Control Panel.

### Starting Services
Open XAMPP Control Panel and start:
- Apache
- MySQL

### Accessing phpMyAdmin & Creating DB
1. Visit: http://localhost/phpmyadmin
2. Click on Databases tab.
3. Create a new database: `cve_aggregator`

## Project Structure

```
├── app/               → Laravel logic
├── resources/         → Frontend Vue/Inertia + CSS
├── routes/web.php     → Application routes
├── database/          → Migrations/seeders
├── public/            → Web root
├── package.json       → Node modules
├── composer.json      → PHP modules
├── .env.example       → Config template
```

## Installation & Setup Instructions

### Cloning & Installing Dependencies
```bash
cd C:/xampp/htdocs/
git clone https://github.com/Swoyamad/project_CVE.git
cd project_CVE-main
composer install
npm install
```

### Environment Configuration
```bash
cp .env.example .env
php artisan key:generate
```

Update `.env` file:
```env
DB_DATABASE=cve_aggregator
DB_USERNAME=root
DB_PASSWORD=
```

### Database Setup
Use phpMyAdmin to create the database `cve_aggregator`.

### Running Migrations & Seeders
```bash
php artisan migrate
php artisan db:seed  # optional
```

### Running the Application
```bash
npm run dev
php artisan serve
```
Visit: http://localhost:8000

## Troubleshooting

| Issue                     | Suggested Fix                                         |
|--------------------------|--------------------------------------------------|
| Blank page / 500 error   | Check Apache/MySQL in XAMPP, `.env` configuration |
| Composer memory error    | Run `COMPOSER_MEMORY_LIMIT=-1 composer install`   |
| npm errors               | Delete `node_modules` + `package-lock.json`, reinstall |
| DB not connecting        | Verify `.env` and phpMyAdmin settings             |

## Credits

- Team: Mythical Glory  
- Client: Singh IT  
- Lead Developer: Swoyam Adhikari (Backend) Meenakshi CS (Backend) Aashish KC (Frontend) Nitish Sharma (Frontend)
- Project: CVE Aggregator – API-based Cybersecurity News Platform  
- GitHub: https://github.com/Swoyamad/project_CVE.git



<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
# hackersNews
