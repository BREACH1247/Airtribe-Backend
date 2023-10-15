# Airtribe Backend Assignment

  

[Link to Notion Page](https://airtribe.notion.site/Internship-Assignment-Backend-521e1797124c4b198cb58d724fc9ab15)

  ## Configure Webservice on Your Local Machine

  

**Follow these steps to configure the webservice on your local machine:**

  

**1. Clone the Repository into Your Device.**

```
git clone https://github.com/BREACH1247/Airtribe-Backend.git
```

**2. Create a `.env` file in the root directory with the following credentials:**

```env
PG_DB=admin

PG_USER=admin

PG_PASSWORD=password

PG_HOST=db

PG_NAME=test
```

  

**3. Build Docker Compose Configuration:**

```
docker compose build
```

*This command will build a network and containers for your webserver and the associated database.*

  

**4. Start the Webservice and the Database for the First Time:**

```
docker compose up
```

  

**5. Stop the Docker Compose Services:**

```
docker compose down
```

  

**6. Start the Webservice and Database Again:**

```
docker compose up
```

*Now your service is ready to use as the database is ready to accept connections.*

  

**7. Load Dummy Data and Test Connection:**

**- Hit a GET request on the following URL to load dummy data and get a connection response:**

[http://localhost:3000/](http://localhost:3000/)


 

# Airtribe Backend API Documentation

  

This documentation provides information on the Airtribe Backend API, which allows you to interact with the Airtribe platform to manage courses, leads, instructors, comments, and more.

  

## Base URL

  

- Base URL: `http://localhost:3000/`

  

## Endpoints

  

### 1. UpdateCourse

  

- **Endpoint**: `/api/updateCourse/1`

- **Method**: `PUT`

- **Description**: Update an existing course's information.

- **Request Body**:

  

```json
{

"name": "Updated Course Name",

"maxSeats": 30,

"startDate": "2023-11-15"

}
```

  

### 2. UpdateLead

  

-  **Endpoint**: `/api/updateLead/1`

-  **Method**: `PUT`

-  **Description**: Update the status of a lead.

-  **Request Body**:

  

```json
{

"status": "Rejected"

}
```

  

### 3. AddComment

  

-  **Endpoint**: `/api/addComment`

-  **Method**: `POST`

-  **Description**: Add a comment to a lead.

-  **Request Body**:

  

```json
{

"text": "This is a sample comment.",

"leadId": 1

}
```

  

### 4. CreateCourse

  

-  **Endpoint**: `/api/createCourse`

-  **Method**: `POST`

-  **Description**: Create a new course.

-  **Request Body**:

  

```json
{

"name": "Backend Dev 4",

"maxSeats": 25,

"startDate": "2023-11-01",

"instructorId": 1

}
```

  

### 5. RegisterLead

  

-  **Endpoint**: `/api/registerLead`

-  **Method**: `POST`

-  **Description**: Register a new lead.

-  **Request Body**:

  

```json
{

"name": "Aditya",

"email": "test1@gmail.com",

"phone_number": "123-456-7890",

"linkedin_profile": "https://www.linkedin.com/in/test1",

"courseId": 1

}
```

  



  

### 6. SearchLead

  

-  **Endpoint**: `/api/searchLead`

-  **Method**: `GET`

-  **Description**: Search for leads based on the provided query.

-  **Request Body**:

  

```json
{

"query": "test1@gmail.com"

}
```

  

### 7. RegisterInstructor

  

-  **Endpoint**: `/api/registerInstructor`

-  **Method**: `POST`

-  **Description**: Register a new instructor.

-  **Request Body**:

  

```json
{

"name": "Aditya test",

"email": "sinhaditya50@gmail.com"

}
```

## Future Improvements

As you continue to develop and enhance the Airtribe Backend, consider the following future improvements:

1.  **Use of Redis for Caching**: Implement Redis caching to improve the performance and reduce database load. This can help store frequently accessed data and reduce the response time for common requests.
    
2.  **Introduction to Level-Based Authentication with JWT**: Enhance the security of the API by introducing level-based authentication using JSON Web Tokens (JWT). This allows for different levels of access control, increasing the overall security of the application.
    

These improvements will contribute to the scalability, performance, and security of the Airtribe Backend API. Be sure to keep the API documentation up-to-date as you make these enhancements.