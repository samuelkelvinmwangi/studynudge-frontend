# Snudge - Moringa student Motivation app

## Table of Contents
- [Introduction](#introduction)
- [MVP Features](#mvp-features)
- [Technical Stack](#technical-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Study Nudge (Snudge) Platform is a web-based application designed to provide students with authentic and verified information, inspiration, and advice in the tech space. This platform hosts a wide variety of content types, including videos, audio, and articles/blogs, all of which are created to aid in studying. This README offers an overview of the platform's features and technical details.

### Backend Repo

https://github.com/LGMAKENA/Snudge-backend

### Backend Live Link:

https://snudgeapi.onrender.com

## MVP Features

The Minimum Viable Product (MVP) of the platform includes the following key features:

- **User Types:**
  - **Admin:**
    - User Management: Add, deactivate, and manage user accounts.
    - Content Moderation: Flag or remove content violating the platform's rules.
    - Content Approval: Review and approve content for public publication.
    - Category Management: Create and manage content categories.

  - **Staff:**
    - Profile Creation: Ability to create a staff profile.
    - Category Management: Create and manage content categories.
    - Content Approval: Review and approve user-generated content.
    - Content Moderation: Flag published content that violates platform rules.
    - Content Posting: Create and post content.
    - Content Editing: Edit details of posted content.
    - Content Review: Like/dislike and comment on content.

  - **Student:**
    - Profile Creation: Ability to create a student profile.
    - Category Subscription: Subscribe to tech categories of interest.
    - Customization: Customize and manage their interests.
    - Content Posting: Create and post their content.
    - Content Consumption: View, listen to, or read content.
    - Community Interaction: Comment on posts and start comment threads.
    - Wishlist: Add content to a wishlist.
    - Content Sharing: Share and recommend videos or articles.
    - Recommendations: Receive personalized content recommendations.
    - Notifications: Get alerts for new content in subscribed categories.
    - User Interaction: View and engage with other users' remarks, comments, and discussions.

## Technical Stack

The platform is built with the following technologies:

- **Backend:**
  - Ruby on Rails

- **Database:**
  - PostgreSQL

- **Frontend:**
  - ReactJS

- **Wireframes:**
  - Figma for designing a mobile-friendly interface

- **Testing Frameworks:**
  - Vercel for frontend testing
  - Minitests for backend testing

## Installation

To set up and run the TechSpace Education Platform on your local machine, follow these steps:

1. Clone the repository from GitHub:
   ```sh
   git clone <repository-url>

2. Install the necessary dependencies for both the frontend and backend.

3. Configure your PostgreSQL database.

4. Set up environmental variables, including API keys and database configurations, in a .env file.

5. Run the development server for both the frontend and backend.

## Usage
# Here's how to use the platform:

Go to : https://studynudge-frontend-ob8r.vercel.app/

login and you can carry out the following funtions:

1. Admin: Access the admin dashboard to manage users, content, and categories.

2. Staff: Log in as staff to create, approve, and manage content in specific categories.

3. Student: Create a profile, customize your interests, subscribe to categories, post content, and engage with the community.


## Testing

Testing is a crucial part of this project. We use vercel for frontend testing and Minitests for backend testing. Ensure all tests pass before making changes or deploying updates.

# For frontend tests
npm test

# For backend tests
bundle exec minitest

## Contributing

We welcome contributions to the project! If you'd like to contribute, please follow our Contribution Guidelines.

# License

This project is licensed under the MIT License.
