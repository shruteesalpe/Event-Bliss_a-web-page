# Event Bliss - Event Management System

**Event Bliss** is a dynamic web-based application designed to streamline the process of browsing, booking, and managing events. Built with a focus on user engagement, it also features an integrated recruitment module for aspiring candidates to apply for jobs within the company.

---

## Features

* **Browse Events:** Users can explore a variety of event packages (Birthday Parties, Custom Events, etc.) with detailed descriptions.
* **Event Booking:** A seamless booking interface allowing users to reserve slots for their desired events.
* **Job Portal:** A dedicated section for users to browse and apply for jobs within the event management company.
* **Dynamic User Interface:** Developed using **AngularJS** to provide a smooth, single-page application feel without constant page reloads.
* **Data Management:** Robust backend handling for storing bookings and applicant details.

---

## Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript, AngularJS
* **Backend:** Node.js (MySQL Driver)
* **Database:** MySQL
* **Version Control:** Git & GitHub

---

## Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/shruteesalpe/Event-Bliss_a-web-page.git](https://github.com/shruteesalpe/Event-Bliss_a-web-page.git)
    cd Event-Bliss_a-web-page
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Database Setup**
    * Import the `contact_form_db.sql` file into your MySQL database.
    * Check `app.js` to ensure the database password matches your local MySQL password.

4.  **Run the Application**
    ```bash
    node app.js
    ```
    Open your browser and go to `http://localhost:3000` (or the port logged in your terminal).

---

## 📂 Project Structure

```text
Event-Bliss/
├── node_modules/       # Dependencies (Auto-generated)
├── contact_form_db.sql # Database structure import file
├── birthday_party.html # Event specific pages
├── custom_party.html   # Event specific pages
├── contact.html        # Contact & Job Application form
├── angular.js          # AngularJS logic
└── package.json        # Project configuration
```
---

# Authors

*Shrutee Salpe* 
