# Pagination Feature (Lab 5.2)

## What change I made in my application
- In this lab, I added pagination feature to my application so that employees are not loaded all at once. Before this change, all employee data was displayed together, which could slow down the app if there is a lot of data. Now, I limited the data to only 5 employees per page and added Next and Previous buttons to move between pages easily.

## What tool or tools you've made use of to make this change
- To implement this change, I used Express and Prisma in the backend and React in the frontend. In the backend, I used Prisma’s skip and take features to control how many records are returned. In the frontend, I used React hooks like useState and useEffect to manage the page number and fetch data dynamically when the page changes.

## How this change affects the user experience
- This change improves the user experience by making the application faster and more organized. Instead of seeing a long list of employees, users now see a small number of records at a time, which is easier to read and understand. The Next and Previous buttons also make navigation simple and user-friendly, especially when there is a large amount of data.

## How this change affects your understanding, or conceptualization, of the app.
- From this change, I learned how frontend and backend work together using query parameters like page and limit. I also understood how to manage data more efficiently instead of loading everything at once. This helped me understand the importance of performance and scalability in web applications, and how small changes can make a big difference in user experience.
