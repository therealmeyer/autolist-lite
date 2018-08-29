# AUTOLIST LITE

### Heroku
I have hosted my app on heroku if you'd like to view it there
https://autolistlite.herokuapp.com/#/

### Github
https://github.com/therealmeyer/autolist-lite

### Running Locally
For backend:
* bundle install 
* rails db:setup
* rails server

For frontend (in another tab):
* npm install
* npm start

Navigate to localhost
http://localhost:3000/#/

### Time Spent
Approximately 8-10 hours

### Technologies
* PostgreSQL
* Rails
* React
* Redux

### Future Improvment/Unfinished Items
Refreshing on the car detail page: If you refresh on this page, I redirect the user back to the previous search page. I had to do this because I currently do not have a way to fetch a single car based on the vin number. When a refresh occurs there is no longer any information in the state, thus we cannot render the car detail page and another fetch has to occur. However, if we try to fetch from the API we don't know which page or price category the particular vehicle is in. I am unsure if the API allows fetching of a single car or not. If not, my solution would be to store car info in my Rails backend on a click, so that I can fetch a single car's info based on vin. Unfortunately I didn't have enough time to completely implement this.

Dealing with CORS errors on select images: check each of the image URL's for CORS errors, that is check to see if the url returns a status code of 403.

