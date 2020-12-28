 Youtube Search 
Task Description :

Task: Create web-application for load and search info about YouTube videos using user's request.

Use-case:

User opens the application and see search input
User types the topic inside of search input. For example javascript
Application makes call to YouTube REST API and shows results as thumbnails in horizontal list
List is scrolled through click on the page. Video count on the page depends on screen size.
Load 15 records, the rest if the records that doesn't in the screen will go into pagination. The page numbers will be below the thumbnails.
Requirements:

Chrome support and one mobile platform
HTML creates using JS. Almost no code inside index.html.
No jquery or other frameworks. You can use only lodash.
JS code should be splitted to different files depending on architecture.
Minimal info about video is title with link on youtube, preview, description, author, published date, count of views.
Data from youtube could be received using:
https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js
https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics
how too receive API key - https://www.youtube.com/watch?v=JbWnRhHfTDA
full documentation - https://developers.google.com/youtube/v3/
Design should be not be ugly
